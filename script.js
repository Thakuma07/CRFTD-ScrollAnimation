import { servicesCopy } from "./services.js";

document.addEventListener("DOMContentLoaded", async () => {
    // Wait for fonts to load for accurate width measurement
    await document.fonts.ready;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const stickySection = document.querySelector(".sticky");
    const services = document.querySelectorAll(".service");
    const indicator = document.querySelector(".indicator");
    const currentCount = document.querySelector("#current-count");
    const serviceImg = document.querySelector(".service-img");
    const serviceCopyEl = document.querySelector(".service-copy p");

    // Dynamic height calculation to account for margins
    const firstService = services[0];
    const serviceStyle = window.getComputedStyle(firstService);
    const serviceHeight = firstService.offsetHeight + parseFloat(serviceStyle.marginBottom);

    // Dynamic image height from CSS
    const imgExample = document.querySelector(".img");
    const imgHeight = imgExample.offsetHeight;

    // Total scroll distance
    const stickyHeight = window.innerHeight * services.length;

    serviceCopyEl.textContent = servicesCopy[0][0];
    let split = new SplitType(serviceCopyEl, { types: "lines" });

    const measure = document.createElement("div");
    measure.style.cssText = `
        position:absolute;
        visibility:hidden;
        white-space:nowrap;
        text-transform:uppercase;
    `;

    // Copy font styles from the actual service text to ensure accurate width measurement
    const firstServiceText = firstService.querySelector("p");
    const textStyle = window.getComputedStyle(firstServiceText);
    measure.style.fontFamily = textStyle.fontFamily;
    measure.style.fontSize = textStyle.fontSize;
    measure.style.fontWeight = textStyle.fontWeight;
    measure.style.letterSpacing = textStyle.letterSpacing;

    document.body.appendChild(measure);

    const serviceWidths = [...services].map(service => {
        measure.textContent = service.innerText;
        return measure.offsetWidth + 8;
    });

    document.body.removeChild(measure);

    gsap.set(indicator, {
        width: serviceWidths[0],
        xPercent: -50,
        left: "50%",
    });

    let currentIndex = 0;

    const animateTextChange = (index) => {
        return new Promise(resolve => {
            gsap.to(split.lines, {
                opacity: 0,
                y: -20,
                stagger: 0.03,
                onComplete: () => {
                    split.revert();
                    serviceCopyEl.textContent = servicesCopy[index][0];
                    split = new SplitType(serviceCopyEl, { types: "lines" });
                    gsap.from(split.lines, {
                        opacity: 0,
                        y: 20,
                        stagger: 0.03,
                        onComplete: resolve
                    });
                }
            });
        });
    };

    ScrollTrigger.create({
        trigger: stickySection,
        start: "top top",
        end: `+=${stickyHeight}`,
        pin: true,
        scrub: true,
        onUpdate: (self) => {
            // Use progress for more robust index calculation
            let index = Math.floor(self.progress * services.length);
            // Clamp index to valid range
            index = Math.max(0, Math.min(index, services.length - 1));

            if (index !== currentIndex) {
                currentIndex = index;

                services.forEach(s => s.classList.remove("active"));
                services[index].classList.add("active");

                // Kill overlapping animations for smoothness
                gsap.killTweensOf([indicator, serviceImg, currentCount]);

                gsap.to(indicator, {
                    y: index * serviceHeight,
                    width: serviceWidths[index],
                    duration: 0.5,
                    ease: "power2.out"
                });

                gsap.to(serviceImg, {
                    y: -(index * imgHeight),
                    duration: 0.5,
                    ease: "power2.out"
                });

                gsap.to(currentCount, {
                    innerText: index + 1,
                    snap: { innerText: 1 },
                    duration: 0.3
                });

                animateTextChange(index);
            }
        }
    });

    ScrollTrigger.refresh();

    // Handle resize to ensure calculations remain correct across breakpoints
    let lastWidth = window.innerWidth;
    window.addEventListener('resize', () => {
        if (window.innerWidth !== lastWidth) {
            lastWidth = window.innerWidth;
            location.reload();
        }
    });
});


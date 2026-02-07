# Crftd Scroll Animation Rebuild

<img width="1920" height="1080" alt="Screenshot (244)" src="https://github.com/user-attachments/assets/f6275c2c-4aec-49ed-8996-8eef17a7fcff" />

A high-fidelity rebuild of the premium scroll animation experience from **CRFTD**, originally featured on Awwwards. This project demonstrates advanced scroll-driven interactions using modern JavaScript libraries.

## 🚀 Overview

This project focuses on creating a seamless, "app-like" scrolling experience where text, images, and progress indicators are synchronized with the user's scroll position. It features a sticky layout with dynamic content transitions and smooth kinetic scrolling.

## ✨ Key Features

- **Sticky Layout Navigation**: A vertically pinned section where content updates as you scroll.
- **Dynamic Image Masking**: Images are revealed with a custom `clip-path` and transition smoothly.
- **Text Reveal Animations**: Using `SplitType` and GSAP to animate text lines individually for a premium feel.
- **Synchronized UI Elements**:
  - **Service Indicator**: A black bar that follows the active service item.
  - **Progress Bar**: A vertical bar showing the scroll progress through the sticky section.
  - **Index Counter**: A dynamic counter (e.g., 1 / 8) that updates in real-time.
- **Lenis Smooth Scroll**: Integration of Lenis for a buttery-smooth scrolling experience across all browsers.
- **Responsive Design**: Mobile-optimized layout where the side-by-side columns stack vertically for better usability.

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla CSS3 (Custom properties, Flexbox)
- **Animation**: 
  - [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
  - [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Text Manipulation**: [SplitType](https://github.com/lukePeavey/SplitType)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)

## 📂 Project Structure

```text
CRFTD/
├── assets/             # Project images (hero, services)
├── fonts/              # Custom typography (TT Hoves Pro, PP NeueBit)
├── index.html          # Main structure
├── styles.css          # Layout and aesthetic styling
├── script.js           # Core animation logic and scroll handling
├── services.js         # Externalized content for service descriptions
└── README.md           # Project documentation
```

## ⚙️ Installation & Usage

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/crftd-scroll-animation.git
    ```
2.  **Open the project**:
    Simply open `index.html` in your favorite web browser.
3.  **Local Server (Optional but Recommended)**:
    For the best experience (and to avoid CORS issues with modules), use a local server like Live Server in VS Code.

## 🎨 Credits

- **Original Inspiration**: [CRFTD](https://www.crftd.com/)
- **Tutorial Reference**: Inspired by [Codegrid](https://www.youtube.com/@codegrid) tutorials.
- **Assets**: Images sourced for educational/rebuild purposes.

---


# Circular Gallery

A stunning, high-performance circular gallery built with **Next.js**, **OGL (WebGL)**, and **React**. This project features a smooth, infinite scrolling experience with a unique bending effect on images.

![Project Preview](/public/preview.png)

## ✨ Features

- **Smooth Scrolling**: Implements a high-quality scroll system with easing for a premium feel.
- **WebGL Rendering**: Uses OGL for efficient and fluid image animations.
- **Dynamic Bending**: Images subtly bend as they rotate through the circular path.
- **Infinite Loop**: Seamless transitions that allow the gallery to loop indefinitely.
- **Responsive Design**: Built to work across different screen sizes.
- **Clean Architecture**: Modern Next.js App Router structure with reusable components.

## 🚀 Tech Stack

- **Core**: [Next.js 15+](https://nextjs.org/)
- **Logic**: [React](https://react.dev/)
- **Graphics**: [OGL](https://github.com/o-gl/ogl) (Open Graphics Library)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sebastianvasquezechavarria1234/circular-gallery.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the results.

## 📖 Component Usage

You can easily integrate the gallery into your pages:

```tsx
import CircularGallery from '@/components/CircularGallery';

export default function Home() {
  return (
    <CircularGallery 
      bend={3} 
      borderRadius={0.05} 
      scrollSpeed={2} 
      scrollEase={0.08}
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array` | `[]` | List of images and titles (optional). |
| `bend` | `Number` | `3` | Intensity of the circular bending effect. |
| `borderRadius` | `Number` | `0.05` | Border radius of the gallery items. |
| `scrollSpeed` | `Number` | `2` | Speed of the scroll interaction. |
| `scrollEase` | `Number` | `0.08` | Smoothing factor for scrolling. |

## 📄 License

This project is licensed under the MIT License.

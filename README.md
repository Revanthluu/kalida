# Kalida Corner

A professional, high-performance tutoring website for **Reading, Writing, and English Language Arts (ELA)**. 

Designed with a premium academic aesthetic, featuring modern design principles like glassmorphism, 3D animations, and custom AI-generated backgrounds.

## 🚀 Features

- **Modern UI/UX**: Premium "Academy" theme with sage green and navy accents.
- **Dynamic Animations**: Interactive 3D shapes and smooth scroll transitions using `framer-motion`.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **High-End Imagery**: Custom AI-generated educational backgrounds and illustrations.
- **Full Stack Architecture**:
  - **Frontend**: React, Vite, Tailwind CSS v4, Lucide Icons.
  - **Backend**: Node.js, Express, TSX.
- **SEO Optimized**: Meta tags and structured data for better search visibility.

## 🛠️ Technology Stack

### Frontend
- **React 18** + **Vite**
- **Tailwind CSS v4** (Modern CSS-first approach)
- **Framer Motion** (Animations)
- **React Router Dom** (Routing)
- **Lucide React** (Icons)
- **Three.js** (@react-three/fiber) for 3D elements.

### Backend
- **Node.js** + **Express**
- **TypeScript** (via `tsx`)

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Revanthluu/kalida.git
   cd kalida
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Project**:
   Run both frontend and backend concurrently:
   ```bash
   npm run dev:all
   ```

   Alternatively, you can run them separately:
   - **Frontend**: `cd frontend && npm run dev`
   - **Backend**: `cd backend && npm run dev`

## 📁 Project Structure

```text
kalida/
├── frontend/             # React application
│   ├── public/           # Static assets (images, icons)
│   ├── src/              # Source code
│   └── tailwind.config.js
├── backend/              # Node.js Express server
│   ├── src/              # Server source code
│   └── package.json
├── package.json          # Root scripts for orchestration
└── README.md             # Project documentation
```

## 📄 License

This project is for educational and professional tutoring purposes. All rights reserved.

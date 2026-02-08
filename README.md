# EventNomous: Institutional Event Management & PNPL Platform

**Live Demo:** [https://pnpl-eventnomous.vercel.app](https://pnpl-eventnomous.vercel.app)

## Overview
EventNomous is a premium, luxury-fintech styled platform designed for institutional event planning and management. It features a unique **"Plan Now, Pay Later" (PNPL)** financial model, allowing organizers to execute high-scale events with optimized budget management and vendor collaboration.

## Key Features
- **Luxury Fintech UI:** A sleek, high-end design with dynamic dark/light mode support, glassmorphism, and premium animations.
- **PNPL Financial Core:** Specialized dashboards for managing payment tranches, credit health, and institutional financial flows.
- **AI-Powered Event Strategy:** Integrated Google Gemini AI for smart budget optimization, vendor recommendations, and strategic project insights.
- **Unified Dashboards:** Dedicated, high-performance interfaces for Organizers, Vendors, Corporates, and Admins.
- **Collaborative Portfolio:** Advanced tools to track multiple high-value event projects with real-time status synchronization and secure vendor management.

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, Framer Motion, Lucide React, GSAP, Three.js.
- **Backend:** Node.js, Express, MongoDB (Mongoose).
- **AI Integration:** Google Gemini AI API.
- **Deployment:** Vercel (Hybrid Static Frontend + Serverless Backend).

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB connection (Atlas or Local)
- Google Gemini API Key

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mahesh1215-babu/EventNomous.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**
   Create a `.env` file in the root and add your keys:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_key
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   ```
4. **Run the application:**
   ```bash
   npm run dev
   ```

## License
MIT License
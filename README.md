# Property Search

A full-stack web application for searching and exploring property listings with a React frontend and Node.js/Express backend.

## Overview

Property Search is a modern web application that allows users to browse, search, and filter real estate properties. The application features a responsive UI built with React and Tailwind CSS, and a backend API powered by Express and MongoDB.

## Live Demo

**Frontend:** [https://property-search-frontend-0zxe.onrender.com/](https://property-search-frontend-0zxe.onrender.com/)

## Features

- Browse property listings
- Filter properties by various criteria
- Responsive design for mobile and desktop
- RESTful API for property data
- MongoDB integration for data storage

## Tech Stack

### Frontend
- React 19
- React Router Dom
- Tailwind CSS
- Vite
- Radix UI components
- Axios for API requests

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- CORS support
- Environment variable configuration with dotenv

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB account (the application uses MongoDB Atlas)
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/Shivangi-Panigrahy/Property_Search.git
cd Property_Search
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Set up environment variables
Create a `.env` file in the backend directory with the following variables (or use the existing one):
```
MONGODB_URI=mongodb+srv://shivangipp:dTw66KFGVJ2S5BZ6@cluster0.fsci3wi.mongodb.net/property_app?retryWrites=true&w=majority&appName=Cluster0
PORT=8000
```

4. Install frontend dependencies
```bash
cd ../frontend
npm install
```

5. Set up frontend environment variables
Create a `.env` file in the frontend directory with the following:
```
VITE_API_URL=http://localhost:8000/api
```

### Running the Application

1. Start the backend server
```bash
cd backend
npm run dev
```
The server will start on http://localhost:8000

2. Start the frontend development server
```bash
cd frontend
npm run dev
```
The frontend will be available at http://localhost:5173

### Database Seeding

To populate the database with initial property data:
```bash
cd backend
npm run seed
```

## API Endpoints

The backend provides several RESTful endpoints:

- `GET /api/properties` - Get all properties
- `GET /api/properties/:id` - Get a specific property by ID
- `GET /api/properties/search` - Search properties based on criteria
- `POST /api/properties` - Add a new property (admin only)
- `PUT /api/properties/:id` - Update a property (admin only)
- `DELETE /api/properties/:id` - Delete a property (admin only)

## Project Structure

```
property-search/
├── frontend/              # React frontend
│   ├── public/            # Static files
│   ├── src/               # Source files
│   │   ├── components/    # UI components
│   │   ├── pages/         # Page components
│   │   ├── assets/        # Images and other assets
│   │   ├── lib/           # Utility functions
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── .env               # Environment variables for frontend
│   ├── vite.config.js     # Vite configuration
│   └── package.json       # Frontend dependencies
│
├── backend/               # Express backend
│   ├── controllers/       # Route controllers
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── scripts/           # Seeding scripts
│   ├── .env               # Environment variables for backend
│   ├── server.js          # Server entry point
│   └── package.json       # Backend dependencies
│
└── README.md              # Project documentation
```

## Development

### Frontend

- Built with React 19 and styled using Tailwind CSS
- Uses Vite for fast development and building
- Components from Radix UI for accessibility
- State management with React hooks
- API connection configured through environment variable `VITE_API_URL`

### Backend

- Express.js for API routing
- MongoDB with Mongoose for data modeling
- Environment configuration with dotenv
- CORS enabled for frontend communication

## Contact

Shivangi Panigrahy - [GitHub Profile](https://github.com/Shivangi-Panigrahy)

Project Link: [https://github.com/Shivangi-Panigrahy/Property_Search](https://github.com/Shivangi-Panigrahy/Property_Search)

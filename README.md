# Travelista - Full Stack Travel Website

A modern, full-stack travel website built with React, Node.js, Express, and MongoDB. Features user authentication, tour management, and a responsive design.

## 🚀 Features

- **User Authentication**: Complete registration and login system with JWT tokens
- **Tour Management**: Browse and view travel tour packages
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Data**: Dynamic content fetched from MongoDB database
- **Professional UI**: Clean, modern interface with consistent branding

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Context** - Global state management

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Travel-website/
├── backend/                 # Express.js API server
│   ├── config/             # Database configuration
│   ├── controllers/        # Business logic
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── .env               # Environment variables
│   └── server.js          # Main server file
├── frontend/              # React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React Context
│   │   └── App.jsx        # Main app component
│   └── vite.config.js     # Vite configuration
└── README.md              # Project documentation
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Travel-website
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Seed Database (Optional)**
   ```bash
   cd ../backend
   node seedTours.js
   ```

### Running the Application

1. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Server runs on `http://localhost:5000`

2. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Application runs on `http://localhost:5173`

## 📡 API Endpoints

### Authentication
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login

### Tours
- `GET /api/tours` - Get all tours
- `GET /api/tours/:id` - Get single tour
- `POST /api/tours` - Create new tour (Admin)

## 🎯 Current Features

### ✅ Completed
- User registration and login
- JWT-based authentication
- Global authentication state management
- Tour listing and display
- Responsive tour cards
- Loading states and error handling
- Professional UI design
- Database integration with sample data

### 🔄 In Development
- Tour detail pages
- Booking system
- User profile management
- Admin dashboard
- Payment integration

## 🔧 Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Created as a full-stack travel website project demonstrating modern web development practices.

## 🙏 Acknowledgments

- MongoDB Atlas for database hosting
- Unsplash for placeholder images
- React and Node.js communities for excellent documentation

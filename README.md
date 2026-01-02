# TACHRON CLEAN

A comprehensive e-commerce platform for cleaning supplies featuring separate admin and customer interfaces.

## Project Structure

```
TACHRON-CLEAN/
├── admin/          # Admin dashboard (React + Vite)
├── backend/        # Node.js server (Express + MongoDB)
├── frontend/       # Customer storefront (React + Vite)
└── README.md
```

## Tech Stack

- **Admin & Frontend**: React 18 + Vite + Tailwind CSS
- **Backend**: Node.js + Express + MongoDB
- **Storage**: Cloudinary
- **Authentication**: JWT + bcrypt

## Key Features

### Admin Dashboard (`/admin`)
- Product & inventory management
- Order tracking and monitoring
- User management
- Authentication with JWT

### Customer Storefront (`/frontend`)
- Product catalog with search and filtering
- Shopping cart functionality
- Order placement & tracking
- User authentication
- Responsive design with Tailwind CSS

### Backend API (`/backend`)
- RESTful API endpoints
- Product management
- Order processing
- User authentication & authorization
- Cart management
- Cloudinary integration for image uploads

---

## Setup Instructions

### Backend Setup
```bash
cd backend
npm install
```

Create `.env` file:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start the server:
```bash
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Admin Dashboard Setup
```bash
cd admin
npm install
npm run dev
```

---

## Available Scripts

### Backend
- `npm run dev` - Start development server
- `npm start` - Start production server

### Frontend & Admin
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

---

**TACHRON CLEAN** - Premium Cleaning Solutions, Digitally Delivered.



Yeah
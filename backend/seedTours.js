const Tour = require('./models/tourModel');
const connectDB = require('./config/db');
require('dotenv').config();

const sampleTours = [
  {
    name: "Bali Paradise Adventure",
    destination: "Bali, Indonesia",
    description: "Experience the magical beauty of Bali with pristine beaches, ancient temples, and vibrant culture. This 7-day adventure includes temple visits, beach relaxation, and traditional Balinese experiences.",
    price: 1299,
    duration: 7,
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500"
  },
  {
    name: "Dubai Desert Safari",
    destination: "Dubai, UAE",
    description: "Discover the golden dunes of Dubai with thrilling desert safari, luxury shopping, and stunning architecture. Experience the perfect blend of modern luxury and traditional Arabian culture.",
    price: 1899,
    duration: 5,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500"
  },
  {
    name: "Swiss Alps Mountain Escape",
    destination: "Switzerland",
    description: "Breathtaking mountain views, pristine lakes, and charming villages await you in this Swiss adventure. Perfect for nature lovers and adventure seekers.",
    price: 2199,
    duration: 8,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500"
  },
  {
    name: "Tokyo Culture Experience",
    destination: "Tokyo, Japan",
    description: "Immerse yourself in the fascinating blend of ancient traditions and modern innovation. Explore temples, taste authentic cuisine, and experience the vibrant city life.",
    price: 1799,
    duration: 6,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500"
  },
  {
    name: "Maldives Island Retreat",
    destination: "Maldives",
    description: "Ultimate tropical paradise with crystal-clear waters, pristine beaches, and luxury overwater bungalows. Perfect for romantic getaways and relaxation.",
    price: 2999,
    duration: 5,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500"
  }
];

const seedTours = async () => {
  try {
    await connectDB();
    
    // Clear existing tours
    await Tour.deleteMany();
    
    // Insert sample tours
    await Tour.insertMany(sampleTours);
    
    console.log('Sample tours added successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding tours:', error);
    process.exit(1);
  }
};

seedTours();

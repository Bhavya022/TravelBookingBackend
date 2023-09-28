const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
// Middleware for parsing JSON requests
app.use(express.json());
app.use(cors());
// Routes for flights, hotels, and cars (to be defined later)
const flightRoutes = require('./routes/flightRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const carRoutes = require('./routes/carRoutes');

// Use routes 
app.get('/', (req, res) => {
  res.send('Welcome to Travel Booking');
});

app.use('/api/flights', flightRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/cars', carRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

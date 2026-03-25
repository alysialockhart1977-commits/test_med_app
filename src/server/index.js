const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8181;

// Middleware
app.use(express.json());
app.use(cors());

// API routes
app.use('/api/auth', require('./routes/auth'));

// Serve build frontend
app.use(express.static(path.join(__dirname, 'build')));

// Fallback for React routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Connect to MongoDB
connectToMongo();

  // Start the server
app.listen(PORT, () => {
console.log(`Server is running on port http://localhost:${PORT}`);
});


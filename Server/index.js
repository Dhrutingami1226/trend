const express = require('express');
const bodyParser = require('body-parser');
const registerRoutes = require('./routes/registerRoutes');
const productRoutes = require('./routes/productRoutes');
const forgotRoutes = require('./routes/forgotRoutes');
const resetRoutes = require('./routes/resetRoutes');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
app.use('/api/add',productRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/forgot', forgotRoutes);
app.use('/api/reset', resetRoutes);

// Start server
app.listen(PORT, '127.0.0.1',() => {
    console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});

// app.js (or index.js)

const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const registerRoutes = require('./routes/registerRoutes');

const app = express();
const PORT = process.env.PORT || 9000;
const address = "127.0.0.1";

app.get('/',(req,res)=>{
  res.send("Hello World");
})

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use('/uploads', express.static('uploads')); // Serve static files from 'uploads' directory

// Routes
app.use('/api/products', productRoutes); 
app.use('/register', registerRoutes); 

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port http://${address}:${PORT}`);
});
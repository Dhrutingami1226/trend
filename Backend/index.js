const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const multer = require('multer');
const { renderProduct, addProducts } = require('./controllers/productController');
const { login } = require('./controllers/logincontroller');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views', 'pages'));
app.listen(8000);
app.use(bodyParser.urlencoded({ extended: true }));


// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});


const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_project"
});


// view image and total count on admin pannel
function index(req, res) {
    res.render('index');
}

app.get('/', index);

//view additional images 
app.get('/additionalImages/:id', function(req, res) {
    var productId = req.params.id;
    pool.getConnection(function(err, connection) {
        if (err) {
            return res.status(500).send('Error connecting to the database');
        }
        var query = "SELECT img2, img3, img4 FROM product WHERE id = ?";
        connection.query(query, [productId], function(err, results) {
            connection.release();
            if (err) {
                console.error('Error querying the database:', err);
                return res.status(500).send('Error querying the database');
            }
            res.render('additimg', { images: results[0] });
        });
    });
});

// Modified button to redirect to the route for displaying additional images
app.get('/productImages/:id', function(req, res) {
    var productId = req.params.id;
    res.redirect(`/additionalImages/${productId}`);
});




//register
app.post('/register', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;
    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).send('All fields are required');
    }
    if (password !== confirmPassword) {
        return res.status(400).send('Passwords do not match');
    }
    pool.getConnection(function (err, connection) {
        if (err) {
            return res.status(500).send('Error connecting to the database');
        }
        var query = "INSERT INTO register (`user`, `mail`, `pass`, `cpass`) VALUES (?, ?, ?, ?)";
        connection.query(query, [name, email, password, confirmPassword], function (err, result) {
            connection.release();
            if (err) {
                console.error('Error inserting data into the database:', err);
                return res.status(500).send('Error inserting data into the database');
            }
            res.redirect('/#login');
        });
    });
});


//retrive on login
// app.get('/', login);



//upload product for viewing 
const upload = multer({ dest: 'public/uploads' });
app.use(upload.any()); 
app.post('/products',addProducts );

app.route('/login').get((req,res)=>{
    res.render('logreg1')
})
.post(login);

app.route('/products').get(renderProduct)
// app.route('/logreg1').get(login)

// module.exports = app;
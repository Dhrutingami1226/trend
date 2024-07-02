const mysql = require('mysql');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_project"
});

const renderProduct =  async(req,res)=>{
    pool.getConnection(function (err, connection) {
        if (err) {
            return res.status(500).send('Error connecting to the database');
        }
        var totalProductsQuery = "SELECT COUNT(*) AS totalProducts FROM product";
        connection.query(totalProductsQuery, function (err, totalResults) {
            if (err) {
                console.error('Error querying the database:', err);
                connection.release();
                return res.status(500).send('Error querying the database');
            }
            var query = "SELECT * FROM product";
            connection.query(query, function (err, products) {
                connection.release();
                if (err) {
                    console.error('Error querying the database:', err);
                    return res.status(500).send('Error querying the database');
                }
                res.render('products', { products: products, totalProducts: totalResults[0].totalProducts });
            });
        });
    })}

    const addProducts = async (req, res)=> {
        var name = req.body.namee;
        var gender = req.body.sex === 'male' ? 'male' : 'female';
        var rent = req.body.rentt;
        var specifications = req.body.specify;
        var images = req.files; 
        if (!name || !gender || !rent || !specifications || !images || images.length < 4) {
            return res.status(400).send('All fields are required');
        }
        var filenames = images.map(file => file.filename);
        pool.getConnection(function (err, connection) {
            if (err) {
                return res.status(500).send('Error connecting to the database');
            }
            var query = "INSERT INTO product (name, gender, rent, detail, img1, img2, img3, img4) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            connection.query(query, [name, gender, rent, specifications, ...filenames], function (err, result) {
                connection.release();
                if (err) {
                    console.error('Error inserting data into the database:', err);
                    return res.status(500).send('Error inserting data into the database');
                }
                res.redirect('/dashboard');
            });
        });
    }


    module.exports = {
        renderProduct,
        addProducts
    }

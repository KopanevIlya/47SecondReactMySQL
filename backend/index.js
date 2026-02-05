import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"2102",
    database:"47second"
})

app.get("/",(req,res)=>{
    res.json("hello")

})

app.use(cors())

app.use(express.json())

app.get("/products",(req,res)=>{
    const q = "SELECT * FROM 47second.products;"
    db.query(q,(err,data)=>{
        if(err) return err.json(err);
        return res.json(data); 
    })
})

app.post("/cart", (req, res) => {
    const { productId, quantity = 1 } = req.body;
    // Проверяем, есть ли уже такой товар в корзине
    const checkQuery = "SELECT * FROM cart WHERE product_id = ?";
    db.query(checkQuery, [productId], (err, rows) => {
        if (err) return res.status(500).json(err);
        if (rows.length > 0) {
            // Если есть, увеличиваем количество
            const updateQuery = "UPDATE cart SET quantity = quantity + ? WHERE product_id = ?";
            db.query(updateQuery, [quantity, productId], (err2) => {
                if (err2) return res.status(500).json(err2);
                return res.json("Количество товара увеличено!");
            });
        } else {
            // Если нет, добавляем новую запись
            const insertQuery = "INSERT INTO cart (product_id, quantity) VALUES (?, ?)";
            db.query(insertQuery, [productId, quantity], (err3) => {
                if (err3) return res.status(500).json(err3);
                return res.json("Товар добавлен в корзину");
            });
        }
    });
});












app.listen(8800, ()=>{
    console.log('Connect, Hi I`am backend!')
})
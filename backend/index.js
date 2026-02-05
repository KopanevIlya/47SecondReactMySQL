import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123Qwe45",
    database:"47second"
})
///////
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














app.listen(8800, ()=>{
    console.log('Connect, Hi I`am backend!')
})
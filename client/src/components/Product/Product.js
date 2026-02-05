import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Product.css";



function Product() {

    const [items, setItems]=useState([]);

    useEffect(()=>{
        const fetchAllItems = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/products")
                console.log(res)
                setItems(res.data)
            }catch(err){
                console.log(err)
            } 
        }
        fetchAllItems()
    },[])

    const handleAddToCart = async (id) => {
        try {
            await axios.post("http://localhost:8800/cart", {
                productId: id,
                quantity: 1
            });
            alert("Товар добавлен в корзину!");
        } catch (err) {
            console.log(err);
            alert("Ошибка добавления в корзину");
        }
    };


    // const handleDelete =  async (id)=>{
    //     try{
    //       await axios.delete("http://localhost:8800/items/"+id)
    //       window.location.reload()
    //     }catch(err){
    //         console.log(err)
    //     } 

  
    // }

  return (
    <div>
  
           <h1>Каталог</h1>
           <div className='wrapper'>
                {items.map(item=>(
                    <div className='item' key={item.id}>
                    <img src={'./img/' + item.img} alt={item.title} />
                    <h2>{item.title}</h2>
                    <div className="price-block">
                        <span className="price">{item.price}₽</span>
                        <span className="old-price">{item.pricedesc}₽</span>
                    </div>
                    <button className="add-cart-btn" onClick={() => handleAddToCart(item.id)}>
                        Добавить в корзину
                    </button>
                </div>
                    
                ))}
           </div>
    </div>
  )
}

export default Product
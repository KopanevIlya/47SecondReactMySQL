import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import axios from 'axios'

function Cart() {

    const[cartItems, setCartItems] = useState([]);

    useEffect(()=>{
        const fetchCart = async ()=>{
            const res = await axios.get("http://localhost:8800/cart")
            setCartItems(res.data)
        }
        fetchCart()
    },[])
  return (
    <div>
        <Header/>
        <h1>Корзина</h1>

        {cartItems.map(item=>(
                    <div className='item' key={item.id}>
                    <img src={'./img/' + item.img} alt={item.title} />
                    <h2>{item.title}</h2>
                    <div className="price-block">
                        <span className="price">{item.price}₽</span>
                        <span className="price">Количество:{item.quantity}</span>
                    </div>
                </div>
                    
                ))}

      
    </div>
  )
}

export default Cart

import React, { useEffect, useState } from 'react'
import axios from 'axios'



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
                        <h2>{item.title}</h2>
                        <h2>{item.price}</h2>
                        <h2>{item.pricedesc}</h2>
                        <img src={'./img/' + item.img}/>
                       
                    </div>
                ))}
           </div>
    </div>
  )
}

export default Product
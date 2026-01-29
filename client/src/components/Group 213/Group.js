import React from 'react'
import './Group.css'

function Group() {
  return (
    <div className='Group'>
      <div className='Left-block'>
        <div className='Content'>
           
          <span className='span-content'>
            Кресла Samurai<br/>на выгодных       условиях<br/>по всей стране <img className='Flag' src='img/flag.png' alt='gh'/> 
          </span>
           <img className='Vector' src='img/Vector.png' alt='gfgh'/>
           
        </div>
         
        <div className='Description-content'>
           <span>
             Здесь вам не придётся покупать товар в слепую —<br/>проведите тест-драйв перед покупкой
           </span>
        </div>
        <button className='Record'>Запись на тест-драйв</button>
      </div>
      <div className='Right-block'>
        <img className='Arm' src='img/arm.png' alt='gfh'/>
        <img className='Armchar' src='img/armchar.png' alt='hgj'/>
        
        
      </div>


      
    </div>
  )
}

export default Group






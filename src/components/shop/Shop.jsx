import React from 'react'
import './shop.css'
import IMG1 from '../../assets/chair1.jpg'
import IMG2 from '../../assets/bed1.jpg'
import IMG3 from '../../assets/chair2.jpeg'
import IMG4 from '../../assets/table1.jpeg'
import IMG5 from '../../assets/stool1.jpg'
import IMG6 from '../../assets/bed2.jpeg'

const data=[
    {
        img:IMG1,
        text:'Black chair',
        rating:'⭐⭐⭐⭐'
    },
    {
        img:IMG2,
        text:'Fabric bed',
        rating:'⭐⭐⭐⭐⭐'
    },
    {
        img:IMG3,
        text:'Brown chair',
        rating:'⭐⭐⭐⭐'
    },
    {
        img:IMG4,
        text:'Dining Table',
        rating:'⭐⭐⭐'
    },
    {
        img:IMG5,
        text:'Leather seat stool ',
        rating:'⭐⭐⭐⭐'
    },
    {
        img:IMG6,
        text:'Wooden bed',
        rating:'⭐⭐⭐⭐'
    },
]

const Shop = () => {
   
  return (
    <section id='shop' >
        <div className='shop-container'>
        <h5 className='text'>New Arrival</h5>
        <h1 className='text'>Shop Now</h1>
      <div className="products">
        {
            data.map(({img,text,rating},index)=>{
                return(
                <div className="product">
                 <img className='image' src={img}/>
                 <div className="info">
                    <p className='text1'>{text}</p>
                    <span className='stars'>{rating}</span>
                 </div>
                 <div className="shop-icon">
                 <button className='btn' >Shop now</button>
                 </div>
                </div>
                )
            })
        }
      </div>
      </div>
    </section>
  )
}
export default Shop
import React, { Component } from 'react'
import Products from './Products';

 class ProductList extends Component {
    products = [
        {
            "title":"Brown Eggs",
            "type":"Dairy",
            "description":"Raw organic brown eggs in a basket",
            "url":"https://s3-production.bobvila.com/slides/23911/widened/bulk-eggs.jpg?1511218787",
            "price":"28.1",
            "rating":4
        },
        {
            "title":"Sweet fresh stawberry",
            "type":"Fruits",
            "description":"Sweet fresh stawberry on the wooden table",
            "url":"https://tse2.mm.bing.net/th/id/OIP.ESvtsBnYxWO40A061MtJoAHaEo?pid=ImgDet&rs=1",
            "price":"29.45",
            "rating":4
        }
    
        ]
        constructor(){
            super();
            this.state={
               products: this.products
            }
        }
  render() {
    return (
        <div>
        
        {this.state.products.map((element)=>{
             return <div className='features' key={element.price}>
             <Products  title={element.title} price={element.price} description={element.description} imageUrl={element.url}/> 
         </div>
        })}
            
        </div>
     

    )
  }
}

export default ProductList
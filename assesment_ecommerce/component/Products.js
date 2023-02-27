import React, { Component } from 'react'

export class Products extends Component {
  render() {
    let {title, description, imageUrl,price} = this.props;
    return (
      <>
      <div >    
      <img src={imageUrl} alt="..." height={200} width={300}></img>
     
    <h5 className='title'>{title}</h5>
    <p className='description'>{description}</p>
    <p className='price'>{price}</p>
    <button className='button'>Like</button>
    <button className='button'>Share</button>
    <button className='button'>Purchase</button>
    </div>
        
        </>
    )
      
  }
}

export default Products
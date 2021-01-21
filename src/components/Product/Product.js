import React from 'react'

import './Product.scss'

const Product = (props) => {
    return (
        <div className="product-wrapper">
            <img className="product-image" src={props.src} alt={props.name}/>
            <p className="product-name">{props.name}</p> 
        </div>
    )
}

export default Product

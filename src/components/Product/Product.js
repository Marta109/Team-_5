import React from 'react'

import './Product.scss'

const Product = (props) => {
    return (
        <div className="product-wrapper">
            <img src={props.src} alt={props.name}/>
            <p>{props.name}</p>
        </div>
    )
}

export default Product

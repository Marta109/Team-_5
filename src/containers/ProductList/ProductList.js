import React from 'react'

import Product from '../../components/Product/Product'
import alarm from '../../assets/alarm.jpg';

import './ProductList.scss'

const ProductList = () => {
    return (
        <Product name='Alarm' src={alarm}/>
    )
}

export default ProductList

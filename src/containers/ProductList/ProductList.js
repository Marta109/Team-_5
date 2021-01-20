import React, {useState} from 'react'

import Product from '../../components/Product/Product'

import './ProductList.scss'

const ProductList = () => {

    const data = [{
        id: 0,
        name: 'Thermostats',
        src: 'https://homedepot.scene7.com/is/image/homedepotcanada/p_1000848230.jpg?wid=1000&hei=1000&op_sharpen=1',
      },
      {
        id: 1,
        name: 'Cameras',
        src: 'https://am.mi-shop.com/upload/iblock/94b/94b6ede4a3ff63701490a37a7bacffdd.jpg',
      },
      {
        id: 2,
        name: 'Doorbell',
        src: 'https://cdn.shopify.com/s/files/1/2418/9735/products/vd_rvd3plus_venetian_1000x1000_fb3371b1-d424-4839-b450-99523f875d96_2000x2000.png?v=1609944405',
      },
      {
        id: 3,
        name: 'Alarm system',
        src: 'https://www.gigaset.com/media/catalog/product/cache/36/image/470x470/9df78eab33525d08d6e5fb8d27136e95/7/0/700x550_72dpi_gigaset_elements_alarm_system_m_web_2.jpg ',
      },
      {
        id: 4,
        name: 'Lock',
        src: 'https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/85/3D/c31c1cd8-4b08-4335-b1d5-d7cdbb6c9345.jpg',
      },
      {
        id: 5,
        name: 'Smoke + CO alarm',
        src: 'https://idency.com/wp-content/uploads/2015/02/590232_121857.png',
      },];

    return (
      <div className='productList'>  
        {data.map((product) =>{
            return <Product key={product.id} name={product.name} src={product.src}/>
            })
        }
      </div>
    )

}
export default ProductList

import React from 'react';
import Imag from '../../assets/img/desktopimg.jpg';
import Button from '../button/button';

import './image_tab.scss';

const Image = () =>{
    return(
        <div>
             <div className="image-text">
                <p className="title-text">Nest.com has moved to the Google Store.</p>
                <p className="desc-text">Nest and Google Home have joined together as Google Nest. Moving forward, 
                    you can learn about and buy all Nest products in one place: the Google Store.</p>
                    <Button>Visit the Store</Button>
             </div>
               <img src={Imag} alt="desktop" className="app-image"/>
        </div>
    )
}
export default Image;
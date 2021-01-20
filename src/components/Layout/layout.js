import React from 'react';
import Image from '../image_tab/image_tab';

import './layout.scss';

const Layout = ({ children }) =>{
    return(
        <div className='app-layout'>
             {children}
            <Image />
        </div>
    )
}
export default Layout;
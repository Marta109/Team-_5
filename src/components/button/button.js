import React from 'react';

import './button.scss';

const Button = ({children}) =>{
    return(
        <button className='app-button'>{children}</button>
    )
}
export default Button;
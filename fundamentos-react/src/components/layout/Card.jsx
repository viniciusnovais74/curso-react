import React from 'react';
import './Card.css';
export default propriedades => {
    return (
        <div className='Card'>
            <div className='Title'>{propriedades.titulo}</div>
            <div className='Content'>
                {propriedades.children}
            </div>
        </div>
   
    )
}
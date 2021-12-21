import React from 'react';
import './Card.css';
export default propriedades => {
   
   const style = {
        backgroundColor: propriedades.color|| '#008',
        borderColor: propriedades.color || '#008',
    }

    return (
        <div className='Card' style={style}>
            <div className='Title'>{propriedades.titulo}</div>
            <div className='Content'>
                {propriedades.children}
            </div>
        </div>
   
    )
}
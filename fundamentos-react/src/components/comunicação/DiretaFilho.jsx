import React from "react";

export default props => {
    return (
        <div>
            <div>{props.texto}</div>
            <div><span><strong>{props.numero}</strong></span></div>
            <div>{props.bool ? 'verdadeiro' : 'false'}</div>

        </div>
    )
}
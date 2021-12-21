import React from "react";

export default function WithParams(props){
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitle}</h3>
            <h3>{props.name}</h3>

        </div>

    )
}
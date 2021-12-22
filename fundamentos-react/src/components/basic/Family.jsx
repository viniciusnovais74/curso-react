import React, { cloneElement } from "react";
export default (propriedadesMembros) => {
    return (<div>

        {propriedadesMembros.children.map((child, i) => {
            return cloneElement(child, { ...propriedadesMembros, key: i });
        })}

    </div>
    )
}
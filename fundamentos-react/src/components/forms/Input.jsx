import React, { useState } from "react";
import './import.css'
export default props=>{
  
    const [valor, setVlor] = useState('Inicial')

    return(
        <div className="Input">
            <input value={valor} />
        </div>
    )
}
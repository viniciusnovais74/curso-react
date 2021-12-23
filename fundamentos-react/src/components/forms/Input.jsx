import React, { useState } from "react";
import './import.css'
export default props=>{
  
    const [valor, setVlor] = useState('Inicial')

    function quandoMudar(e) {
        setVlor(e.target.value)
    }

    return(
        <div className="Input">
            <input value={valor} onChange={quandoMudar} />
        </div>
    )
}
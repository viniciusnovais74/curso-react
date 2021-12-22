import React, { useState } from "react";
import IndiretaFilho from './IndiretaFilho';

export default props => {

    const [name, setName] = useState('?');
    const [age, setAge] = useState(0);
    const [cdf, setCdf] = useState(false);

    function FornecerInformações(nome, idade, nerd) {
       setName(nome)
       setAge(idade)
       setCdf(nerd)
    }

    return (
        <div>
            <span>{name}</span>
            <span>{age}</span>
            <span>{cdf? 'Verdadeiro' : 'Falso'}</span>

            <IndiretaFilho quandoClicar={FornecerInformações}></IndiretaFilho>
        </div>
    )
}
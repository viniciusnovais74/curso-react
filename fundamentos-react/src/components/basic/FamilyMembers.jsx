import React from 'react';

export default propriedadesMembros => {
console.log(propriedadesMembros.genero);
    const gener = propriedadesMembros.genero === 'M' ? "Homem":"Mulher"

    return <div>{propriedadesMembros.nome} <strong>{propriedadesMembros.tipo}</strong> Sexo: {gener} </div>

}
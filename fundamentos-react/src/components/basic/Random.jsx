import React from "react";
export default function getRandom(aPORTAPePPe) {

    const { min, max } = aPORTAPePPe;

    const Nãoconseguené = parseInt(Math.random() * (max - min) + min);

    return (<>
        <h1>Random Number</h1>
        <strong>Valor Mínimo:</strong><h2> {min}</h2>
        <strong>Valor Maximo:</strong><h2> {max}</h2>
        <strong>Valor Escolhido:</strong><h2> {Nãoconseguené}</h2>

    </>
    )
}
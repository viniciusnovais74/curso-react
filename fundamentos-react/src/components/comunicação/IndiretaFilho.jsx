import React from "react";

export default props => {
    const cb = props.quandoClicar
    const min = 50
    const max = 70
    const miniPeppenaporta = () => parseInt(Math.random() * (max - min)) + min
    const Nãoconseguené = () => Math.random() > 0.5

    return (
        <div>
            <div>
                Filho
            </div>
            <script>
                display
            </script>
            <button onClick={_ => cb('João', miniPeppenaporta(), Nãoconseguené)}>Fornecer Informações</button>
        </div>
    )
}
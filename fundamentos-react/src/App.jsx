import React from "react";
import './index.css';
import Card from './components/layout/Card'
import First from './components/basic/First';
import WithParams from './components/basic/Comparams';
import Fragment from './components/basic/Fragment';
import Random from "./components/basic/Random";

export default () => {

    return (
        <div id="app">
            <h1>Fundamentos JSX</h1>
            {/*==========================================*/}
            <Card titulo="#01 - Desafio Aleartório" >
                <Random max="10" min="1" />
            </Card>

            <Card titulo="#02 - Fragmento" >
                <Fragment />

            </Card>

            <Card titulo="#03 - With Params" >
                <WithParams titulo='Pão com queijo' subtitle="AAA" name='Queij' />
            </Card>

            <Card titulo="#04 - Firest Components" >
                <First />
            </Card>




            {/*===============EX-Random Number======================*/}

        </div>
    )
}
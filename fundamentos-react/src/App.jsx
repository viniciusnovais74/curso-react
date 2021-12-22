import React from "react";
import './App.css'
import './index.css';
import Card from './components/layout/Card';
import ParouImpar from "./components/condicional/ParouImpar";
import ListaAluos from "./components/repetição/ListaAluos";
import TableAl from './components/repetição/ProcutList';
import Family from "./components/basic/Family";
import FamilyMembers from "./components/basic/FamilyMembers";
import First from './components/basic/First';
import WithParams from './components/basic/Comparams';
import Fragment from './components/basic/Fragment';
import Random from "./components/basic/Random";

export default () => {

    return (
        <div className="App">
            <h1>Fundamentos JSX</h1>
            {/*==========================================*/}

            <div className="Cards">

                <Card titulo="#01 - Desafio Aleartório" color="#080" >
                    <Random max="10" min="1" />
                </Card>

                <Card titulo="#02 - Fragmento" color="#59C4C5">
                    <Fragment />
                </Card>

                <Card titulo="#03 - With Params" color="#03396c">
                    <WithParams titulo='Pão com queijo' subtitle="AAA" name='Queij' />
                </Card>

                <Card titulo="#04 - Firest Components" color="#651e3e" >
                    <First />
                </Card>


                <Card titulo="#05 Componentes com Filos" color="#f37736" >

                    <Family tipo='Novais'>
                        <FamilyMembers genero="M" nome="Marcos" />
                        <FamilyMembers nome='Ana' />
                    </Family>

                </Card>

                <Card titulo="#06 Repetição" color="#99554B" >

                    <ListaAluos />

                </Card>

                <Card titulo="#07 Repetição - Exercicios" color=" #1C4046" >

                    <TableAl></TableAl>

                </Card>

                <Card titulo="#08 Renderização Condicional" color=" #1C4046" >

                    <ParouImpar></ParouImpar>

                </Card>

            </div>




            {/*===============EX-Random Number======================*/}

        </div>
    )
}
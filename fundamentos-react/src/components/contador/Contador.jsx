import React, { Component } from "react";
import './contador.css'
import Display from "./Display";
import Buttons from "./Buttons";
import PassForm from "./PassForm";
class Contador extends Component {


    state = {
        numero: this.props.numeroInicil || 0,
        passo: this.props.passoInicil || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    setPasso = (Novopasso) => {
        this.setState({
            passo: Novopasso
        })
    }
    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassForm passo={this.state.passo} setPasso={this.setPasso} />
                <Buttons inc={this.inc} dec={this.dec} />
            </div>
        );
    }

}

export default Contador
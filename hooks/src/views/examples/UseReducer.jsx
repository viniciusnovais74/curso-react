import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import {initialState, reducer} from '../../store/index'



const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Usuario Não logado</span>}
                <span className="text">{state.number}</span>
                <span className="text">{state.products}</span>
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({ type: 'login', name: 'Maria' })}>Login</button>
                    <button className="btn" onClick={() => dispatch({ type: 'add2' })}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: 'mult7' })}>x7</button>
                    <button className="btn" onClick={() => dispatch({ type: 'sos25' })}>/25</button>
                    <button className="btn" onClick={() => dispatch({ type: 'parsa' })}>=</button>
                    <button className="btn" onClick={() => dispatch({ type: 'NumaddN', name: -9})}>-9</button>
                    <button className="btn" onClick={() => dispatch({ type: 'NumaddN', name: +11})}>+11</button>



                </div>
            </div>
        </div>
    )
}

export default UseReducer

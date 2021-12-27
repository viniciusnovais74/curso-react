import React, { useRef, useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = function (s1, s2) {
    return [...s1].map(function (e, i) {
        return `${e}${s2[i] || ""}`
    }).join('')
}
const UseRef = (props) => {

    const [vl1, setvl1] = useState('')
    const [vl2, setvl2] = useState('')

    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function () {
        count.current = count.current + 1
        myInput2.current.focus()
    }, [vl1])

    useEffect(function () {
        count.current++
        myInput1.current.focus()
    }, [vl2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title='Exercicio - 01' />
            <div className="center">
                <div>
                    <span className="text">Valor:</span>
                    <span className="text">{merge(vl1, vl2)}[</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" ref={myInput1} value={vl1} onChange={e => setvl1(e.target.value)} />
            </div>

            <SectionTitle title='exercicio - 02' />
            <div className="center">
                <input type="text" className="input" ref={myInput2} value={vl2} onChange={e => setvl2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef

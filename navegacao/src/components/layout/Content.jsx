import './Content.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from '../../vews/examples/About';
import Home from '../../vews/examples/Home';
import Param from '../../vews/examples/Param';
import NotFound from '../../vews/examples/Error404'
const Content = props => (

    <main className="Content">

        <Routes>

            <Route path='/' caseSensitive={false} element={<Home />} />
            <Route path='/param/:id' caseSensitive={false} element={<Param />} />
            <Route path='/param' caseSensitive={false} element={<Param />} />
            <Route path='/about' caseSensitive={false} element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

    </main>

)

export default Content
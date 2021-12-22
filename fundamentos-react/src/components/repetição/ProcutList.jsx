import React from "react";
import product from "../../data/product";
import './main.css'

export default prop => {

    const lass = product.map(products => {
        return (

            <tr key={products.id}>
                <td>{products.id}</td>
                <td>{products.product}</td>
                <td>{products.price.toFixed(2).replace('.',',')}</td>
            </tr>


        );
    })

    return (
        <div>
            <table id="customers">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {lass}
                </tbody>
            </table>

        </div>
    )
}
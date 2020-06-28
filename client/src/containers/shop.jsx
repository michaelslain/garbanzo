import React from 'react'
import './shop.scss'

import LoadingScreen from '../components/loadingScreen'
import Product from '../components/product'

export default function Shop({ products, canProduct }) {
    if (!canProduct) return <LoadingScreen />

    if (products.length === 1) {
        return (
            <div className="no-products-container">
                <i>
                    <h1 className="text">
                        There are currently no products in store
                    </h1>
                </i>
            </div>
        )
    }

    return (
        <div className="shop-showcase">
            {products.map(data => (
                <Product key={data._id} data={data} />
            ))}
        </div>
    )
}

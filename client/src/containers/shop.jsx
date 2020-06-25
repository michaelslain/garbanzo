import React, { Fragment } from 'react'
import './shop.scss'

import LoadingScreen from '../components/loadingScreen'
import Product from '../components/product'

export default function Shop({ products, canProduct }) {
    return (
        <Fragment>
            {!canProduct ? (
                <LoadingScreen />
            ) : (
                <div className="shop-showcase">
                    {products.map(data => (
                        <Product key={data._id} data={data} />
                    ))}
                </div>
            )}
        </Fragment>
    )
}

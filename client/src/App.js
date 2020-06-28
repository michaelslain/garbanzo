import React, { useState, useEffect } from 'react'
import './App.scss'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Storage from './cartApi'

import BackgroundAnimation from './components/backgroundAnimation'
import Header from './components/header'
import Home from './containers/home'
import Shop from './containers/shop'
import LearnMore from './containers/learnMore'
import Product from './containers/product'
import Cart from './containers/cart'
import Checkout from './containers/checkout'

function App() {
    const [products, setProducts] = useState(null)
    const [canProduct, setCanProduct] = useState(false)
    const [fetchProductReloadCounter, setfetchProductReloadCounter] = useState(
        0
    )

    const [canCart, setCanCart] = useState(false)
    const [fetchCartReloadCounter, setFetchProductReloadCounter] = useState(0)

    useEffect(() => {
        handleInitStorage()
    }, [])

    useEffect(() => {
        handleGetProducts()
    }, [fetchProductReloadCounter])

    const handleGetProducts = async () => {
        try {
            const request = await axios.get('/api/products/get')
            const data = request.data

            setProducts(data)
            setCanProduct(true)
        } catch (err) {
            console.error(err)
        }
    }

    const handleInitStorage = async () => {
        await Storage.storageInit()
        setCanCart(true)
    }

    const handleFetchProductReload = () =>
        setfetchProductReloadCounter(fetchProductReloadCounter + 1)
    const handleFetchCartReload = () =>
        setFetchProductReloadCounter(fetchCartReloadCounter + 1)

    return (
        <Router>
            <BackgroundAnimation>
                <Header
                    canCart={canCart}
                    fetchCartReloadCounter={fetchCartReloadCounter}
                />
                <Switch>
                    <Route path="/" exact={true} render={Home} />
                    <Route
                        path="/shop"
                        render={() => (
                            <Shop products={products} canProduct={canProduct} />
                        )}
                    />
                    <Route path="/learn-more" render={LearnMore} />
                    <Route
                        path="/product/:productId"
                        render={() => {
                            return (
                                <Product
                                    handleFetchCartReload={
                                        handleFetchCartReload
                                    }
                                    products={products}
                                    canProduct={canProduct}
                                    canCart={canCart}
                                />
                            )
                        }}
                    />
                    <Route
                        path="/cart"
                        render={() => (
                            <Cart
                                handleFetchCartReload={handleFetchCartReload}
                                products={products}
                                canProduct={canProduct}
                                canCart={canCart}
                                fetchCartReloadCounter={fetchCartReloadCounter}
                            />
                        )}
                    />
                    <Route
                        path="/checkout"
                        render={() => (
                            <Checkout
                                handleFetchCartReload={handleFetchCartReload}
                                canCart={canCart}
                            />
                        )}
                    />
                </Switch>
            </BackgroundAnimation>
        </Router>
    )
}

export default App

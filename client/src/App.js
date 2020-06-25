import React, { useState, useEffect } from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Storage from './cartApi'

import BackgroundAnimation from './components/backgroundAnimation'
import Header from './components/header'
import Home from './containers/home'
import Shop from './containers/shop'
import LearnMore from './containers/learnMore'

function App() {
    const [products, setProducts] = useState(null)
    const [canProduct, setCanProduct] = useState(false)
    const [fetchProductReloadCounter, setfetchProductReloadCounter] = useState(
        0
    )

    const [cart, setCart] = useState(null)
    const [canCart, setCanCart] = useState(false)
    const [fetchCartReloadCoutner, setFetchProductReloadCounter] = useState(0)

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

    return (
        <Router>
            <BackgroundAnimation>
                <Header />
                <Switch>
                    <Route path="/" exact={true} render={Home} />
                    <Route
                        path="/shop"
                        render={() => (
                            <Shop products={products} canProduct={canProduct} />
                        )}
                    />
                    <Route path="/learn-more" render={LearnMore} />
                </Switch>
            </BackgroundAnimation>
        </Router>
    )
}

export default App
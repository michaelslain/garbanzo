import React, { useState, useEffect } from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import CartIcon from '../images/cart.svg'
import Storage from '../cartApi'

import Tab from './tab'

export default function Header({ canCart, fetchCartReloadCounter }) {
    const [cartNumber, setCartNumber] = useState('%')

    useEffect(() => {
        if (canCart) handleGetCartNumber()
    }, [canCart, fetchCartReloadCounter])

    const handleGetCartNumber = async () => {
        const data = await Storage.getItems()
        const amountOfCartNumber = data.length

        setCartNumber(amountOfCartNumber)
    }

    return (
        <div className="header">
            <Link to="/">
                <h1 className="logo">Garbanzo</h1>
            </Link>
            <div className="text-container">
                <Tab link="/">Home</Tab>
                <Tab link="/shop">Shop</Tab>
                <Tab link="/learn-more">Learn More</Tab>
                <Tab link="/cart" className="cart">
                    <img src={CartIcon} alt="Cart" className="cart-image" />
                    {cartNumber}
                </Tab>
            </div>
        </div>
    )
}

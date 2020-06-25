import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import CartIcon from '../images/cart.svg'

export default function Header() {
    return (
        <div className="header">
            <Link to="/">
                <h1 className="logo">Garbanzo</h1>
            </Link>
            <div className="text-container">
                <Tab link="/">Home</Tab>
                <Tab link="/shop">Shop</Tab>
                <Tab link="/learn-more">Learn More</Tab>
                <Tab link="/cart">
                    <img src={CartIcon} alt="Cart" className="cart" />
                </Tab>
            </div>
        </div>
    )
}

function Tab({ children, link, style }) {
    return (
        <Link to={link} className="tab" style={style}>
            {children}
        </Link>
    )
}

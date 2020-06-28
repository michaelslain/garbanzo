import React from 'react'
import './home.scss'
import MainImage from '../images/main.png'

import Cta from '../components/cta'

export default function Home() {
    return (
        <div className="main">
            <div className="hero-container">
                <h1 className="heading">
                    <font className="the">the </font>
                    <font className="best">Best </font>
                    <br />
                    <font className="beans">beans</font> of the <br />
                    <font className="century">century</font>
                </h1>
                <Cta link="/shop" clear={true}>
                    Check out our pricings!
                </Cta>
            </div>
            <img className="main-image" src={MainImage} alt="Plant" />
        </div>
    )
}

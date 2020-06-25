import React from 'react'
import './cta.scss'
import { Link } from 'react-router-dom'

export default function Cta({ children, link = '/', style, clear = false }) {
    let classes = 'cta '
    if (clear === true) classes += 'clear'

    return (
        <Link to={link} className={classes} style={style}>
            {children}
        </Link>
    )
}

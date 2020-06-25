import React, { useState, useEffect } from 'react'
import './backgroundAnimation.scss'
import { useHistory } from 'react-router-dom'

export default function BackgroundAnimation({ children }) {
    const [style, setStyle] = useState(null)
    const history = useHistory()

    useEffect(() => {
        console.log('bet')
    }, [history.location.pathname])

    return (
        <div className="background-animation" style={style}>
            {children}
        </div>
    )
}

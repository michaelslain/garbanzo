import React from 'react'
import './reviewForm.scss'
import Cta from './cta'

export default function ReviewForm() {
    return (
        <div className="form review">
            <h1 className="review-title">Review your cart?</h1>
            <Cta link="/cart" clear={true} className="review-cta">
                Double check
            </Cta>
        </div>
    )
}

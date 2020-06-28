import React, { useState, Fragment } from 'react'
import './paymentForm.scss'
import PaypalExpressBtn from 'react-paypal-express-checkout'
import Storage from '../cartApi'

import Cta from './cta'

export default function PaymentForm() {
    const [isDone, setIsDone] = useState(false)
    const [isError, setIsError] = useState(false)

    const uri =
        'AWMeZT-1d5zGn1nTAMrvF5l9GInePxlJ0Mr6S61UO0JWZQFh0kzBwTzdEa5fAKm09bhIcMabyP-uxxu-'
    const client = {
        sandbox: uri,
        production: uri,
    }

    const style = {
        size: 'large',
        color: 'blue',
    }

    const handleOnSuccess = payment => {
        setIsDone(true)
        Storage.clearCart()
    }
    const handleOnCancel = data => console.log('cancelled')
    const handleOnError = err => setIsError({ status: true, err })

    return (
        <div className="form payment">
            {isDone ? (
                <Fragment>
                    <h1 className="sucess">
                        Your mock payment has been succesfully completed
                    </h1>
                    <Cta link="/" className="return-cta" clear={true}>
                        Return to home page
                    </Cta>
                </Fragment>
            ) : (
                <Fragment>
                    <div className="margin"></div>
                    <PaypalExpressBtn
                        client={client}
                        currency={'USD'}
                        total={0.01}
                        style={style}
                        onSuccess={handleOnSuccess}
                        onCancel={handleOnCancel}
                        onError={handleOnError}
                    />
                    <h1 className="message">
                        This is a mock payment, meaning that no money would be
                        taken from you :)
                    </h1>
                    {isError.status ? (
                        <p className="payment-error">{isError.err}</p>
                    ) : null}
                </Fragment>
            )}
        </div>
    )
}

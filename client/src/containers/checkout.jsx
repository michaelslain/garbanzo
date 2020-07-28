import React, { useState, useEffect, useRef } from 'react'
import './checkout.scss'

import Cta from '../components/cta'
import AddressForm from '../components/addressForm'
import ReviewForm from '../components/reviewForm'
import PaymentForm from '../components/paymentForm'
import LoadingScreen from '../components/loadingScreen'

export default function Checkout({ canCart, handleFetchCartReload }) {
    const [num, setNum] = useState(700)

    const [canGoReview, setCanGoReview] = useState(false)
    const [canGoPayment, setCanGoPayment] = useState(false)
    const [canNext, setCanNext] = useState(false)

    const [reelRight, setReelRight] = useState(0)

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')

    const [addressIsValid, setAddressIsValid] = useState(false)
    const [cityIsValid, setCityIsValid] = useState(false)
    const [stateIsValid, setStateIsValid] = useState(false)
    const [zipCodeIsValid, setZipCodeIsValid] = useState(false)

    const windowRef = useRef(null)

    const handleUpdateNum = () => setNum(windowRef.current.innerWidth)

    useEffect(() => {
        if (windowRef.current != null) {
            handleUpdateNum()
            window.addEventListener('resize', handleUpdateNum)

            return () => {
                window.removeEventListener('resize', handleUpdateNum)
            }
        }
    }, [handleUpdateNum, windowRef.current])

    console.log(num)

    useEffect(() => {
        validateAddress()
    }, [address])
    useEffect(() => {
        validateCity()
    }, [city])
    useEffect(() => {
        validateState()
    }, [state])
    useEffect(() => {
        validateZipCode()
    }, [zipCode])

    useEffect(() => {
        if (reelRight === 0) {
            if (
                addressIsValid &&
                cityIsValid &&
                stateIsValid &&
                zipCodeIsValid
            ) {
                setCanGoReview(true)
                setCanNext(true)
            }
        }

        if (reelRight === num) setCanGoPayment(true)
    }, [address, city, state, zipCode, reelRight])

    const validateZipCode = () => {
        if (Number.isNaN(Number(zipCode))) {
            setZipCodeIsValid(false)
            return
        }
        if (zipCode.length !== 5) {
            setZipCodeIsValid(false)
            return
        }

        setZipCodeIsValid(true)
    }
    const validateState = () => {
        if (state.length >= 2) {
            setStateIsValid(true)
            return
        }
        setStateIsValid(false)
    }
    const validateCity = () => {
        if (city.length >= 3) {
            setCityIsValid(true)
            return
        }
        setCityIsValid(false)
    }
    const validateAddress = () => {
        const tokens = address.split(' ')
        if (tokens.length < 3) {
            setAddressIsValid(false)
            return
        }
        if (Number.isNaN(Number(tokens[0]))) {
            setAddressIsValid(false)
            return
        }

        setAddressIsValid(true)
    }

    const handleSwitchToAddress = () => setReelRight(0)
    const handleSwitchToReview = () => {
        if (canGoReview) setReelRight(num)
    }
    const handleSwitchToPayment = () => {
        if (canGoPayment) setReelRight(num * 2)
    }
    const handleNext = () => {
        if (reelRight < num * 2 && canNext) setReelRight(reelRight + num)
    }

    if (!canCart) return <LoadingScreen />

    const selectedStyle = { color: 'black', fontWeight: 'normal' }
    const addressTabStyle = reelRight === 0 ? selectedStyle : {}
    const reviewTabStyle = reelRight === num ? selectedStyle : {}
    const paymentTabStyle = reelRight === num * 2 ? selectedStyle : {}

    return (
        <div className="checkout-page">
            <div className="tabs">
                <p
                    className="tab"
                    style={addressTabStyle}
                    onClick={handleSwitchToAddress}
                >
                    Address
                </p>
                <p
                    className="tab"
                    style={reviewTabStyle}
                    onClick={handleSwitchToReview}
                >
                    Review
                </p>
                <p
                    className="tab"
                    style={paymentTabStyle}
                    onClick={handleSwitchToPayment}
                >
                    Payment
                </p>
            </div>
            <div className="window" ref={windowRef}>
                <div className="reel" style={{ right: reelRight }}>
                    <AddressForm
                        address={address}
                        setAddress={setAddress}
                        addressIsValid={addressIsValid}
                        city={city}
                        setCity={setCity}
                        cityIsValid={cityIsValid}
                        state={state}
                        setState={setState}
                        stateIsValid={stateIsValid}
                        zipCode={zipCode}
                        setZipCode={setZipCode}
                        zipCodeIsValid={zipCodeIsValid}
                    ></AddressForm>
                    <ReviewForm></ReviewForm>
                    <PaymentForm
                        handleFetchCartReload={handleFetchCartReload}
                    ></PaymentForm>
                </div>
            </div>
            <Cta className="form-cta" link="none" callback={handleNext}>
                Next &nbsp;➜
            </Cta>
        </div>
    )
}

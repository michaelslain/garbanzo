import React from 'react'
import './addressForm.scss'

export default function AddressForm({
    address,
    setAddress,
    addressIsValid,
    city,
    setCity,
    cityIsValid,
    state,
    setState,
    stateIsValid,
    zipCode,
    setZipCode,
    zipCodeIsValid,
}) {
    const handleUpdateAddress = e => setAddress(e.target.value)
    const handleUpdateCity = e => setCity(e.target.value)
    const handleUpdateState = e => setState(e.target.value)
    const handleUpdateZipCode = e => setZipCode(e.target.value)

    return (
        <div className="form address">
            <div className="form-inner-container">
                <p className="form-label">Address</p>
                <input
                    type="text"
                    className="form-input"
                    onChange={handleUpdateAddress}
                    value={address}
                    placeholder="Type here..."
                    name="address"
                />
                <p className="form-error">
                    {addressIsValid
                        ? null
                        : address === ''
                        ? null
                        : 'Address is invalid'}
                </p>
                <p className="form-label">City</p>
                <input
                    type="text"
                    className="form-input"
                    onChange={handleUpdateCity}
                    value={city}
                    placeholder="Type here..."
                    name="city"
                />
                <p className="form-error">
                    {cityIsValid
                        ? null
                        : address === ''
                        ? null
                        : 'City is invalid'}
                </p>
                <p className="form-label">State</p>
                <input
                    type="text"
                    className="form-input"
                    onChange={handleUpdateState}
                    value={state}
                    placeholder="Type here..."
                    name="state"
                />
                <p className="form-error">
                    {stateIsValid
                        ? null
                        : address === ''
                        ? null
                        : 'State is invalid'}
                </p>
                <p className="form-label">Zip Code</p>
                <input
                    type="text"
                    className="form-input"
                    onChange={handleUpdateZipCode}
                    value={zipCode}
                    placeholder="Type here..."
                    name="zipcode"
                />
                <p className="form-error">
                    {zipCodeIsValid
                        ? null
                        : address === ''
                        ? null
                        : 'Zip code is invalid'}
                </p>
            </div>
        </div>
    )
}

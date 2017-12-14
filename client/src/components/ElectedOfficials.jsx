import React from 'react'
import AddressForm from './AddressForm'

const ElectedOfficials = (props) =>{
    return (
        <div>
            <AddressForm addressSubmit = {props.addressSubmit} />
        </div>
    )
}

export default ElectedOfficials
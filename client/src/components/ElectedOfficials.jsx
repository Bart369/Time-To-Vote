import React from 'react'
import AddressForm from './AddressForm'
import Dropdown from 'react-minimal-dropdown'

const ElectedOfficials = (props) =>{
    return (
        <div className = 'elected_Officials_Container'>
            <div className = 'address_Bar'>
                <AddressForm addressSubmit = {props.addressSubmit} />
            </div>
            <div class = 'officials_Container'>
            {(props.dataLoaded) ? 
                <ul>
                {props.officialsData.offices.map(e => {
                 return( 

                     <li className = 'official_item'>
                        <div className='official_Img'>
                            { props.officialsData.officials[e.officialIndices[0]].photoUrl ? 
                                <img src={props.officialsData.officials[e.officialIndices[0]].photoUrl} alt=""/> :
                                <img src="http://res.cloudinary.com/dnockqung/image/upload/q_99/v1509421586/noimage_ibguir.jpg" alt =''/>}
                        </div>
                        <div className='official_Data'>
                            <p>Office: {e.name}</p><br/>
                            <p>Official: {props.officialsData.officials[e.officialIndices[0]].name}</p>
                            <p>Party: {props.officialsData.officials[e.officialIndices[0]].party}</p>
                            {/* <p>Email: {props.officialsData.officials[e.officialIndices[0]].emails[0]}</p> */}
                            <p>Phone: {props.officialsData.officials[e.officialIndices[0]].phones[0]}</p>
                            <p>Site: {props.officialsData.officials[e.officialIndices[0]].urls[0]}</p>
                        </div>
                     </li>
                )   
                })}
                </ul>
            
            : null}
            </div>
        </div>
    )
}

export default ElectedOfficials
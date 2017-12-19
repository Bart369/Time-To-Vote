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
                        </div>
                     </li>
                )   
                })}
                </ul>
            
            : <p>No address entered</p>}
            </div>
        </div>
    )
}

export default ElectedOfficials
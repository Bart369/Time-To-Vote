import React from 'react'
import AddressForm from './AddressForm'

const ElectedOfficials = (props) =>{
    return (
        <div>
            <AddressForm addressSubmit = {props.addressSubmit} />
            {(props.dataLoaded) ? 
                <ul>
                {props.officialsData.offices.map(e => {
                 return( 

                     <li className = 'official_item'>
                        <div className='official_Data'>
                            <p>Office: {e.name}</p><br/>
                            <p>Official: {props.officialsData.officials[e.officialIndices[0]].name}</p>
                        </div>
                        <div className='official_Img'>
                            { props.officialsData.officials[e.officialIndices[0]].photoUrl ? 
                                <img src={props.officialsData.officials[e.officialIndices[0]].photoUrl} alt=""/> :
                                <img src="http://res.cloudinary.com/dnockqung/image/upload/q_99/v1509421586/noimage_ibguir.jpg" alt =''/>}
                        </div>
                     </li>
                )   
                })}
                </ul>
            
            : <p>No address entered</p>}
        </div>
    )
}

export default ElectedOfficials
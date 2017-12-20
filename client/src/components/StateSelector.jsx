import React from 'react'

const StateSelector = (props) => {
    return (
        <div className='selector_Container'>
            {props.electionsDataLoaded ? 
                (<select className = 'selector' onChange={props.getSelectedState}>
                    {props.electionsData.map(e => {
                        return (
                            <option value={e.id}>{e.statename}</option>
                        )
                    })}
                </select>) :
                <p>Data Hasn't Loaded </p>}
        </div> 
    )
} 

export default StateSelector
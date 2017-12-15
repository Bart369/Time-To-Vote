import React from 'react'

const StateSelector = (props) => {
    return (
        <div>
            {props.electionsDataLoaded ? 
                (<select onChange={props.getSelectedState}>
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
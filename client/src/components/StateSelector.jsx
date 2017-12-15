import React from 'react'

const StateSelector = (props) => {
    return (
        <div>
            {props.electionDataLoaded ? 
                (props.electionsData.map(e => {
                    return (
                        <p>e.statename</p>
                    )
                }))
            :
            <p>Data Hasn't Loaded </p>}
        </div> 
    )
} 

export default StateSelector
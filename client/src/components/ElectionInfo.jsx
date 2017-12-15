import React from 'react'

const ElectionInfo = (props) => {
    return(
        <div>
        {props.statedataLoaded ?
            <div>
                <p>{props.stateSelected.statename}</p>
                <p>{props.stateSelected.electiondate}</p>
            </div>
            :
            <p>Please select a state</p>
        }
        </div>
    )
}

export default ElectionInfo
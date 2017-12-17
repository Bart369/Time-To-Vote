import React from 'react'

const ElectionInfo = (props) => {
    return(
        <div>
        {props.statedataLoaded ?
            <div>
                <p>State: {props.stateSelected.statename}</p>
                <p>Election Date: {props.stateSelected.electiondate}</p>
                <p>Runoff Date: {props.stateSelected.runoffdate ? props.stateSelected.runoffdate : 'N/A'}</p>
                <p>Represenatives: {props.stateSelected.representatives ? props.stateSelected.representatives : 'N/A'}</p>
            </div>
            :
            <p>Please select a state</p>
        }
        </div>
    )
}

export default ElectionInfo
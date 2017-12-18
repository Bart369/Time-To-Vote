import React from 'react'

const ElectionInfo = (props) => {
    return(
        <div>
        {props.statedataLoaded ?
            <div>
                <p>State: {props.stateSelected.statename}</p>
                <p>Election Date: {props.stateSelected.electiondate ? props.stateSelected.electiondate : 'N/A'}</p>
                <p>Runoff Date: {props.stateSelected.runoffdate ? props.stateSelected.runoffdate : 'N/A'}</p>
                <p>Senate: {props.stateSelected.senate ? props.stateSelected.senate : 'N/A'}</p>
                <p>Represenatives: {props.stateSelected.representatives ? props.stateSelected.representatives : 'N/A'}</p>
            </div>
            :
            <p>Please select a state</p>
        }
        </div>
    )
}

export default ElectionInfo
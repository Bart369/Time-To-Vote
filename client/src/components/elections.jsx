import React from 'react'
import StateSelector from './StateSelector'
import ElectionInfo from './ElectionInfo'

const Elections = (props) => {
    return(
        <div>
            <StateSelector 
                electionsData={props.electionsData} 
                electionsDataLoaded = {props.electionsDataLoaded}
            />
            <ElectionInfo />
        </div>
    )
}

export default Elections
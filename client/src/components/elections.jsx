import React from 'react'
import StateSelector from './StateSelector'
import ElectionInfo from './ElectionInfo'

const Elections = (props) => {
    return(
        <div>
            <StateSelector electionsData={props.electionsData} />
            <ElectionInfo />
        </div>
    )
}

export default Elections
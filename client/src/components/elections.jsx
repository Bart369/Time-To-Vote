import React from 'react'
import StateSelector from './StateSelector'
import ElectionInfo from './ElectionInfo'
import NotificationForm from './NotificationForm'

class Elections extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            statedataLoaded: false,
            stateSelected: null,
        }
        this.getSelectedState = this.getSelectedState.bind(this)
    }

    // onChange is an event listener, and in this case we are taking the value of the events target
    getSelectedState(e) {
        fetch(`/api/elections/${e.target.value}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    statedataLoaded: true,
                    stateSelected: res.data.election,
                })
            }).catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <StateSelector 
                    electionsData={this.props.electionsData} 
                    electionsDataLoaded = {this.props.electionsDataLoaded}
                    getSelectedState={this.getSelectedState}
                />
                <ElectionInfo 
                    statedataLoaded={this.state.statedataLoaded}
                    stateSelected={this.state.stateSelected}
                />
                <NotificationForm 
                    statedataLoaded={this.state.statedataLoaded}
                    stateSelected={this.state.stateSelected}
                />
            </div>
        )
    }
}

export default Elections
import React from 'react'
import StateSelector from './StateSelector'
import ElectionInfo from './ElectionInfo'
import ShareForm from './ShareForm'

class Elections extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            statedataLoaded: false,
            stateSelected: null,
        }
        this.getSelectedState = this.getSelectedState.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
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

    handleFormSubmit(e, data) {
        // this;
        // debugger
        e.preventDefault()
        fetch('/api/share', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(res => {
            }).catch(err => console.log(err))
    }

    render(){
        return(
            <div className='elections_Container'>
                <StateSelector 
                    electionsData={this.props.electionsData} 
                    electionsDataLoaded = {this.props.electionsDataLoaded}
                    getSelectedState={this.getSelectedState}
                />
                <ElectionInfo 
                    statedataLoaded={this.state.statedataLoaded}
                    stateSelected={this.state.stateSelected}
                />
                {this.state.statedataLoaded ? 
                //  <ShareForm 
                // user={this.props.user}
                // stateSelected={this.state.stateSelected}
                // handleFormSubmit={this.handleFormSubmit} /> 
                <form onSubmit={(e) => this.handleFormSubmit(e, this.state.stateSelected)}>
                    <input className="" type="submit" value='Add to list' />
                </form> 
                :
                 null}
            </div>
        )
    }
}

export default Elections
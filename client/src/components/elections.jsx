import React from 'react'
import StateSelector from './StateSelector'
import ElectionInfo from './ElectionInfo'


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
        e.preventDefault()
        fetch('/api/share', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // data(which is the info from this.state.stateSelected) doesnt include a userid property,
            // we are now adding a userid from and giving it the value of the user's id
            body: JSON.stringify(Object.assign({}, data, { userid: this.props.user.id })),
        }).then(res => res.json())
            .then(res => {
                console.log(res)
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
                <div className = 'elections_Info'>
                    <ElectionInfo 
                        statedataLoaded={this.state.statedataLoaded}
                        stateSelected={this.state.stateSelected}
                    />
                    {this.state.statedataLoaded ? 
                    <form className="election_Form" onSubmit={(e) => this.handleFormSubmit(e, this.state.stateSelected)}>
                        <input className="election_Sub" type="submit" value='Add to Share list' />
                    </form> 
                    :
                    null}
                 </div>
            </div>
        )
    }
}

export default Elections
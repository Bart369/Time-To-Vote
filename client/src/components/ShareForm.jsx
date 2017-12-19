import React from 'react'

class ShareForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            statename: '',
            electiondate: '',
            runoffdate: '',
            senate: '',
            representatives: '',
            userid: this.props.user.id
        }
    }

    render(){
        return(
            <form onSubmit={(e) => this.handleFormSubmit(e, this.state)}>
                <input className="" type="hidden" name="statename" value={this.state.value} />
                <input className="" type="hidden" name="electiondate" value={this.state.value} />
                <input className="" type="hidden" name="runoffdate" value={this.state.value} />
                <input className="" type="hidden" name="senate" value={this.state.value} />
                <input className="" type="hidden" name="representatives" value={this.state.value} />
                <input className="" type="submit" value='Add to list' />
            </form>
        )
    }
}

export default ShareForm
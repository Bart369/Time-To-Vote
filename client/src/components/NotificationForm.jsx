import React from 'react'

class NotificationForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
}
    render(){
        return (
            <form onSubmit={(e) => this.props.addressSubmit(e, this.state.address)}>
                <input className="" type='hidden' name="address" value={this.state.value} onChange={this.handler} />
                <input className="" type='hidden' name="address" value={this.state.value} onChange={this.handler} />
                <input className="" type='hidden' name="address" value={this.state.value} onChange={this.handler} />
                <input className="" type='hidden' name="address" value={this.state.value} onChange={this.handler} />
                <input className="" type='hidden' name="address" value={this.state.value} onChange={this.handler} />
                <input className="" type='hidden' name="address" value={this.state.value} onChange={this.handler} />
                <input className="" type="submit" value='Search' />
            </form>
        )  
    }
}

export default NotificationForm
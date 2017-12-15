import React from 'react'

class AddressForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            address: '',
        }
        this.handler = this.handler.bind(this)
    }

    handler(e){
        const name = e.target.name
        const val = e.target.value
        this.setState({
            [name]: val
        })

    }
    

    render(){
        return(
            <form onSubmit={(e) => this.props.addressSubmit(e, this.state.address)}>
                <input className="" type="text" name="address" placeholder="Enter street address here" value={this.state.value} onChange={this.handler} />
                <input className="" type="submit" value='Search' />
            </form>

        )
    }
}

export default AddressForm
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
                <input className='zip_bar' type="text" maxlength="5" name="address" placeholder="Enter Zipcode Here" value={this.state.value} onChange={this.handler} />
                {/* <input className='zip_but' type="submit" value='Search' /> */}
                <button className = 'zip_but' type='submit' >Search</button>
            </form>

        )
    }
}

export default AddressForm
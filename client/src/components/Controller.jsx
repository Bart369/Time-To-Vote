import React from 'react'
import Header from './Header'
import Elections from './Elections'
import ElectedOfficials from './ElectedOfficials'

class Controller extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loadPage: props.currentPage,
            officialsData: {},
        }
        this.addressSubmit = this.addressSubmit.bind(this)
    }

    addressSubmit(e, data){
        e.preventDefault();
        fetch(`API/${data}`)
        .then(res => res.json())
            .then(res => {
                this.setState({
                    officialsData: res
                })
            }).catch(err => console.log(err))
    }

    decideWhichToRender(){
        switch(this.state.loadPage){
            case 'elections':
                return <Elections />
                break;
            default:
                return <ElectedOfficials addressSubmit={this.addressSubmit} officialsData = {this.state.officialsData} />
                break;
        }
    }

    render(){
        return(
            <div>
                <Header />
                {this.decideWhichToRender()}
            </div>
        )

    }
}

export default Controller
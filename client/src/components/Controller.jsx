import React from 'react'
import Elections from './Elections'
import ElectedOfficials from './ElectedOfficials'

class Controller extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loadPage: props.currentPage,
            officialsData: null,
            dataLoaded: false,
        }
        this.addressSubmit = this.addressSubmit.bind(this)
        this.getStateElections = this.getStateElections.bind(this)
    }

    componentDidMount(){
        this.getStateElections()
    }

    getStateElecions(){
        fetch('/api/elections')
    }

    addressSubmit(e, data){
        e.preventDefault();
        fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAJ85dTY40tT8X8LJ8e8gdPWi8bft2PmWg&address=${data}`)
        .then(res => res.json())
            .then(res => {
                this.setState({
                    dataLoaded: true,
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
                return <ElectedOfficials addressSubmit={this.addressSubmit} officialsData = {this.state.officialsData} dataLoaded = {this.state.dataLoaded} />
                break;
        }
    }

    render(){
        return(
            <div>
                {this.decideWhichToRender()}
            </div>
        )

    }
}

export default Controller
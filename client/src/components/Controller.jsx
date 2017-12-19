import React from 'react'
import Elections from './Elections'
import ElectedOfficials from './ElectedOfficials'
import Share from './Share'

class Controller extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loadPage: props.currentPage,
            officialsData: null,
            dataLoaded: false,
            electionsDataLoaded: false,
            electionsData: null,
        }
        this.addressSubmit = this.addressSubmit.bind(this)
        this.getStateElections = this.getStateElections.bind(this)
    }

    componentDidMount(){
        console.log('componentdidmount ran')
        this.getStateElections()
    }

    getStateElections(){
        fetch('/api/elections')
        .then(res => res.json())
        .then(res => {
            this.setState({
                electionsDataLoaded: true,
                electionsData: res.data.elections,
            })
        }).catch(err => console.log(err))
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
                return <Elections 
                        user = {this.props.user}
                        electionsData = {this.state.electionsData} 
                        electionsDataLoaded = {this.state.electionsDataLoaded} 
                        />
                break;
            case 'share':
                return <Share user = {this.props.user} />
                break;
            default:
                return <ElectedOfficials 
                        addressSubmit = {this.addressSubmit} 
                        officialsData = {this.state.officialsData} 
                        dataLoaded = {this.state.dataLoaded} 
                        />
                break;
        }
    }

    render(){
        return(
            <div className = 'main'>
                {this.decideWhichToRender()}
            </div>
        )

    }
}

export default Controller
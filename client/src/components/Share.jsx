import React from 'react'

class Share extends React.Component{
    constructor(){
        super()
        this.state = {
            dataLoaded: false,
            savedElections: null,
        }
        this.getSavedElections = this.getSavedElections.bind(this)

    }

    componentDidMount(){
        this.getSavedElections()
    }

    getSavedElections(){
        fetch('/api/share')
        .then(res => res.json())
        .then(res => {
            this.setState({
                dataLoaded: true,
                savedElections: res.data.elections,
            })
        }).catch(err => console.log(err))
    }

    render(){
        return(
           <div>
               {this.state.dataLoaded ? 
                (<ul>
                    {this.state.savedElections.map(e => { 
                        return(
                            <div>
                                <li>{e.statename}</li>
                                <li>{e.electiondate}</li>
                            </div>
                        )
                    })}
                </ul>) :
                <p> Still Loading</p>}
            </div>
        )
    }   
}

export default Share
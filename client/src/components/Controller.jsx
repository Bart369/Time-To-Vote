import React from 'react'
import Header from './Header'
import Elections from './Elections'
import ElectedOfficials from './ElectedOfficials'

class Controller extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loadPage: props.currentPage,
        }
    }

    decideWhichToRender(){
        switch(this.state.loadPage){
            case 'elections':
                return <ElectedOfficials />
                break;
            case 'test':
                return <Header />
                break;
            default:
                return <Elections />
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
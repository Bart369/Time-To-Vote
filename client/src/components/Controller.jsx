import React from 'react'
import Header from './Header'
import Election from './Elections'
import ElectedOfficials from './ElectedOfficials'

class Controller extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentPage: props.currentPage,
        }
    }

    decideWhichToRender(){
        switch(this.state.currentPage){
            case 'elections':
                return <ElectedOfficials />
                break;
            default:
                return <Redirect push to = '/' />
                break;
        }
    }

    renter(){
        return(
            <div>
                <Header />
                {(this.decideWhichToRender())}
            </div>
        )

    }
}

export default Controller
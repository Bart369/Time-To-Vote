import React from 'react'

class NotificationForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            statename: props.stateSelected.statename,
            electiondate: props.stateSelected.electiondate,
            runoffdate: props.stateSelected.runoffdate,
            senate: props.stateSelected.senate,
            representatives: props.stateSelected.representatives
        }
}
    render(){
        return (
            // <div>
            //     {console.log('this is name ' + this.state.statename)}
                
            //     <form onSubmit={(e) => this.props.handleFormSubmit(e, this.state)}>
            //         <input className="" type="submit" value='Add to list' />
            //     </form>
            // </div>
            null
            
        )  
    }
}

export default NotificationForm


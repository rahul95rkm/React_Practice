import { Component } from "react";


class Message extends Component{
    constructor(props){
       super(props)
       this.state={
           message: 'welcome user.!',
           display: 'i am being on the display because of state !'
       } 
    
    }
    changeMessage(){
        this.setState({
            ChangeMessage:' hey user you logged in '
        })
    }
    render(){
        console.log(this.state);
        return(
            <div className="App">
                <h1> {this.state.message}</h1>
            
                <h3> {this.state.display}</h3>
                <button onClick={()=> this.changeMessage()}>Log in </button>
                <h2> {this.state.ChangeMessage}</h2>
                 </div>
        )
    }
}
export default Message;
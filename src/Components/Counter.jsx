import { Component } from "react";

class Counter extends Component{
 constructor(props){

    super(props)
    this.state={
        count:0  //Initial State
    }
 } 
 Increment(){
     this.setState({
        count: this.state.count +1
       
     },
     ()=>{
console.log('callback value',this.state.count)
     })
     
 }  
}
export default Counter;
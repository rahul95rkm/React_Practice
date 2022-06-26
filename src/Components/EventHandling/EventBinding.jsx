import React from 'react'

class EventBinding extends Comment{
    constructor(props){
        super(props)
        this.state={
            message:'Hello Good Morning'
        }
        this.clickHandler=this.clickHandler.bind(this)
        
    }
    clickHandler(){
        this.setState={
            message:'Have a lovely day'
        }
        console.log(this)
     
    }
    clickHandlerAnother(){
        this.setState={
            message:'same to you'
        }
        console.log(this)
    }
    clickHandlerEvent=()=>{
        this.setState({
            message:'GoodBye!'
        })
        console.log(this)
    }
    render(){
    return(
        <div className='event'>
            <h2> {this.state.message}</h2>
            <button onClick={this.clickHandler.bind(this)}> Click</button>
            <button onClick={()=>this.clickHandlerAnother()}>Click Another </button>
            <button onClick={this.clickHandlerEvent}> ClickmeToo</button>
        </div>
    )
}
}
export default EventBinding;
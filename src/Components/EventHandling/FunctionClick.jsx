import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button clicked')
    }
    function clickHandlerSignin(){
        console.log('Button clicked')
    }
    function clickHandlerLogin(){
        console.log('Button clicked')
    }
    function clickHandlerLogout(){
        console.log('Button clicked')
    }
  return (
    <div className='App'>Html Event
    <button onClick={clickHandler}> click</button>
    <button onClick={clickHandlerSignin}>Signin </button>
    <button onClick={clickHandlerLogin}> Login</button>
    <button onClick={clickHandlerLogout}>Logout </button>
    </div>
  )
}

export default FunctionClick
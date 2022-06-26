//stateful and stateless components

import Technical from "./Example";

//if i make use of functional impl -- stateless
// if i make use of calss impl --stateful
function Welcome(){
return(
    <div className="app">
        <h1> My name is Rahul </h1>
<Technical/>
    </div>
)

}
export default Welcome;
//why we need to use () <> within that 
// here react is works by combining th html and css 

import Practice from "../Components/Practice"
function getGreeting(User){
    if(user){
        return <h2> hello ,{Practice(User)}</h2>
    }
    return <h2> Hello Stranger...</h2>
}

export default getGreeting;
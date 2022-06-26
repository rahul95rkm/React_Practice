import React from "react";
// jsx expression | embeded expressio 
function Practice(user) {
  return user.firstName + ''+user.lastName
}

const User={
    firstName:"Rahul",
    lastName:"Mandal"
}

const element=(
    <h2>
        Hello, {Practice(User)}!
    </h2>
)


export default Practice;

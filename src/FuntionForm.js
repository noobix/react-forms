import React from 'react'

const Form = () => {
    let [name,setName]=React.useState()
    let [email,setEmail]=React.useState()
    let [passsword,setPassword]=React.useState()

function handleNameChange (event){
    setName(event.target.value)
}
function handleEmailChange(event){
    setEmail(event.target.value)
}
function handlePasswordChange(event){
    setPassword(event.target.value)
}
function handleSubmit(event){
    console.log(name)
    console.log(email)
    console.log(passsword)
    event.preventDefault()
}

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" onChange={handleNameChange}></input>
                <br/>
                <label>Email</label>
                <input type="email" onChange={handleEmailChange}></input>
                <br/>
                <label>Password</label>
                <input type="password"onChange={handlePasswordChange}></input>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Form
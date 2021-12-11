import React from "react";

class Form extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            password:"",
        }
    }
    handlesubmit = (event) =>{
        event.preventDefault()
        console.log(this.state.name)
        console.log(this.state.email)
        console.log(this.state.password)
    }
    handleNameChange = (event) =>{
        this.setState({name: event.target.value})
    }
    handleEmailChange = (event) =>{
        this.setState({email: event.target.value})
    }
    handlePasswordChange = (event) =>{
        this.setState({password: event.target.value})
    }
    render(){
        return(
            <>
                <form onSubmit={this.handlesubmit}>
                    <label>Name</label>
                    <input type="text" onChange={this.handleNameChange}></input>
                    <br/>
                    <label>Email</label>
                    <input type="email" onChange={this.handleEmailChange}></input>
                    <br/>
                    <label>Password</label>
                    <input type="password"onChange={this.handlePasswordChange}></input>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}
export default Form
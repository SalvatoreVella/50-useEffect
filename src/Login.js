import React, { useState } from "react"

export default function Login() {
    const [state, setState ] = useState(
        {
        name: "",
        password: "",
        remember: false
    })

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        setState(prev => {
            return { 
                ...prev,
                [name]: value }
        })
    }

    function handleLogin(state) {
        let loginIfos = {...state};
        setState(() => {
            return {
                name: "",
                password: "",
                remember: false
            }
        })
        console.log(loginIfos);
    }


    const myStyle = {
        backgroundColor: state.password.length < 8 ? "red" : "green"
    }
        return <div>
                <label htmlFor="name">Name </label>
                <input type="text" name="name" value={state.name} onChange={handleInput}></input>
                <br></br>
                <label htmlFor="password">Password </label>
                <input type="password" name="password" value={state.password} onChange={handleInput}></input>
                <br></br>
                <label htmlFor="remember">Remember </label>
                <input type="checkbox" name="remember" checked={state.remember} onChange={handleInput}></input>
                <br></br>
                <button
                    style={ myStyle}
                    disabled={!state.name || !state.password ? true : false}
                    onClick={() => {handleLogin(state)}}
                >Login</button>
            </div>
        

}
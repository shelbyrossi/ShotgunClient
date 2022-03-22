import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { loginUser } from "./AuthManager"
import "./login.css"

export const Login = ({ setToken }) => {
  const username = useRef()
  const password = useRef()
  const history = useHistory()
  const [isUnsuccessful, setisUnsuccessful] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()

    const user = {
      username: username.current.value,
      password: password.current.value
    }

    loginUser(user).then(res => {
      if ("valid" in res && res.valid) {
        localStorage.setItem("token", res.token) 
        localStorage.setItem("userId", res.id)
        history.push("/")
      }
      else {
        setisUnsuccessful(true)
      }
    })
  }


  return (


    <center>
    <section className="columns is-centered">
      <form className="column is-two-thirds" onSubmit={handleLogin}>
        <h1 className="title">"Shotgun!" </h1>
        <p className="subtitle"></p>

        <div className="field">
          <label className="labelLogin">username</label>
          <div className="control">
            <input className="input" type="text" ref={username} />
          </div>
        </div>

        <div className="field">
          <label className="labelLogin">password</label>
          <div className="control">
            <input className="input" type="password" ref={password} />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="buttonSubmit" type="submit" >submit</button>
         
       
            <Link to="/register" className="button">register</Link>
          </div>
        </div>
        {
          isUnsuccessful ? <p className="help is-danger">Username or password not valid</p> : ''
        }
      </form>
    </section>
    </center>
  )
}

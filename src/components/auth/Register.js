import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import "./register.css"


export const Register = () => {
    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const email = useRef()
    const bio = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const history = useHistory()
    const isAdmin = useRef()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": username.current.value,
                "email": email.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "bio": bio.current.value,
                "password": password.current.value,
                "admin": isAdmin.current.checked
            }

            return fetch("http://127.0.0.1:8000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("token", res.token)
                        localStorage.setItem("userId", res.id)
            
                        history.push("/login")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="registerTitle">register your account</h1>
                <fieldset>
                    <label htmlFor="firstName">  </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="first name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName">  </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputUsername"> </label>
                    <input ref={username} type="text" name="username" className="form-control" placeholder="username" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"></label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="email" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword">  </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="verify password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="bio"> </label>
                    <textarea ref={bio} name="bio" className="form-control" placeholder="let others know a little bit about you..." />
                </fieldset>
                <div className="field">
                    <label className="label">Admin?</label>
                    <div className="control">
                        <input type="checkbox" ref={isAdmin}></input>
                    </div>
                </div>





                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="buttonSubmit" type="submit">Register</button>
                </fieldset>
            </form>
            <section className="link--register">
                already registered? <Link to="/login">login</Link>
            </section>
        </main>
    )
}

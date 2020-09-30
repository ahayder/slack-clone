import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

function Login() {

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            console.log(result)
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png" alt=""/>
                <h1>Sign In</h1>
                <p>ahayder.slack.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login

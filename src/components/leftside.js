import React, {useState}from 'react';
import ReactDOM from 'react-dom/client'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import logo from '../images/mc.png'
import {BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom"
import Home from './home'
const LeftSide = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const submitForm=()=>{
        console.log('submitted')
    }

    return (
        <div class='leftside'>
            <div class='inputboxsm'>
                <img src={logo} alt='' class='smallimg'></img>
            </div>
            <h1 class='bigtext'>Create an account at Monci!</h1>
            <h3>Signing up is simple! :)<br></br>Just enter your username and password here.</h3>
            <br></br>
            <div class='inputbox'>
                <form>
                    <Form.Group>
                        <Form.Control type="text"
                        placeholder="Username"
                        value={username}
                        name="username"
                        onChange={(e)=>{setUsername(e.target.value)}}/>
                    </Form.Group>
                </form>
            </div>
            <br></br>
            <div class='inputbox'>
            <Form.Group>
                        <Form.Control type="text"
                        placeholder="Password"
                        value={password}
                        name="password"
                        onChange={(e)=>{setPassword(e.target.value)}}/>
                    </Form.Group>
            </div>
            <br></br>
            <div class='inputboxabsolute'>
            <Form.Group>
                        <Button as="sub" variant="dark" onClick={submitForm}>Sign Up!</Button>
                    </Form.Group>
            </div>
        </div>
    )
}

export default LeftSide
import React from 'react';
import Input from "./Input";
import { Button } from '@mui/material';


export default function Login() {
    return (
        <div className='login'>
            <div className='wrapper'>
                <h1>
                    login
                </h1>
                <form action="#">
                    <Input type="email">Email Address</Input>
                    <br />
                    <Input type="password">Password</Input>
                    <br />
                    <br />
                    <Button id='sginUpButton' variant="contained">Login</Button>
                </form>
            </div>
        </div>
    )
}
 
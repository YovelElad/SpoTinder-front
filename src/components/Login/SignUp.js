import React from 'react'
import "./Login.css"
import Input from "./Input";
import { Button } from '@mui/material';
import Select from './Select';
import Box from '@mui/material/Box';
import { PageContext } from '../../Contexts/PageContext';


export default function SignUp() {

    const {setPage} = React.useContext(PageContext);
    const [userName, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [gender, setGender] = React.useState('');


    function saveName(userName) {
        setUserName(userName);
    }

    function saveEmail(email) {
        setEmail(email);
    }

    function savePassword(password) {
        setPassword(password);
    }

    function saveGender(gender) {
        setGender(gender);
    }

    return (
        <div id='signup'>
            <div id="wrapper">
                <h1>
                    Sign Up
                </h1>
                <form action="#">
                    <Input whenChange={saveName} type="text">User Name</Input>
                    <br />
                    <Input whenChange={saveEmail} type="email">Email Address</Input>
                    <br />
                    <Input whenChange={savePassword} type="password">Password</Input>
                    <br />
                    <Select whenChange={saveGender}>Gender</Select>

                    <br />
                    <label class="mt-3" for="exampleInputEmail1">Interested in</label><br /><br />
                    <input type="checkbox" name="genderPreference" class="form-check-input mt-2" id="maleCheckBox" value="male" />
                    <label class="form-check-label mt-1" for="exampleCheck1">Male</label>
                    <input type="checkbox" name="genderPreference" class="form-check-input mt-2" id="femaleCheckBox" value="female" />
                    <label class="form-check-label" for="exampleCheck1">Female</label>
                    <br />
                    <br />
                    <Button  onClick={()=>setPage("spotify-login")} id='sginUpButton' variant="contained">SIGN UP</Button>
                </form>

            </div>
        </div>
    )
}

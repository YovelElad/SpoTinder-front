import React , { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext';
import { Container, Box } from '@mui/material';
import { TextField, RadioGroup, Radio } from '@mui/material';
import { Button, Checkbox, FormGroup, FormControlLabel , FormControl, FormLabel,Switch} from '@mui/material';
import AuthService from "../../services/auth.service";
import authService from '../../services/auth.service';
import { PageContext } from '../../Contexts/PageContext';
// import { UserContext } from '../../Contexts/UserContext';



export default function ProfileForm() {
    const {user, updateUser} = useContext(UserContext);
    const [editMode, setEditMode] = React.useState(false);
    const { setPage } = React.useContext(PageContext);
    const [inputFields, setInputFields] = React.useState({
        name: user.name,
        email: user.email,
        password: '',
        gender: user.gender,
        interestedIn: user.interestedIn,
        role: user.role
    });

    const handleChange = (event) => {
        setInputFields({
            ...inputFields,
            [event.target.name]: event.target.value,
        });
    }

    const handleEditMode = () => {
        setEditMode(!editMode);
        setInputFields({
            name: user.name,
            email: user.email,
            password: '',
            gender: user.gender,
            interestedIn: user.interestedIn
        });
    }

    const handleSwitch = (e) => {
        if(inputFields.role == "PAID"){
            setInputFields({
                ...inputFields,
                role: "FREE"
            }) 
        } else {
            setInputFields({
                ...inputFields,
                role: "PAID"
            }) 
        }
        console.log(e.target.checked);
    }

    const handleChecked = (event, isChecked) => {
        const interestedIn = inputFields.interestedIn;
        if (isChecked) {
            interestedIn.push(event.target.value);
        } else {
            const index = interestedIn.indexOf(event.target.value);
            if (index > -1) {
                interestedIn.splice(index, 1);
            }
        }
        setInputFields({
            ...inputFields,
            interestedIn
        });
    }

    const logOut = (e) => {
        e.preventDefault();
        updateUser(null);
        setPage("home");
        authService.logout().then(res => {
            if (res.status) {
                console.log(res);
            } else {
                console.log(res);
            }
        }).catch(err => {
            console.log(err);
        });


    }
    // console.log(user);
    return (
        <div>
            <Container sx={{ justifyContent: "space-between", display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <h3>Account Settings</h3>
                <Button onClick={handleEditMode}>Edit</Button>
            </Container>
            <Container component="form" >
                <TextField disabled={!editMode} name='name' fullWidth label="Name"  margin="normal" value={inputFields.name} variant="outlined" onChange={handleChange}/>
                <TextField disabled={!editMode} name='email' fullWidth label="Email" margin="normal" value={inputFields.email} type="email" variant="outlined" onChange={handleChange}/>
                <TextField disabled={!editMode} name='password' fullWidth label="Password" margin="normal" type="password" value={inputFields.password} variant="outlined" onChange={handleChange}/>

                <FormControl sx={{marginTop: "10px"}} component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup  row aria-label="gender" name="gender" onChange={handleChange} value={inputFields.gender}>
                        <FormControlLabel disabled={!editMode} value="female" control={<Radio />} label="Female" />
                        <FormControlLabel disabled={!editMode} value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>

                <FormGroup sx={{marginTop: "10px"}}>
                    <FormLabel component="legend">Inrested in</FormLabel>
                    <FormControlLabel disabled={!editMode} name="interestedIn" control={<Checkbox onChange={handleChecked} value={"male"} checked={inputFields.interestedIn.includes("male")} />} label="Men" />
                    <FormControlLabel disabled={!editMode} name="interestedIn" control={<Checkbox onChange={handleChecked} value={"female"} checked={inputFields.interestedIn.includes("female")} />} label="Woman" />
                </FormGroup>

                <FormControlLabel checked={inputFields.role == "PAID"} onChange={handleSwitch}  disabled={!editMode} control={<Switch />} label="Premium" />

                <Container sx={{marginTop: "10px", marginBottom: "15px"}}>
                <Box textAlign='center'>
            <Button sx={{width: "70%"}} onClick={logOut} variant="contained" color="error"  disabled={editMode}>Logout</Button>
             </Box>
                </Container>
            </Container>
            {editMode && 
                <Container sx={{marginTop: "10px", marginBottom: "15px"}}>
                <Box textAlign='center'>
                    <Button sx={{width: "70%"}} disabled={!editMode}  variant="contained" color="secondary" 
                    onClick={() => {
                        setEditMode(false);
                        updateUser({...user , ...inputFields});
                    }}>Save</Button>
                </Box>
                </Container>
            }
        </div>
    )
}

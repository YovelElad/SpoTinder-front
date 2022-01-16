import React from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function Select({whenChange, children}) {
    const [gender,setGender] = React.useState("");
    const handleChange = (event) => {
        setGender(event.target.value);
        whenChange(event.target.value);
    }

    return (
        <div>
            <TextField
                id="standard-select-currency"
                select
                label={children}
                value={gender}
                onChange={handleChange}
                variant="standard"
            >
                    <MenuItem value="Male">
                        Male
                    </MenuItem>
                    <MenuItem value="Female">
                        Female
                    </MenuItem>

            </TextField>
        </div>
    )
}

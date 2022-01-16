import React from 'react';
import TextField from '@mui/material/TextField';

export default function Field({type,whenChange, children}) {
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
        whenChange(event.target.value);
    }
    return (
        <div>
            <TextField onChange={handleChange} type={type} id="standard-basic" label={children} variant="standard" />
        </div>
    )
}

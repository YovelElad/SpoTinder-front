import React from 'react';
import TextField from '@mui/material/TextField';

export default function Field({type,whenChange, children, onChange, value, name}) {
    // const [value, setValue] = React.useState('');
    // const handleChange = (event) => {
    //     setValue(event.target.value);
    //     whenChange(event.target.value);
    // }
    return (
        <div>
            <TextField onChange={onChange} name={name} value={value} type={type} label={children} variant="standard" />
        </div>
    )
}

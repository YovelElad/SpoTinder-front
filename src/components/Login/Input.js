import React from 'react';
import TextField from '@mui/material/TextField';

export default function Field({ userFound, type, whenChange, children, value, name }) {

    const onChange = (e) => {
        whenChange(e.target.value);
    }
    const renderSwitch = (userFound) => {
        switch (userFound) {
            case false:
                return <><TextField
                    error
                    id="standard-error"
                    label="Error"
                    defaultValue="Hello World"
                    variant="standard"
                    onChange={onChange}
                    name={name}
                    type={type}
                    value={value}
                    label={children}
                    className="input"
                /></>

            default:
                return <><TextField className="input" onChange={onChange} name={name} value={value} type={type} label={children} variant="standard" /></>
        }
    }

    return (
        <>
            {renderSwitch(userFound)}

        </>
    )
}

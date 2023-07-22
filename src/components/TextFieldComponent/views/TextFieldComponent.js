import React from 'react';
import { TextField } from '@mui/material';
import { InputBox } from '../../../CommonStyles/InputsBox/InputsBoxStyles';

export const TextFieldComponent = ({ name, register, error, label, required }) => {
    return (
        <InputBox>
            <TextField
                id={name}
                label={label}
                multiline
                rows={4}
                {...register(name, { required: required })}
                error={error}
                sx={{
                    width: '100%'
                }}
            />
        </InputBox>
    );
}

import React from 'react';
import { FormControl, InputLabel } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { InputBox } from '../../../CommonStyles/InputsBox/InputsBoxStyles';

export const InputComponent = ({ name, required, register, error, label }) => {

    return (
        <InputBox>
            <FormControl>
                <InputLabel 
                    htmlFor={name}
                    error={error}
                >
                    {label}
                </InputLabel>
                <OutlinedInput 
                    id={name} 
                    {...register(name, { required: required })} 
                    error={error}
                    label={label}
                />
            </FormControl>
        </InputBox>
    );
};

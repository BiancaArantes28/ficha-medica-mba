import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { InputBox } from '../../../CommonStyles/InputsBox/InputsBoxStyles';

export const RadioComponent = ({ label, children, name, error }) => {
    return (
        <InputBox>
            <FormControl>
                <FormLabel error={error} id="demo-radio-buttons-group-label">{label}</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name={name}
                >
                    {children}
                </RadioGroup>
            </FormControl>
        </InputBox>
    );
}

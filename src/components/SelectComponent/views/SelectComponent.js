import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputBox } from '../../../CommonStyles/InputsBox/InputsBoxStyles';

export const SelectComponent = ({ register, name, label, required, children, error }) => {
    return (
        <InputBox>
            <FormControl fullWidth>
                <InputLabel error={error} id={`${name}-label`}>{label}</InputLabel>
                <Select
                    labelId={`${name}-label`}
                    id={`${name}-select`}
                    label={label}
                    error={error}
                    {...register(name, { required: required })}
                >
                    {children}
                </Select>
            </FormControl>
        </InputBox>
    );
};

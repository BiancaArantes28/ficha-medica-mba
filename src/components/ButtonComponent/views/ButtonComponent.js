import React from 'react';
import Button from '@mui/material/Button';

export const ButtonComponent = ({ type = "button", children, disabled, variant = "contained" }) => {
    return (
        <Button 
            type={type} 
            variant={variant} 
            disabled={disabled}
        >
            {children}
        </Button>
    );
};

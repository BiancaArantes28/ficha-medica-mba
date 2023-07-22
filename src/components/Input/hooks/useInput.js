import React from 'react';
import { useForm } from 'react-hook-form';

export const useInput = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return {
        register,
        handleSubmit,
        watch,
        errors,
        onSubmit,
    }
};

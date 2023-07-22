import React from 'react';
import { useForm } from 'react-hook-form';

export const useFormHealthDataPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return {
        register,
        handleSubmit,
        watch,
        errors,
        onSubmit,
        setValue,
    }
};

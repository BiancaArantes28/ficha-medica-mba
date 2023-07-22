import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const useFormHealthDataPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        navigate('view-health-data');
    };

    return {
        register,
        handleSubmit,
        watch,
        errors,
        onSubmit,
        setValue,
    }
};

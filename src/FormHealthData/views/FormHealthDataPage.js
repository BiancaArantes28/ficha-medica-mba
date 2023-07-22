import React from 'react';
import { Grid, FormControlLabel, Radio, MenuItem, Typography } from '@mui/material';
import { useFormHealthDataPage } from '../hooks/useFormHealthData';
import { BoxForm } from '../styles/FormHeallthDataPageStyles';
import { RadioComponent } from '../../components/RadioComponent/views/RadioComponent';
import { TextFieldComponent } from '../../components/TextFieldComponent/views/TextFieldComponent';
import { SelectComponent } from '../../components/SelectComponent/views/SelectComponent';
import { ButtonComponent } from '../../components/ButtonComponent/views/ButtonComponent';
import { BoxButtonForm } from '../styles/BoxButtonFormStyles';
import { BoxTitle } from '../styles/BoxTitleStyles';

export const FormHealthDataPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        errors,
        onSubmit,
        setValue,
    } = useFormHealthDataPage();

    console.log(watch("bloodType"))
    return (
        <BoxForm>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <BoxTitle>
                            <Typography variant="h5">Por favor, preencha os seus dados de saúde</Typography>
                        </BoxTitle>
                    </Grid>
                    <Grid item xs={3}>
                        {/* <InputComponent 
                            register={register} name='bloodType' 
                            required={true}
                            error={errors.bloodType}
                            label={'Tipo Sanguíneo'}
                        /> */}
                        <SelectComponent
                            register={register}
                            name={'bloodType' }
                            required={true}
                            error={errors.bloodType}
                            label={'Tipo Sanguíneo'}
                            setValue={setValue}
                        >
                            <MenuItem value={'A+'}>A+</MenuItem>
                            <MenuItem value={'A-'}>A-</MenuItem>
                            <MenuItem value={'B+'}>B+</MenuItem>
                            <MenuItem value={'B-'}>B-</MenuItem>
                            <MenuItem value={'AB+'}>AB+</MenuItem>
                            <MenuItem value={'AB-'}>AB-</MenuItem>
                            <MenuItem value={'O+'}>O+</MenuItem>
                            <MenuItem value={'O-'}>O-</MenuItem>
                        </SelectComponent>
                    </Grid>
                    <Grid item xs={3}>
                        <RadioComponent 
                            label={'Está grávida?'}
                            name={'isPregnant'}
                            error={errors.isPregnant}
                            required={true}
                        >
                            <FormControlLabel value="S" control={<Radio {...register("isPregnant", { required: true })} />} label="Sim" />
                            <FormControlLabel value="N" control={<Radio {...register("isPregnant", { required: true })} />} label="Não" />
                        </RadioComponent>
                    </Grid>
                    <Grid item xs={3}>
                        <RadioComponent 
                            label={'Tem alergia a medicamentos?'}
                            name={'hasDrugAllergies'}
                            error={errors.hasDrugAllergies}
                            required={true}
                        >
                            <FormControlLabel value="S" control={<Radio {...register("hasDrugAllergies", { required: true })} />} label="Sim" />
                            <FormControlLabel value="N" control={<Radio {...register("hasDrugAllergies", { required: true })} />} label="Não" />
                        </RadioComponent>
                    </Grid>
                    {watch('hasDrugAllergies') === "S" && (
                        <Grid item xs={3}>
                            <TextFieldComponent 
                                name="drugAllergies"
                                register={register}
                                error={errors.drugAllergies}
                                label={"Quais medicamentos?"}
                                required={true}
                            />
                        </Grid>
                    )}
                    <Grid item xs={4}>
                        <RadioComponent 
                            label={'Possui algum tipo de doença?'}
                            name={'hasAnyIllness'}
                            error={errors.hasAnyIllness}
                            required={true}
                        >
                            <FormControlLabel value="S" control={<Radio {...register("hasAnyIllness", { required: true })} />} label="Sim" />
                            <FormControlLabel value="N" control={<Radio {...register("hasAnyIllness", { required: true })} />} label="Não" />
                        </RadioComponent>
                    </Grid>
                    {watch('hasAnyIllness') === "S" ? (
                        <Grid item xs={4}>
                            <TextFieldComponent 
                                name="whichIllness"
                                register={register}
                                error={errors.whichIllness}
                                label={"Quais doenças?"}
                                required={true}
                            />
                        </Grid>
                    ) : (
                        <Grid item xs={4} />
                    )}

                    <Grid item xs={4} />
                    <Grid item xs={4}>
                        <RadioComponent 
                            label={'Faz uso de medicação contínua?'}
                            name={'useContinuousMedication'}
                            error={errors.useContinuousMedication}
                            required={true}
                        >
                            <FormControlLabel value="S" control={<Radio {...register("useContinuousMedication", { required: true })} />} label="Sim" />
                            <FormControlLabel value="N" control={<Radio {...register("useContinuousMedication", { required: true })} />} label="Não" />
                        </RadioComponent>
                    </Grid>
                    {watch('useContinuousMedication') === "S" ? (
                        <Grid item xs={6}>
                            <TextFieldComponent 
                                name="whichMedications"
                                register={register}
                                error={errors.whichMedications}
                                label={"Quais medicamentos de uso contínuo?"}
                                required={true}
                            />
                        </Grid>
                    ) : (
                        <Grid item xs={6} />
                    )}
                    <Grid item xs={2} />
                    <Grid item xs={12}>
                        <BoxButtonForm>
                            <ButtonComponent type="submit">
                                Enviar
                            </ButtonComponent>
                        </BoxButtonForm>
                    </Grid>
                </Grid>
            </form>
        </BoxForm>
    );
};

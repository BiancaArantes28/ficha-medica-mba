import { styled } from '@mui/material/styles';

export const UserDataBox = styled('div')({
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
});

export const AvatarBox = styled('div')({
    width: '80px',
    float: 'left',
});

export const NameBox = styled('div')({
    gridArea: 'name',
});

export const AgeBox = styled('div')({
    gridArea: 'Age',
});

export const GenderBox = styled('div')({
    gridArea: 'gender',
});

export const EmailBox = styled('div')({
    gridArea: 'email',
});

export const GridContainer = styled('div')`
    display: grid;
    grid-template-areas:
        "name name name name name name"
        "Age Age Age gender gender gender"
        "email email email email email email";
    gap: 10px;
    padding: 10px;

`
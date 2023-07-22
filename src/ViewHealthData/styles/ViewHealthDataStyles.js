import { styled } from '@mui/material/styles';

export const ViewHealthDataBox = styled('div')(({ theme }) => ({
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        marginLeft: '0',
        marginRight: '0',
    }
}));

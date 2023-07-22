import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TableComponent } from '../../components/TableComponent/views/TableComponent';
import { UserData } from './components/UserData/UserData';
import { ViewHealthDataBox } from '../styles/ViewHealthDataStyles';

export const ViewHealthDataPage = () => {

    return (
        <ViewHealthDataBox>
            <UserData />
        </ViewHealthDataBox>
    );
};

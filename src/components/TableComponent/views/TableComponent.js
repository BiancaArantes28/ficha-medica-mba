import React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

export const TableComponent = ({ tableHead, tableBody, width = '100%' }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: width }}>
                {tableHead}
                {tableBody}
            </Table>
        </TableContainer>
    );
};

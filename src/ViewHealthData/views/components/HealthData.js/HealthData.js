import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const HealthData = () => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: '100%' }} aria-label="spanning table">
                    <TableBody>
                        <TableRow>
                            <TableCell align="left">Tipo Sanguíneo</TableCell>
                            <TableCell align="left">O+</TableCell>
                            <TableCell align="left">Está grávida?</TableCell>
                            <TableCell align="left">Não</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Alergia a médicamentos?</TableCell>
                            <TableCell align="left">Sim</TableCell>
                            <TableCell align="left">Quais:</TableCell>
                            <TableCell align="left">Dipirona, Paracetamol</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Doenças?</TableCell>
                            <TableCell align="left" colSpan={3}>Asma, Epilepsia</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Medicações de uso contínuo?</TableCell>
                            <TableCell align="left" colSpan={3}>Seretide, Topiramato</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ContactsStyle } from '../../../styles/ContactsStyles';

export const Contacts = () => {
    return (
        <ContactsStyle>
            <Typography variant="h5">
                Contatos:
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: '100%' }} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Nome</TableCell>
                            <TableCell align="center">Grau de parentesco</TableCell>
                            <TableCell align="center">Telefone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">Carla Silva</TableCell>
                            <TableCell align="center">Mãe</TableCell>
                            <TableCell align="center">(11) 99999-9999</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">João Silva</TableCell>
                            <TableCell align="center">Marido</TableCell>
                            <TableCell align="center">(11) 99999-9999</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </ContactsStyle>
    );
};

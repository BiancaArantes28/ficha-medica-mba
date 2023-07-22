import React from 'react';
import Avatar from '@mui/material/Avatar';
import { GridContainer, AvatarBox, NameBox, AgeBox, GenderBox, EmailBox, UserDataBox } from '../../../styles/UserDataStyles';

export const UserData = () => {
    return (
        <>
            <AvatarBox>
                <Avatar sx={{ 
                    bgColor: 'red',
                    width: '80px',
                    height: '80px',
                }}
                
                >
                    MS
                </Avatar>
            </AvatarBox>
            <GridContainer>
                
                <NameBox>
                    Nome: Maria da Silva
                </NameBox>
                <AgeBox>
                    Idade: 28 anos
                </AgeBox>
                <GenderBox>
                    Sexo: Feminino
                </GenderBox>
                <EmailBox>
                    Email: mariasilva@gmail.com
                </EmailBox>
            </GridContainer>
        </>
    );
};

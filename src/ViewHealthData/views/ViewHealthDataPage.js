import React from 'react';
import { UserData } from './components/UserData/UserData';
import { ViewHealthDataBox } from '../styles/ViewHealthDataStyles';
import { HealthData } from './components/HealthData.js/HealthData';
import { Contacts } from './components/Contacts/Contacts';

export const ViewHealthDataPage = () => {

    return (
        <ViewHealthDataBox>
            <UserData />
            <HealthData />
            <Contacts />
        </ViewHealthDataBox>
    );
};

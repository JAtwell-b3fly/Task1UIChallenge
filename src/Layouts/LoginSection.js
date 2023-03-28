import React from 'react';
import {Button,View,Center,Left} from 'native-base';
import LoginForm from '../components/LoginForm';
import Login from '../components/LoginButton';
import CreateANewAccount from '../components/CreateANewAccountButton';
import ForgotPassword from '../components/ForgotPasswordLink';

export default function LoginSection () {
    return(
        <View>
            <Center>
            <LoginForm />
            <Login />
            <CreateANewAccount />
            <ForgotPassword alignSelf="flex-start"/>
            </Center>
        </View>    
    );
};

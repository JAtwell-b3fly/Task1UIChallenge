import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

//import the external files
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import RegisterButton from './components/RegisterButton';
import AlreadyHaveAccountLink from './components/AlreadyHaveAccountLink';
import Avatar from './components/Avatar';
import Logo from './assets/logo';

const RegistrationLayout = () => {
    return(
        <Container>
            <Content contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1 }}>
                    <VStack style={{ flex: 1, justifyContent: 'center' }}>
                        <RegistrationForm />
                        <CreateAccountButton />
                        <HStack style={{ justifyContent: 'center', marginTop: 16 }}>
                            <AlreadyHaveAccountLink />
                        </HStack>
                    </VStack>
                </View>
            </Content>
        </Container>
    )
}

export default RegistrationLayout;
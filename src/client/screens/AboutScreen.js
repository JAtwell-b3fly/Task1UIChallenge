import React from "react";
import { useNavigation } from '@react-navigation/native';
import {View,VStack,HStack,Container,Center,Text} from "native-base";

import { Group9Layout } from "../../Screens/Layouts/Group9Layout";
import { HeaderLayout } from "../../components/Layouts/Header";
import Logo from './client/components/common/logo';
import AppName from './client/components/Layouts/appName';
import AppVersion from './client/components/Layouts/appVersion';
import AppDescription from './client/components/Layouts/appDescription';
import DeveloperInfo from './client/components/Layouts/developerInfo';

const AboutScreen = () => {
    const navigation = useNavigation();

    // handle button press to navigate to About Screen
    const handleBackButtonPress = () => {
        navigation.navigate('SettingsScreen.js');
    };

    return(
        <Group9Layout applogoheader={<HeaderLayout />}
                        appname={<AppName />}
                        appversion={<AppVersion />}
                        appdescription={<AppDescription />}
                        developerinformation={<DeveloperInfo />}
        />
    )
}

export default AboutScreen;
import React from 'react';
import {VStack,FormControl} from 'native-base';
import {CInput} from './common/Input';
import {CButton} from './common/Button';
import {CLink} from './common/Link';
import LFLayout from './Layouts/LoginForm';
const LoginForm = () => {
    return 
        (
            <LFLayout
                form = {
                    <FormControl >
                        
                        <FormControl.Label>Email Address</FormControl.Label>
                        <CInput  placeHolder="Email Address" />
                        <FormControl.Label>Password</FormControl.Label>
                        <CInput type="Password"  placeHolder="Password" />
                    </FormControl>
                }
                buttons = {
                        <VStack>
                            <CButton Text = {"Login"}/>
                            <CButton size = {"sm"} Text = {"Create Acount"}/>
                        </VStack>
                }

                link = {<CLink onPress = {}>Forgot Password?</CLink>}
            />
        );
  }

  export default LoginForm;


  /*import React from 'react';
  import { View, Container, Content, Button, Text, HStack, VStack } from 'native-base';
import input from './subcomponents'; //import a form input from the sub-components
import styles from './styles'; //import the external stylesheet

const LoginForm = () => {
    return (
        <View style={styles.formContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeHolder="Enter your email address"
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeHolder="Enter your password"
                secureTextEntry
            />
        </View>
    )
}

export default LoginForm; */
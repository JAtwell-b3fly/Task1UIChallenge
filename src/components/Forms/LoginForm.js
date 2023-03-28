import React from 'react';
import {Box, Stack,ScrollView,FormControl,Input,Divider} from 'native-base';

const LoginForm = () => {
    return <ScrollView w="100%">
        <Stack space={2.5} alignSelf="center" px="4" safeArea mt="4" w={{
            base: "100%",
            md: "25%"
        }}>
            <Box alignItems="center">
                <Box w="100%" maxWidth="300px">
                    <FormControl isRequired>
                        <Stack mx="4">
                        <FormControl.Label>Email Address</FormControl.Label>
                        <Input type="email address" defaultValue="example@gmail.com" placeholder="example@gmail.com" />
                        <FormControl.HelperText>
                            Must be a valid email address.
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            A valid email address is required.
                        </FormControl.ErrorMessage>
                        </Stack>
                    </FormControl>
                    <Divider />
                </Box>

                <Box>
                    <FormControl isRequired>
                        <Stack mx="4">
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" defaultValue="12345" placeholder="password" />
                        <FormControl.HelperText>
                            Must be atleast 8 characters.
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Atleast 8 characters are required.
                        </FormControl.ErrorMessage>
                        </Stack>
                    </FormControl>
                </Box>
            </Box>
        </Stack>
    </ScrollView>
  };

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
                placeholder="Enter your email address"
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
            />
        </View>
    )
}

export default LoginForm; */
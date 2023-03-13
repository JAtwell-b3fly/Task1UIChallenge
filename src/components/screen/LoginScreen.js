import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Button, Text, Icon } from 'native-base';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // handle login logic here
  };

  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
        </View>
        <View style={styles.avatarContainer}>
          <Image source={require('../assets/avatar.png')} style={styles.avatar} resizeMode="contain" />
        </View>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Icon active name="mail" />
            <Input placeholder="Email Address" value={email} onChangeText={setEmail} />
          </Item>
          <Item floatingLabel>
            <Icon active name="lock" />
            <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
          </Item>
          <Button block style={styles.loginButton} onPress={handleLogin}>
            <Text>LOGIN</Text>
          </Button>
        </Form>
        <Button block style={styles.createButton}>
          <Text>Create a new account</Text>
        </Button>
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordLink}>Forgot password?</Text>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: '80%',
  },
  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: '30%',
  },
  form: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  loginButton: {
    marginTop: 20,
  },
  createButton: {
    marginVertical: 20,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  forgotPasswordLink: {
    color: '#007aff',
  },
});

export default LoginScreen;

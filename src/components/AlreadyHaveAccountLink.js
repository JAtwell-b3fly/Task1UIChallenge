import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import Button from './components/AlreadyHaveAccountLink';

const AlreadyHaveAccountLink = () => {
    return(
        <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLinkText}>Already have an account? Login here</Text>
        </TouchableOpacity>
    )
}

export default AlreadyHaveAccountLink;
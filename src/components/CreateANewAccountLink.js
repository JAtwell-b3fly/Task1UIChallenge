import React from 'react';
import { View, Container, Content, Button, Text, HStack, VStack } from 'native-base';
import button from './subcomponents'; //import a button from the sub-components
import styles from './styles'; //import the external stylesheet

const CreateANewAccountLink = () => {
    return(
        <TouchableOpacity style={styles.newAccountButton} onPress={handleNewAccount}>
            <Text style={styles.buttonText}>Create a New Account</Text>
        </TouchableOpacity>
    )
}

export default CreateANewAccountLink;
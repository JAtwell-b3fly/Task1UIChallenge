import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import input from './subcomponents/input'; //import the form input sub-component

const RegistrationForm = () => {
    return(
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
            />
            <View style={styles.genderContainer}>
                <Text style={styles.genderLabel}>Gender:</Text>
                <View style={styles.radioContainer}>
                    <TouchableOpacity
                        style={gender === 'male' ? styles.radioChecked : styles.radio}
                        onPress={() => setGender('male')}
                    >
                    <Text style={styles.radioText}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={gender === 'female' ? styles.radioChecked : styles.radio}
                        onPress={() => setGender('female')}
                    >
                    <Text style={styles.radioText}>Female</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default RegistrationForm;
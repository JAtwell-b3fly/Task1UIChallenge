import React, { useState } from 'react';
import { FormControl,Link } from 'react-native';

import CInput from './common/Input'; //import the common input component 
import CLabel from './common/Label';
import RFLayout from './Layouts/RegistrationForm';
import CButton from './common/Button';
import RadioBtn from './common/RadioButton';
import CLink from './common/Link';
const RegistrationForm = () => {
    return(

        <RFLayout
            form = {
                <FormControl>
                    <FormControl.Label>Email Address</FormControl.Label>
                    <CInput placeHolder = {"Email Address"}/>
                    <FormControl.Label>Email Address</FormControl.Label>
                    <CInput type = {"password"} placeHolder = {"Password"}/>
                    <CInput placeHolder = {"First Name"}/>
                    <CInput placeHolder = {"Last Name"}/>
                </FormControl>

            }

            gender = {
                        <RadioBtn.Group name = {"gender"}> 
                            <RadioBtn my = {1} value = {"Male"}>Male</RadioBtn>
                            <RadioBtn my = {1} value = {"Female"}>Female</RadioBtn>
                        </RadioBtn.Group>
            }

            button = {<CButton Text = {"Sign Up"}/>}

            link = {<CLink onPress = {}>Already Have an Account?</CLink>}
        />
        
    );
}

export default RegistrationForm;
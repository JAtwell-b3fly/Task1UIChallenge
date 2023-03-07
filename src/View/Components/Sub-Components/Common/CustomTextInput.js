import React from 'react';
import { Input } from 'native-base';

const MyTextInput = ({ label, value, onChangeText }) => {
  return (
    <Input
      placeholder={label}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

export default MyTextInput;
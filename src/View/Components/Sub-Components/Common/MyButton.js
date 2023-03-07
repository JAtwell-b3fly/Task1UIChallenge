import React from "react";
import { Button, Box } from "native-base";

const Example = () => {
  return <Box alignItems="center">
      <Button onPress={() => console.log('log')} >Crate New Account</Button>
    </Box>;
};
export default Example;
    

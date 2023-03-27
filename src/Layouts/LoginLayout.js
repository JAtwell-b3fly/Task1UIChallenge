import {View,Box,Text} from "native-base";

<View>
  //The screen outline
  <Box width = "100%" height = "100%" bgColor={"lightBlue.100"} safeArea >

    <Vstack flex={1}>

      //Sections into which the screen it divided
      //3 Sections: Header Section, Avatar/Icon section, Login Section

      //Header Section containing Logo
      <Box flex={1} width = "100%" bg={"yellow.500"}>
        <Text>The Logo</Text>
      </Box>

      //Avatar Section containing Avatar
      <Box flex={1} width = "100%" bgColor={"lightBlue.100"}>
        <Text>The Avatar</Text>
      </Box>

      //Login Section containing Login Form, Login Button, Create Account Button, Forgot Password Link
      <Box flex={8} width = "100%" bg={"red.900"}>
        <Text>The Login Section</Text>
      </Box>

    </Vstack>

  </Box>
</View>
import { Container, VStack, HStack, Box, View } from 'native-base';

export const Group1Layout = ({ applogoheader, avatar, loginSection, registrationSection }) => {
  const isLoginScreen = !!loginSection; //function to determine if the layout is used for the loginscreen or not
  return (
    <Container p={4}>
      <VStack space={4}>
        <Box>{applogoheader}</Box>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {avatar}
        </View>
        <Box>
          {isLoginScreen ? ( //is the layout used for the login screen
            <HStack space={4} justifyContent="center">
              <VStack space={4}>{loginSection}</VStack> //if yes add the login secion
            </HStack>
          ) : (
            <HStack space={4} justifyContent="center">
              <VStack space={4}>{registrationSection}</VStack> //if no add the registration section
            </HStack>
          )}
        </Box>
      </VStack>
    </Container>
  );
};

import { Container, VStack, Heading, Text, Box,Center,Spacer } from 'native-base';

export const Group9Layout = ({ applogoheader, appname, appversion, appdescription, developerinformation }) => {
  return (
    <Container>
      <VStack space={6} alignItems="center">
        <Box>
          {applogoheader} //the logo of the app will appear in the header of the screen
        </Box>
        <Box>
          <Center>
            <Heading>{appname}</Heading> //the name of the application should appear here // center align
          </Center>
        </Box>
        <Box>
          <Text textAlign="left">{appversion}</Text> //the version of the application should appear here //left align
          <Spacer />
          <Text textAlign="left">{appdescription}</Text> //the description of the application //left align
          <Text textAlign="left">{developerinformation}</Text> //the developer information //left align
        </Box>
      </VStack>
    </Container>
  );
};

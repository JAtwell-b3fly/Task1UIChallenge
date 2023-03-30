import { Container, VStack, HStack, Box, Heading,Center } from 'native-base';

export const Group5Layout = ({ headercomponent2, screennavcomponent, headerlabel, accountsettingsform, paymentsettingsform }) => {
  return (
    <Container>
      <VStack height="100%">
        <Box>
          {headercomponent2} // new header component specifically for all the settings screens
        </Box>

        <Box>
          {screennavcomponent} //screen navigation component containing the buttons to navigate to all the other settings screens
        </Box>

        <Box>
          <Center>
            <Heading>
              {headerlabel} //header label for the screens: Account Settings, Payment Settings
            </Heading> 
          </Center>
        </Box>

        <Box>
          <Container height="100%" overflow="scroll">
            <VStack>
              <Box>
                {accountsettingsform || paymentsettingsform} //Account Settings Form or the Payment Settings form
              </Box>
            </VStack>
          </Container>
        </Box>
      </VStack>
    </Container>
);
}
import React from 'react';
import { Container, VStack, HStack, Center, Heading, Text, Box} from 'native-base';

const Group8Layout = ({ applogoheader, avatarcomponent, setting1button, setting2button, setting3button, setting4button, setting5button, setting6button, setting7button, setting8button, setting9button,setting10button, setting11button, setting12button, setting13button, setting14button }) => {
  return (
    <Container>
      <VStack>

        <Box>
            {applogoheader}
        </Box>

        <Box>
            <Center>
                {avatarcomponent}
            </Center>
        </Box>

    //Account
        <Box>
            <Heading>
                 Account
            </Heading>
        </Box>

        <Box>
            //Edit Profile OR Account Settings
            <HStack space={2} alignItems="center">
                <Box>
                    <Text>
                        Edit Profile OR Account Settings
                    </Text>
                    {setting1button} //Nav button to Account Settings Screen
                </Box>
            </HStack>

    //Privacy And Security
        <Box>
            <Heading>
                Privacy And Security
            </Heading>
        </Box>
            //Two Step Factor Authentication
            <HStack space={2} alignItems="center">
                <Box>
                    <Text>
                        Two Step Factor Authentication
                    </Text>
                    {setting2button} //Nav button to start Two Step Factor Authentication 
                </Box>
            </HStack>

            //Security Questions
            <HStack space={2} alignItems="center">
                <Box>
                    <Text>
                        Security Questions
                    </Text>
                    {setting3button} //Nav button to Security Questions Screen
                </Box>
            </HStack>
        </Box>

    //Notifications
        <Box>
            <Heading>
                Notifications
            </Heading>
        </Box>

        <Box>
            //Notifications
            <HStack space={2} alignItems="center">
                <Box>
                    <Text>
                        Notifications
                    </Text>
                    {setting4button} //Radio Buttons or Dropdown button //Email OR Push OR SMS
                </Box>
            </HStack>

            //App Notifications
            <HStack space={2} alignItems="center">
                <Box>
                    <Text>
                        App Notifications
                    </Text>
                    {setting5button} //Radio Buttons or Dropdown button //Email OR Push OR SMS
                </Box>
            </HStack>
        </Box>

    //Language And Localisation
        <Box>
            <Heading>
                Language And Localisation
            </Heading>
        </Box>

        <Box>
            //Preferred Language
            <HStack space={2} alignItems="center">
                <Box>
                    <Text>
                        Preferred Language
                    </Text>
                    {setting6button} //Toggle button or Dropdown button for Preferred Language
                </Box>
            </HStack>

            <HStack space={2} alignItems="center">
                <Box>
                    <Text>
                        Preferred Country
                    </Text>
                    {setting7button} //Toggle button or Dropdown button for Preferred Country
                </Box>
            </HStack>
        </Box>

    //Appearance
        <Box>
            <Heading>
                Appearance
            </Heading>
        </Box>

        <Box>
            //Theme
            <HStack>
                <Box>
                    <Text>
                        Theme
                    </Text>
                    {setting8button} //Toggle Button(Dark Mode or Light Mode)
                </Box>
            </HStack>

            //Font Size
            <HStack>
                <Box>
                    <Text>
                        Font Size
                    </Text>
                    {setting9button} //Toggle Button or Dropdown Button
                </Box>
            </HStack>
        </Box>

    //Payment
        <Box>
            <Heading>
                Payment
            </Heading>
        </Box>

        <Box>

            //Payment Method Settings
            <HStack space={2} alignItems="center">
                <Box>
                    <Text>
                        Payment Method Settings
                    </Text>
                    {setting10button} //Nav button to Payment Method Settings Screen
                </Box>
            </HStack>
        </Box>

    //Help And Support
        <Box>
            <Heading>
                Help And Support
            </Heading>
        </Box>

        <Box>

            //FAQs
            <HStack space={2} alignItems="center">
                <Box>
                    <Text>
                        FAQs
                    </Text>
                    {setting11button} //Nav button to FAQs in Customer Support Screen
                </Box>
            </HStack>

            //Contact Us
            <HStack space={2} alignItems="center">
                <Box>
                    <Text>
                        Contact Us
                    </Text>
                    {setting12button} //Nav Button to Contact Us Screen OR Copy Contact functionality
                </Box>
            </HStack>
        </Box>

    //About
        <Box>
            <Heading>
                {setting13button} //About Nav Button to About Screen
            </Heading>
        </Box>

    //Logout
        <Box>
            <Heading>
                {setting14button} //Logout Confirmation Popup
            </Heading>
        </Box>
      </VStack>
    </Container>
  );
};

export default Group8Layout;

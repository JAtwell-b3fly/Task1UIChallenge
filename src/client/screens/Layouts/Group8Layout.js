import React from 'react';
import { Container, VStack, HStack, Center, Heading, Text, Box} from 'native-base';

const Group8Layout = ({ applogoheader, avatarcomponent, headinglabel1, setting1, setting2, headinglabel2, setting3, setting4, headinglabel3, headinglabel4, headinglabel5, headinglabel6, setting5, setting6, setting7, setting8, setting9, setting1button, setting2button, setting3button, setting4button, setting5button, setting6button, setting7button, setting8button, setting9button }) => {
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
                {headinglabel1} //Account
            </Heading>
        </Box>

        <Box>
            //Edit Profile OR Account Settings
            <HStack space={2} alignItems="center">
                <Box>
                    <Text>
                        {setting1} //Edit Profile OR Account Settings
                    </Text>
                    {setting1button} //Nav button
                </Box>
            </HStack>

            //Privacy
            <HStack space={2} alignItems="center">
                <Box>
                    <Text>
                        {setting2} //Privacy
                    </Text>
                    {setting2button} //Nav button
                </Box>
            </HStack>
        </Box>

    //Notifications
        <Box>
            <Heading>
                {headinglabel2} //Notifications
            </Heading>
        </Box>

        <Box>
            //Notifications
            <HStack space={2} alignItems="center">
                <Box>
                    <Text>
                        {setting3} //Notifications
                    </Text>
                    {setting3button} //Toggle Button OR Radio Controls
                </Box>
            </HStack>

            //App Notifications
            <HStack space={2} alignItems="center">
                <Box>
                    <Text>
                        {setting4} //App Notifications
                    </Text>
                    {setting4button} //Toggle Button OR Radio Controls
                </Box>
            </HStack>
        </Box>

    //Help And Support
        <Box>
            <Heading>
                {headinglabel3} //Help And Support
            </Heading>
        </Box>

        <Box>
            //Language
            <HStack space={2} alignItems="center">
                <Box>
                    <Text>
                        {setting5} //Language
                    </Text>
                    {setting5button} //Dropdown Button or Toggle Button
                </Box>
            </HStack>

            //Country
            <HStack space={2} alignItems="center">
                <Box>
                    <Text>
                        {setting6} //Country
                    </Text>
                    {setting6button} //Toggle Button or Radio Control or Dropdown Button
                </Box>
            </HStack>

            //Contact Us
            <HStack>
                <Box>
                    <Text>
                        {setting7} //Contact Us
                    </Text>
                    {setting7button} //Nav Button or Copy Contact functionality
                </Box>
            </HStack>
        </Box>

    //Appearance
        <Box>
            <Heading>
                {headinglabel4} //Appearance
            </Heading>
        </Box>

        <Box>
            //Theme
            <HStack>
                <Box>
                    <Text>
                        {setting8} //Theme
                    </Text>
                    {setting8button} //Toggle Button(Dark Mode or Light Mode)
                </Box>
            </HStack>

            //Font Size
            <HStack>
                <Box>
                    <Text>
                        {setting9} //Font Size
                    </Text>
                    {setting9button} //Toggle Button or Dropdown Button
                </Box>
            </HStack>
        </Box>

    //About
        <Box>
            <Heading>
                {headinglabel5} //About Nav Button
            </Heading>
        </Box>

    //Logout
        <Box>
            <Heading>
                {headinglabel6} //Logout Confirmation Popup
            </Heading>
        </Box>
      </VStack>
    </Container>
  );
};

export default Group8Layout;

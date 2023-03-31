import { Container, VStack, HStack, Box, Heading, Text,Center } from 'native-base';

export const Group11Layout = ({ headercomponent2, screennavcomponent, headinglabel, customersupportformviewcomponent, feedbackformsection, FAQssection }) => {
  return (
    <Container>
      <VStack space={4} alignItems="center">
        <Box>
          {headercomponent2} // The header component used in all the setting screens 
        </Box>
        <Box>
          {screennavcomponent} //screen navigation component containing the buttons that navigate the user to the other settings screens 
        </Box>
        <Box>
          <Center>
            <Heading>{headinglabel}</Heading> // Heading Label: Customer Support 
          </Center>
        </Box>
        <Box>
          {customersupportformviewcomponent} // The Customer Support Form View 
        </Box>
        <Box>
          <Center>
            <Heading>{headinglabel}</Heading> // Heading Label: Feedback Form 
          </Center>
        </Box>
        <Box>
          {feedbackformsection}// The feedback form section containing the feedback form and the submit button 
        </Box>
        <Box>
          <Center>
            <Heading>{headinglabel}</Heading> // Heading Label: FAQs 
          </Center>
        </Box>
        <Box>
          {FAQssection} // FAQs section component containing the FAQs, scroll bar and the icon buttons to open a dialog box containing more information on the question selected
        </Box>
      </VStack>
    </Container>
  );
};

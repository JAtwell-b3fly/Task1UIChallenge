import { Container, VStack, HStack, Box, Heading, Text, Center } from 'native-base';

export const Group10Layout = ({headercomponent2, screennavcomponent, headerlabel, refundpolicycomponent, sectionlabel, refundformsection}) => {
  return (
    <Container>
      <VStack space={4} alignItems="center">
        <Box>
          {headercomponent2}
        </Box>
        <Box>
          {screennavcomponent}
        </Box>
        <Box>
          <Center>
            <Heading size="lg">{headerlabel}</Heading> //Header Label: Return and Refund Policy
          </Center>
        </Box>
        <Box>
          {refundpolicycomponent} //The full complete Refund Policy
        </Box>
        <Spacer />
        <Box>
          <Center>
            <Text fontSize="xl">{sectionlabel}</Text> //Section Label: Return and Refund Request Form
          </Center>
          <Box w="100%" p={4} borderWidth={1} borderColor="gray.200">
            {refundformsection}
          </Box>
        </Box>
      </VStack>
    </Container>
  )
};

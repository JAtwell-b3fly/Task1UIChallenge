import { Container, VStack, HStack, Box } from 'react-bootstrap';

export const Group4Layout = ({ headercomponent, backbutton, headinglabel, cartsection, calculationsection, continueshoppingbutton, proceedbutton }) => {

return (
  <Container fluid>
    <VStack spacing={4} alignItems="stretch">
      <Box>{headercomponent}</Box>
      <Box>
        <HStack justifyContent="space-between">
          <Box>{backbutton}</Box> //back icon button//left aligned
          <Box>{headinglabel}</Box> //Heading Label: Shopping Cart //center aligned
        </HStack>
      </Box>
      <Box>
        <Box className="text-center">{headinglabel}</Box>
          {cartsection}
      </Box>
      <Box>{calculationsection}</Box>
      <Box>
        <HStack justifyContent="space-between">
          <Box>{continueshoppingbutton}</Box>//left algined
          <Box>{proceedbutton}</Box>//right aligned
        </HStack>
      </Box>
    </VStack>
  </Container>
);
};
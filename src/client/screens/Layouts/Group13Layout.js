import { Container, VStack, HStack, Box, Text, Center } from 'native-base';

export const Group13Layout = ({headercomponent,backbutton,headinglabel,sectionlabel,shippingformsection,shippingformviewsection,billingaddressformsection,billingaddressformviewsection,paymentmethodformsection,paymentmethodformviewsection,orderconfirmationcalculationsection}) => {

const isOrderConfirmation = !!orderconfirmationcalculationsection; // determine if the layout is for Order Confirmation screen

  return (
    <Container>
      <VStack space={4}>
        <Box>
          {headercomponent}
        </Box>
        <HStack space={4} alignItems="center" justifyContent="space-between">
          {isOrderConfirmation ? null : backbutton}
          <Box>
            <Center>
              <Text textAlign="center">{headinglabel}</Text> //Checkout or Order Confirmation
            </Center>
          </Box>
          <Box width={isOrderConfirmation ? '20%' : 'auto'} />
        </HStack>
        <Box>
          <Text>{sectionlabel}</Text> //Shipping Information
        </Box>
        <Box>
          {isOrderConfirmation ? shippingformviewsection : shippingformsection}
        </Box>
        <Box>
          <Text>{sectionlabel}</Text> //Billing Information
        </Box>
        <Box>
          {isOrderConfirmation ? billingaddressformviewsection : billingaddressformsection}
        </Box>
        <Box>
          <Text>{sectionlabel}</Text> //Payment Method
        </Box>
        <Box>
          {isOrderConfirmation ? paymentmethodformviewsection : paymentmethodformsection}
        </Box>
        {isOrderConfirmation &&
          <Box>
            <Text>{sectionlabel}</Text> //Order Summary
          </Box>
        }
        {isOrderConfirmation &&
          <Box>
            {orderconfirmationcalculationsection}
          </Box>
        }
      </VStack>
    </Container>
  );
}
import { Box, Center, Container, Heading, HStack, Spacer, Text, VStack,Heading } from 'native-base';

export const Group3Layout = ({ headerComponent, productGallery, productName, productDescription, productPrice, addToCart, addToWishlist, modeReviewAndAvgRating, ratingsAndReviewFormSection, safetyInformationSection, backButton, headinglabel, catalogboxsection }) => {
  return (
    <Container bg="lightBlue.100" safeArea flex={1}>
      <VStack flex={1} alignItems="center" pt={6}>
        <Box width="100%" flex={1}>
          {headerComponent}
        </Box>

        <Box width="100%" flex={1} flexDirection="row" alignItems="center" justifyContent="space-between" px={4}>
        <HStack py={3} px={4}>
            <Spacer />
            {backButton}
            {addToWishlist}
            {addToCart}
          </HStack>
          <Center flex={1}>
            {productGallery}
          </Center>
          <Spacer />
        </Box>

        <Box width="100%" flex={7}>
        <Heading>{productName}</Heading>
        </Box>
        <Box width="100%" flex={2} p={4}>
          <HStack flex={2}>
          <Box mb={2}>
            {modeReviewAndAvgRating} //left aligned
          </Box>
          <Text fontSize="xl" fontWeight="bold" mb={2}>{productPrice}</Text> //right aligned
          </HStack>
          <Text mb={2}>{productDescription}</Text>
          <Box mb={2}>
            {safetyInformationSection}
          </Box>
          <Spacer />
          <Box mb={2}>
            {ratingsAndReviewFormSection}
          </Box>
        </Box>
        <Spacer />
        <Box width = "100%" p={4}>
          <Box mb={2}>
            <Center>
              <Heading>{headinglabel}</Heading> //Heading Label:Related Products
            </Center>
          </Box>
          <Box mb={2}>
            {catalogboxsection}
          </Box>
        </Box>
      </VStack>
    </Container>
);
};
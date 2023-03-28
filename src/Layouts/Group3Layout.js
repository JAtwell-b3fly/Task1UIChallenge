import { Box, Center, Grid, Heading, HStack, Spacer, Text, VStack } from 'native-base';

export const Group3Layout = ({ headerComponent, productGallery, productName, productDescription, productPrice, addToCart, addToWishlist, modeReviewAndAvgRating, ratingsAndReviewFormSection, safetyInformationSection, backButton,headinglabel, catalogboxsection }) => {
  return (
    <Box bg="lightBlue.100" safeArea flex={1}>
      <VStack flex={1} alignItems="center" pt={6}>
        <Box width="100%" flex={1}>
          {headerComponent}
        </Box>
        <Box width="100%" flex={1} flexDirection="row" alignItems="center" justifyContent="space-between" px={4}>
          {backButton} //back button to navigate back to the product listing screen or home screen
          <Heading>{productName}</Heading> //title of the product
          <Spacer />
        </Box>
        <Box width="100%" flex={7}>
          <Center flex={1}>
            {productGallery} //image or images of the product
          </Center>
          <HStack py={2} px={4}>
            <Spacer />
            {addToWishlist} //icon button to add the product to the wishlist
            {addToCart} //icon button to add the product to the cart
          </HStack>
        </Box>
        <Box width="100%" flex={2} p={4}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>{productPrice}</Text> //price of the product
          <Text mb={2}>{productDescription}</Text> //the description of the product
          <Box mb={2}>
            {safetyInformationSection} //the safety information of the product in either link or text format
          </Box>
          <Box mb={2}>
            {modeReviewAndAvgRating} //pull data of mode review and average rating of the product from database
          </Box>
          <Box mb={2}>
            {ratingsAndReviewFormSection} // rating and review form for user to submit their own data about the product to the database
          </Box>
        </Box>
        <Box mb={2}>
            {headinglabel} //headinglabel: Related Products
        </Box>
        <Box mb={2}>
            {catalogboxsection} //catalogbox section to display the related products
        </Box>
      </VStack>
    </Box>
  );
}

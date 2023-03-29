import { Box, VStack, HStack, View } from 'native-base';

export const Group2Layout = ({ headercomponent, categoryfilter, welcomesection, headinglabel, catalogboxsection, tilessection }) => {
    const isHomeScreen = welcomesection !== undefined;
    const isProductListingScreen = catalogboxsection !== undefined && !isHomeScreen;
    const isWishlistScreen = !isHomeScreen && !isProductListingScreen;

    return (
    <View>
      <Box bg="lightBlue.100" safeArea flex={1}>
        <Box>{/* Spacer */}</Box>
        <VStack flex={1} space={4} alignItems="center">
          <Box>{headercomponent}</Box>
          <Box w="100%" px={4}>
            <HStack space={2} alignItems="center">
                {isHomeScreen && categoryfilter && <Box flex={1}>{categoryfilter}</Box>} // category filter for home screen only
                {isHomeScreen && welcomesection && <Box flex={5}>{welcomesection}</Box>} // welcome message for home screen only
            </HStack>
          </Box>
          <Box w="100%" px={4}>
            {/* {headinglabel && (
              <Box>
                <Box py={2} borderBottomWidth={2}>
                  {headinglabel}
                </Box>
              </Box>
            )}  */}
            {catalogboxsection}
          </Box>
          { isHomeScreen && tilessection && (
            <Box w="100%" px={4}>
              <HStack space={4} alignItems="center">
                {tilessection}
              </HStack>
            </Box>
          )}
        </VStack>
      </Box>
    </View>
  );
};

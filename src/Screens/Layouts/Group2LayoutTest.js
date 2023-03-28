import { Box, VStack, HStack, View } from 'native-base';

export const Group2Layout = ({ headercomponent, categoryfilter, welcomesection, headinglabel, catalogboxsection, tilessection }) => {
  return (
    <View>
      <Box bg="lightBlue.100" safeArea flex={1}>
        <Box>{/* Spacer */}</Box>
        <VStack flex={1} space={4} alignItems="center">
          <Box>{headercomponent}</Box>
          <Box w="100%" px={4}>
            <HStack space={2} alignItems="center">
              {categoryfilter && <Box flex={1}>{categoryfilter}</Box>}
              {welcomesection && <Box flex={5}>{welcomesection}</Box>}
            </HStack>
          </Box>
          <Box w="100%" px={4}>
            {headinglabel && (
              <Box>
                <Box py={2} borderBottomWidth={2}>
                  {headinglabel}
                </Box>
              </Box>
            )}
            {catalogboxsection}
          </Box>
          {tilessection && (
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

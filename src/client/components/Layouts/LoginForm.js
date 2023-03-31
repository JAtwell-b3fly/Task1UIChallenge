import {Box, VStack} from 'native-base';

export const LFLayout = (props) =>
{
    const {form,buttons,link}
    return(
        <VStack space={2.5} alignSelf="center" px="4" safeArea mt="4" w={{
            base: "100%",
            md: "25%"
        }}>
            <Box w="100%" alignItems="center">
                {form}
            </Box>
            <Box w="100%" alignItems="center">
                {buttons}
            </Box>
            <Box w="100%" alignItems="flex-start">
                {link}
            </Box>
        </VStack>
  
    );
}
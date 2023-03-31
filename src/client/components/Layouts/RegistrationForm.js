import {VStack,HStack,Box,Stack} from 'native-base';

export const RFLayout = ({form,link,gender}) =>
{
    return (
        <Box w = "100%" h = "100%">
        <VStack>
            <Box w = "100%" h = "100%" alignItems = {"center"}>
                <VStack w = "50%" >
                    {form}
                    <Stack flexDir = {"row"} space = {2}>
                        {gender}
                    </Stack>
                    {button}
                    {link}
                </VStack>

            </Box>
            
        </VStack>
    </Box>

    );
    }    
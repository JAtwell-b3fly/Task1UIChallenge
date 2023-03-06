import react from 'react';
import { Box, Heading,HStack } from 'native-base';
export default function Logo()
{
    return(
            <Box pt = "1" >
                <HStack>
                <Heading variant="title1" size = "lg">CHEMI-</Heading>
                <Heading variant="title2" size = "lg">CLEAN</Heading>
                </HStack>
            
            </Box>
    );
}

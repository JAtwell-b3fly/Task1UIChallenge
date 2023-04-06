import React from 'react';
import {VStack,Box,HStack,Center,Heading,Text,View} from 'native-base';

export default function Group6Layout ({headercomponent2,headerlabel,orderfilterform,orderview}) {
    return(
        <Container>
            <VStack>
                <Box>
                    {headercomponent2}
                </Box>
                <Box>
                    <Center>
                        {headerlabel}
                    </Center>
                </Box>
                <Box>
                    {orderfilterform}
                </Box>
                <Box>
                    <View>
                        {orderview}
                    </View>
                </Box>
            </VStack>
        </Container>
    );
};
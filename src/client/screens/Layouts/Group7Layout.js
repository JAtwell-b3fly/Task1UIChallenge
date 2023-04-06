import React from "react";
import {VStack,Container,HStack,Box,View,Center,Heading,Text} from 'native-base';
import { onStartShouldSetResponderCapture } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";

export default function Group7Layout (headercomponent2,headerlabel1,headerlabel2,headerlabel3,FAQheading,FAQresponse,OrderStatusDetails,OrderDetails,screenType){
    return(
        <Container>
            <VStack>
                <Box>
                    {headercomponent2}
                </Box>
                
                {screenType === "FAQ" ? (
                    <>
                        <Box>
                            <Box>
                                <Center>
                                    <Heading>
                                        {headerlabel1}
                                    </Heading>
                                </Center>
                            </Box>
                            <Box>
                                {FAQheading}
                            </Box>
                            <Box>
                                {FAQresponse}
                            </Box>
                        </Box>
                    </>
                ) : screenType === "OrderStatus" ? (
                    <>
                        <Box>
                            <Box>
                                <Center>
                                    <Heading>
                                        {headerlabel2}
                                    </Heading>
                                </Center>
                            </Box>
                            <Box>
                                {OrderStatusDetails}
                            </Box>
                        </Box>
                    </>
                ): (
                    <>
                        <Box>
                            <Box>
                                <Center>
                                    <Heading>
                                        {headerlabel3 }
                                    </Heading>
                                </Center>
                            </Box>
                            <Box>
                                {OrderDetails}
                            </Box>
                        -</Box>
                    </>
                )}
            </VStack>
        </Container>
    );
};
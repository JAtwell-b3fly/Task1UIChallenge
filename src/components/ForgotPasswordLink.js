import React from 'react';
import { View, Container, Content, Button, Text, HStack, VStack } from 'native-base';
import { Button } from "native-base";

const ForgotPassword = () => {
    return <ScrollView showsVerticalScrollIndicator={false} px="3">
        <VStack w="100%" space={4} px="2" mt="4" alignItems="center" justifyContent="center">
          {
          /* Solid */
        }
          <Heading size="md">Link</Heading>

        {
            /* Link */
        }
            <Stack mb="2.5" mt="1.5" direction={{
                base: "column",
                md: "row"
            }} space={2} mx={{
                base: "auto",
                md: "0"
            }}>
                <Button size="sm" variant="link">
                    Forgot Password?
                </Button>
            </Stack>
            <Divider w="100%" />
        </VStack>
    </ScrollView>;
};
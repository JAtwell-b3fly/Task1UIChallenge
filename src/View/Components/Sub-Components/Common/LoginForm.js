   // code for form
   import { Box, Text, Heading, VStack, FormControl, Input,Center, Link, Button, HStack, NativeBaseProvider } from "native-base";
   import * as React from "react";
   import  Mybutton from "./View/Components/Sub-Components/Mybutton";
   import  LoginButton from "./View/Components/Sub-Components/loginButton";
   
   const Example = () => {
     return <Center w="100%">
         <Box safeArea p="2" py="8" w="90%" maxW="290">
           {/* <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
           color: "warmGray.50"
         }}>
             Welcome
           </Heading>
           <Heading mt="1" _dark={{
           color: "warmGray.200"
         }} color="coolGray.600" fontWeight="medium" size="md">
             Sign in to continue!
           </Heading> */}
   
           <VStack space={3} mt="5">
             <FormControl>
               <FormControl.Label>Email Address</FormControl.Label>
               <Input />
               </FormControl>
             <FormControl>
               <FormControl.Label>Password* </FormControl.Label>
               <Input type="password" />
             
             </FormControl>
            <LoginButton/>
   
             <Mybutton/>
             <HStack>
   
             <Link  href="https://nativebase.io" _text={{
               fontSize: "xs",
               fontWeight: "500",
               color: "indigo.500"
             }} alignSelf="flex-end" mt="1">
                 Forget Password?
               </Link>
             </HStack>
            
             {/* <HStack mt="6" justifyContent="center">
               <Text fontSize="sm" color="coolGray.600" _dark={{
               color: "warmGray.200"
             }}>
                 I'm a new user.{" "}
               </Text>
               <Link  _text={{
               color: "indigo.500",
               fontWeight: "medium",
               fontSize: "sm"
             }} href="https://nativebase.io">
                 Sign Up
               </Link>
             </HStack> */}
           </VStack>
         </Box>
       </Center>;
   };
   export default Example; 
   
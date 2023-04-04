import {HStack,VStack, Stack,Box} from 'native-base';

export const SecondHeaderLayout = ({firstName,lastName,home,iconButtons,accountIcon}) => {

  return(
    <VStack flex = {1} space = {3} > 
          <Stack flex = {6}  direction = "row" >
            <Box justifyContent={"center"}  flex = {7}  direction = "column">
              {firstName}
              {lastName}
            </Box>
            <Box justifyContent={"center"} flex = {3}>
              {accountIcon}
            </Box>
          
          </Stack>
          
          <HStack flex = {4} alignItems={"center"} justifyContent = "space-between">
            {home}
          
          <HStack alignItems={"center"} >
            
          {iconButtons}
          </HStack>
         
      </HStack>

        </VStack>
  );

}
        

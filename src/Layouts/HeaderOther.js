import {HStack,VStack, Stack} from 'native-base';

export const SecondHeaderLayout = ({userName,home,iconButtons}) => {

  return(
    <VStack flex = {1} space = {3}> 
          <Stack flex = {8}  direction = "row" justifyContent={"center"}>
            {userName}
            
          </Stack>
          
          <HStack flex = {2} alignItems={"center"} justifyContent = "space-between">
            {home}
          
          <HStack alignItems={"center"} >
            
          {iconButtons}
          </HStack>
         
      </HStack>

        </VStack>
  );

}
        

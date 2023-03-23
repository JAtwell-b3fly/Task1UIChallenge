import {HStack,Box,VStack, Stack} from 'native-base';

export const HeaderLayout = ({logo,menu,iconButtons,searchBar}) => {

  return(
    <VStack flex = {1} space = {3}> 
          <Stack flex = {5}  direction = "row" justifyContent={"center"}>
            {logo}
            
          </Stack>
          
          <HStack flex = {2} alignItems={"center"} justifyContent = "space-between">
            {menu}
          
          <HStack alignItems={"center"} >
            
          {iconButtons}
          </HStack>
         
       
        
      </HStack>
            
          <Box borderColor={'#68B360'}  borderWidth = {"0.5"} flex = {3} alignItems={"center"}  bgColor= "#E2FDE0" >
            
            {searchBar}
            
            
          </Box>  

        </VStack>
  );

}
        

import {HStack,Box,VStack, Stack} from 'native-base';

export const HeaderLayout = ({logo,menu,iconButtons,searchBar}) => {

  return(
    <VStack flex = {1} > 
          <Stack flex = {2}  direction = "row" justifyContent={"center"} >
            {logo}
            
          </Stack>
          
          <HStack flex = {2} alignItems={"center"} justifyContent = "space-between">
            {menu}
          
          <HStack alignItems={"center"} >
            
          {iconButtons}
          </HStack>
         
       
        
      </HStack>
            
          <Box borderColor={'#68B360'}  borderWidth = {"0.5"} flex = {2} alignItems={"center"}  bgColor= "#E2FDE0" >
            
            {searchBar}
            
            
          </Box>  

        </VStack>
  );

}
        

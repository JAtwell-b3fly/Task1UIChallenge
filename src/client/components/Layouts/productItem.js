import { View, HStack,VStack,Box } from "native-base"
export const PILayout = ({Image,Title,Description,Rating,CartButton,WishListButton,Price}) =>
{
    return (
    <View  position={"relative"} ml = {2} mr = {1} mb = {3}  mt = {8} width = {"150px"} height = {"200px"} borderRadius={"lg"} borderWidth = {0.5}>
        <VStack m = {1} flex = {1} >
            <Box alignItems = {"center"}  position={"absolute"} bottom = {"170px"}  width = {"100%"} height = {"55px"} >
                {Image}
            </Box>
            <Box mt = "30px"> 
                <Box alignItems = {"center"} width = {"100%"} height = {"40px"}  >
                {Title}
                </Box>
                <Box  width = {"100%"} height = {"60px"}  >
                {Description}
                 </Box>
                <Box width = {"50%"}  height = {"10px"} >
                {Rating}
                </Box>
                <Box width = {"100%"} height = {"20px"} >
                {Price}
                </Box>
                <HStack width = {"100%"}  height = {"25px"}>
                    <Box  w = "50%" >
                        {CartButton}
                    </Box>
                    <Box  w = "50%" >
                        {WishListButton}
                    </Box>
            </HStack>

            </Box>
            
        </VStack>
    </View>
    );
}
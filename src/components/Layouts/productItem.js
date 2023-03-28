import { View,HStack,VStack,Box } from "native-base"
export const PILayout = ({Image,Title,Description,Rating,CartButton,WishListButton,Price}) =>
{
    <View width={"200px"} borderRadius={"lg"} borderWidth = {0.5}>
        <VStack flex = {1}>
            <Box  flex = {3} bgColor = {"white"}>
                {Image}
            </Box>
            <Box flex = {0.5} bgColor = {"grey.800"}>
                {Title}
            </Box>
            <Box flex = {2.5} bgColor = {"brown.800"}>
                {Description}
            </Box>
            <Box flex = {1.5} bgColor = {"yellow.800"}>
                {Rating}
            </Box>
            <Box flex = {0.5} bgColor = {"green.800"}>
                {Price}
            </Box>
            <HStack flex = {2} >
                <Box bgColor = {"blue.800"}>
                    {CartButton}
                </Box>
                <Box bgColor = {"red.800"}>
                    {WishListButton}
                </Box>
            </HStack>
        </VStack>
    </View>
}
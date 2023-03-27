import { Heading,VStack,Box,ScrollView } from "native-base";

export const ProductList = (title) =>
{
    <VStack flex = {1} justifyContent={"center"}>
        <Box w = "70%"flex = {2} pt = {1} bgColor = "black">
            <Heading size = {24} color={"white"}>{title}</Heading>
        </Box>
    </VStack>
}
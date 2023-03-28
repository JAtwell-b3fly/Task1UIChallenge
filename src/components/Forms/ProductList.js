import { Heading,VStack,Box,ScrollView, HStack } from "native-base";

const products = [];

function getProducts()
{

}

function createItems()
{
    
}

export const ProductList = ({title}) =>
{
    return(
    <VStack flex = {1} spacing = {1} >
        <HStack flex = {0.6}>
            <Box p = "2" mx = "auto"  bgColor = "black"   >
                <Heading mx = "auto"  width = "100%" size = {"sm"} color={"white"}>{title}</Heading>
            </Box>

        </HStack>
        <Box m = "2" flex = {9}  borderRadius={"2xl"} borderWidth = {0.5}>
            <ScrollView flex = {1} pagingEnabled = {true}>


            </ScrollView>

        </Box>


        
    </VStack>
    );
}
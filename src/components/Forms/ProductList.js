import { Heading,VStack,Box,ScrollView, HStack } from "native-base";
import { ProductItem } from "./ProductItem";
const products = [];

function getProducts() // fetches and parses data from API end-point into products array
{
    
}

/* const testProduct = {
    Image:'https://images.unsplash.com/photo-1622614835318-7926e29f013c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    Title:'Anti Bacterial Hand Soap',
    Rating:3,
    Description:'',
    Price:'R'+30.00


}; */
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
            <ScrollView flex = {1} pagingEnabled = {true} flexDir = {"row"}>

                {/* {
                    products.map(product =>(

                        <ProductItem key = {product.id} item={product}/>
                    ))
                } */}
               <ProductItem /* item={testProduct} *//>
            </ScrollView>

        </Box>


        
    </VStack>
    );
}
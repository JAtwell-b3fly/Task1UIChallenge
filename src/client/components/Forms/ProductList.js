import { Heading,VStack,Box,ScrollView, HStack } from "native-base";
import { ProductItem } from "./ProductItem";
const products = [];
let testProduct = {
    priceAmount : 30.00,
    Image:"https://images.unsplash.com/photo-1622614835318-7926e29f013c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    Title:"Anti Bacterial Hand Soap",
    Rating:3.5,
    Description:'Anti-bacterial handsoap used for cleansing hands',
    get Price()
    {
        return 'R'+this.priceAmount;
    }


}; 
function getProducts() // fetches and parses data from API end-point into products array
{
    for(let i = 0;i<=2;i++)
    {
        products[i] = testProduct;
       
    }
}


export const ProductList = ({title}) =>
{
    getProducts();
    return(
    <VStack flex = {1} spacing = {1} >
        <HStack flex = {0.6}>
            <Box p = {1} my="auto" mx = "auto"  bgColor = "black"   >
                <Heading  mx = "auto"  width = "100%" size = {"sm"} color={"white"}>{title}</Heading>
            </Box>

        </HStack>
        <Box m = "2" flex = {9}  borderRadius={"2xl"} borderWidth = {1.3}>
            <ScrollView  flex = {1} pagingEnabled  = {true} width = "100%" flexDir = {"row"} flexWrap = {"wrap"} >

                 {
                    products.map(product =>(

                        <ProductItem key = {product.id} item={product}/>
                    ))
                } 
               
            </ScrollView>

        </Box>


        
    </VStack>
    );
}
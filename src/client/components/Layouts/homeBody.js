import { Box,VStack } from "native-base";
export const BodyLayout = ({categories,products,buttons}) =>
{
    return(

        <VStack flex = {1}>
                    <Box  width = "100%" flex = {0.8}>
                        {categories}
                    </Box>

                    <Box  width = "100%" flex = {7.5} >
                        {products}
                    </Box>
                    
                    <Box  width = "100%" flex = {1.5} bgColor = "yellow.200">
                        {buttons}
                    </Box>
                    

                </VStack>
    );

}
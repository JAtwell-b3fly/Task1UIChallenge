import { Box,VStack } from "native-base";
export const BodyLayout = ({categories,products,buttons}) =>
{
    return(

        <VStack flex = {1}>
                    <Box  width = "100%" flex = {1}>
                        {categories}
                    </Box>

                    <Box  width = "100%" flex = {8} bgColor = "green.200">
                        {products}
                    </Box>
                    
                    <Box  width = "100%" flex = {1} bgColor = "yellow.200">
                        {buttons}
                    </Box>
                    

                </VStack>
    );

}
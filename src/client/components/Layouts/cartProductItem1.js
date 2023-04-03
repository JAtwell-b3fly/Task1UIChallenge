import { VStack,Box,HStack } from "native-base";

export const CartPILayout1 = (props) =>
{
 const {Image,Title,Quantity,Desc,Price,deleteBtn} = props
    return (
        <HStack w = "90%" h = "50%" borderWidth = {1} borderRadius = "xl" >
            <HStack borderWidth = {1} w = {"80%"}flex = {1}>
                <Box w = {"30%"}>
                    {Image}
                </Box>
                <VStack w = "70%" flex = {1}>
                    <Box h = "30%" w = "100%">
                    {Title}
                    </Box>
                    <Box h = "50%" w = "100%">
                        {Descs}
                    </Box>
                    <Box h = "20%" w = "100%">
                        <HStack JustifyContent = {"space-between"}>
                            {Quanity}
                            {Price}
                        </HStack>
                    </Box>
                </VStack>

            </HStack>
            <Box alignSelf = {"flex-end"} w = {"20%"}>
                {deleteBtn}
            </Box>

        </HStack>
    );
    
}
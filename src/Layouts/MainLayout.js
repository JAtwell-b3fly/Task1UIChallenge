
import {View,Box,VStack} from "native-base";

export const MainLayout = ({header,body}) => {

return (
    <View>
            <Box  width = "100%" height = "100%" bgColor={"lightBlue.100"} safeArea  >
                <VStack flex = {1}>
                    <Box  width = "100%" flex = {1.5}>
                        {header}
                    </Box>

                    <Box  width = "100%" flex = {9}>
                        {body}
                    </Box>

                    

                </VStack>

                
            </Box >

    

        </View>

);

}




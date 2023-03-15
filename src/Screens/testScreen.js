import {View,Box,Text,VStack} from "native-base";
import HeaderComponent from "../components/MainHeader";

export default function TestScreen()
{

    return(
        <View>
            <Box width = "100%" height="100%" bgColor={"lightBlue.100"} safeArea  >
                <VStack>
                    <Box  width = "100%" height="15%">
                        <HeaderComponent/>
                    </Box>

                    <Box width = "100%" height="85%" >
                        <Text>BODY SPACE</Text>
                    </Box>

                    

                </VStack>

                
            </Box >

    

        </View>

    );
}
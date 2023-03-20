import { View, Box, Button, VStack } from "native-base";
import HeaderComponent from "../components/MainHeader";
import MInput from "../components/subcomponents/common/Input";
import MButton from "../components/subcomponents/common/Button";
import { FontAwesome5 } from '@expo/vector-icons';

export default function TestScreen() {

    return (
        <View>
            <Box width="100%" height="100%" bgColor={"lightBlue.100"} safeArea  >
                <VStack flex={1} >
                    <Box width="100%" flex={2}>
                        <HeaderComponent />
                    </Box>

                    <Box width="100%" flex={8} >

                    </Box>



                </VStack>


            </Box >



        </View>

    );
}
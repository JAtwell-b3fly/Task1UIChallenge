import { View, Box, Button, VStack, Center } from "native-base";
import MInput from "../components/common/Input";
import MButton from "../components/common/Button";
import { FontAwesome5 } from '@expo/vector-icons';
import LoginSection from "../Layouts/LoginSection";
import Login from "../components/LoginButton";
import CreateANewAccount from "../components/CreateANewAccountButton";
import ForgotPassword from "../components/ForgotPasswordLink";

export default function LoginTest() {

    return (
        <View>
        //The screen outline
            <Box width = "100%" height = "100%" bgColor={"lightBlue.100"} safeArea >

                <Vstack flex={1}>

                //Sections into which the screen it divided
                //3 Sections: Header Section, Avatar/Icon section, Login Section

                    //Header Section containing Logo
                    <Box flex={1} width = "100%" bg={"yellow.500"}>
                        <Text>The Logo</Text>
                    </Box>

                    //Avatar Section containing Avatar
                    <Box flex={1} width = "100%" bgColor={"lightBlue.100"}>
                        <Text>The Avatar</Text>
                    </Box>

                    //Login Section containing Login Form, Login Button, Create Account Button, Forgot Password Link
                    <Box flex={8} width = "100%" bg={"red.900"}>
                        <LoginSection />
                    </Box>

                </Vstack>

            </Box>
        </View>
    );
};
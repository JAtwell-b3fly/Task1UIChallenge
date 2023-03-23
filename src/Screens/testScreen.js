import { MainLayout } from "../Layouts/MainLayout";
import HeaderComponent from "../components/MainHeader";
import { Text } from "native-base";
export default function TestScreen()
{

    return(
        <MainLayout 
            header={<HeaderComponent/>}
            body = {<Text>Body Space</Text>}
        
        />
        );
}
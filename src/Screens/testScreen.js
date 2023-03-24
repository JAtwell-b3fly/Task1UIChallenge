import { MainLayout } from "../Layouts/MainLayout";
import HeaderComponent from "../components/MainHeader";
import OtherHeader from "../components/secondHeader";
import { Text } from "native-base";
export default function TestScreen()
{

    return(
        <MainLayout 
            header={<OtherHeader/>}
            body = {<Text>Body Space</Text>}
        
        />
        );
}
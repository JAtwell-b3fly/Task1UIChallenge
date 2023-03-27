import { MainLayout } from "../Layouts/MainLayout";
import HeaderComponent from "../components/MainHeader";
import { Categories } from "../components/categoryFilter";
import { BodyLayout } from "../Layouts/homeBody";
import { Text } from "native-base";
export default function TestScreen()
{

    return(
        <MainLayout 
            header={<HeaderComponent/>}
            body = {<BodyLayout categories={<Categories/>}/>}
        
        />
        );
}
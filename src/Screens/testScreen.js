import HeaderComponent from "../components/forms/MainHeader";
import { MainLayout } from "./Layouts/MainLayout";
import { BodyLayout } from "../components/Layouts/homeBody";
export default function TestScreen()
{

    return(
            <MainLayout header={<HeaderComponent/>}
                        body = {<BodyLayout/>}
            />
        );
}
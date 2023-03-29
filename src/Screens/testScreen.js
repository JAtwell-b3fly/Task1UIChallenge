import { MainLayout } from "./Layouts/MainLayout";
import HeaderComponent from "../components/Forms/MainHeader";
import { BodyLayout } from "../components/Layouts/homeBody";
import { Categories } from "../components/Forms/categoryFilter";
import { ProductList } from "../components/Forms/ProductList";
import { Group2Layout } from "./Layouts/Group2LayoutTest";
export default function TestScreen()
{

    return(
             /* <Group2Layout
                headercomponent={<HeaderComponent/>}
                categoryfilter = {<Categories/>}
                catalogboxsection = {<ProductList  />}
            />  */

            
           <MainLayout header = {<HeaderComponent/>} body = {<BodyLayout categories={<Categories/>} products = {<ProductList title={"Recommended Products"}/>}/>}/>

        
        );
}
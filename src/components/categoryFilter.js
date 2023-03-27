import { HStack,ScrollView,Button,Icon} from "native-base";
import { TouchableOpacity,Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function generateCategories()
    {
        const categoryButtons = [];
        for(let i = 0;i<=9;i++)
        {
           const catButton = <TouchableOpacity style = {{
            backgroundColor: '#F2F8F8',
            borderStyle:'solid',
            borderWidth:0.5,
            justifyContent: 'center',
            marginLeft:2,
            marginRight:2,
            paddingRight:2,
            paddingLeft:2,
            borderRadius:8
            
           }} key = {i+1}><Text>Category {i}</Text></TouchableOpacity>
           categoryButtons.push(catButton);
        }

        return categoryButtons;
    }
export const Categories = () =>
{
    const categories = generateCategories();
    return (
        
         <HStack m = "2.5" flex = {1} >
            <Button bgColor={'white'} width = {"10%"} m = "1" ><Icon as={Ionicons} name="filter"  size = {6}/></Button>
            <ScrollView width = {"90%"} m = "0.3" horizontal = {true}>
                {categories}
            </ScrollView>

        </HStack> 
    );
}
import {IconButton,Icon} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export const CIconButton = ({myIcon,onPress}) =>
{
    return(

        <IconButton  icon={<Icon as={MaterialCommunityIcons} name={myIcon} />} borderRadius="full"/>
    );
    
}
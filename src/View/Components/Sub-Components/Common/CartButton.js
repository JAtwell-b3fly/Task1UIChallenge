import { IconButton,Box,Icon } from "native-base";
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function cartButton()
{
    return(
        <Box>
        <IconButton borderColor="black"  icon={<Icon as={MaterialCommunityIcons} name="cart-variant"  />} borderRadius="full"
            _icon = {{
                size:"lg"

            }}
         />

    </Box>


    );

    
}
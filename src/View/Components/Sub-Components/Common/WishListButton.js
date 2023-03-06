import { Entypo } from '@expo/vector-icons';
import { Box,IconButton,Icon } from 'native-base';

export default function wishListButton()
{
    return(
        <Box>
            <IconButton   icon={<Icon as={Entypo} name="heart"  />} borderRadius="full" _icon = {{
                color:"red.400",
                size:"lg",

            }} />
        </Box>
    );
}
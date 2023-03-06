import { Ionicons } from '@expo/vector-icons';
import { IconButton,Box,Icon } from "native-base";

export default function accountButton()
{
    return(

        <Box>
        <IconButton borderColor="black"  icon={<Icon as={Ionicons} name="person-circle-outline"  />} borderRadius="full"
            _icon = {{
                size:"8"

            }}
        />

    </Box>
    );
}
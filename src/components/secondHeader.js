import { SecondHeaderLayout } from "../Layouts/HeaderOther";
import { Heading,IconButton,Icon,Circle } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
export default function OtherHeader()
{
    return(
    <SecondHeaderLayout 
    
        firstName =
            {

               <Heading mx = "auto" size = "xl">FIRST NAME</Heading>
            }
        lastName =
            {

               <Heading mx = "auto" size = "xl">LAST NAME</Heading>
            }
        accountIcon = 
            {
                <Circle mx = "auto" size = "md" bg = "gray.300"><Icon as={<Ionicons name="person-circle-outline" />} size={"5xl"} /></Circle>
            }
        home = 
            {
                <IconButton  icon={<Icon as={FontAwesome} name="home" />} borderRadius="full"
        _icon={{
          color: "black",
          size: "xl"
        }}
        _pressed={{
          bg: "black:alpha.20"
        }} />
            }
        iconButtons = 
            {
                <><IconButton icon={<Icon as={Feather} name="log-out" />} borderRadius="full"
                _icon={{
                    color: "black",
                    size: "xl"
                }}
                _pressed={{
                    bg: "black:alpha.20"
                }} /><IconButton icon={<Icon as={Feather} name="help-circle" />} borderRadius="full"
                    _icon={{
                        color: "black",
                        size: "xl"
                    }}
                    _pressed={{
                        bg: "black:alpha.20"
                    }} /></>
        
            }

    />
    );
};
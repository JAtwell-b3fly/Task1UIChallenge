import { Text } from "react-native";

export const CLabel = ({Label,numberOfLines,ellipsizeMode,textAlign}) =>
{

    return(
        <Text textAlign = {textAlign} ellipsizeMode={ellipsizeMode} numberOfLines = {numberOfLines} adjustsFontSizeToFit = {true}>{Label}</Text>


        );
}
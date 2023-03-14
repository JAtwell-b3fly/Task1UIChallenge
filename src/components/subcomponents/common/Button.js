import { Button } from "native-base";
import React from "react";

 const MButton = (props)=>{
    const {RightIcon,LeftIcon,Text,isPressed,Size,PressedButtonProps,onPress, id} = props;

    return(

        <Button RightIcon = {RightIcon} LeftIcon = {LeftIcon} onPress = {onPress}
            isPressed = {isPressed} Size = {Size} _pressed = {PressedButtonProps} testID = {id}
        
        
        >{Text}</Button>
    );
}

MButton.props = 
{
    Size:"md",
    Text:"Click Me!"

};

export default Button;

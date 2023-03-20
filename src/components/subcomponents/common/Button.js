import { Button } from "native-base";
import React from "react";

 const MButton = (props)=>{
    const {bgColor,justify,m,buttonVariant,RightIcon,LeftIcon,Text,isPressed,Size,PressedButtonProps,onPress, id} = props;

    return(

        <Button bgColor={bgColor} justifyContent = {justify} m = {m} variant = {buttonVariant} RightIcon = {RightIcon} LeftIcon = {LeftIcon} onPress = {onPress}
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

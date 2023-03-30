import { Input } from "native-base";

export const MInput = (props) => {
    const {bgColor,flex,h,my,onChange,width,variant,placeHolder,size,type,isReadOnly,isInvalid,inputLeft,inputRight,isRequired,inFocusColor,isInvalidColor} = props
    return (

        <Input flex = {flex} h={h} my = {my} onChangeText={onChange} w = {width} placeholder = {placeHolder} size = {size} type = {type} isReadOnly = {isReadOnly} isInvalid = {isInvalid} 
        
            InputLeftElement = {inputLeft} InputRightElement = {inputRight} isRequired = {isRequired} focusOutlineColor = {inFocusColor} invalidOutlineColor = {isInvalidColor}
            variant = {variant} bgColor = {bgColor}/>
        
        
    );
}
export default MInput;
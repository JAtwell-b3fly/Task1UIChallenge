import { Input } from "native-base";

const MInput = (props) => {
    const {width,placeHolder,size,type,isReadOnly,isInvalid,inputLeft,inputRight,isRequired,inFocusColor,isInvalidColor} = props
    return (

        <Input w = {width} placeholder = {placeHolder} size = {size} type = {type} isReadOnly = {isReadOnly} isInvalid = {isInvalid} 
        
            leftElement = {inputLeft} rightElement = {inputRight} isRequired = {isRequired} focusOutlineColor = {inFocusColor} invalidOutlineColor = {isInvalidColor}/>
        
        
    );
}
export default MInput;
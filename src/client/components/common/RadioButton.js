import {Radio} from 'native-base';

 const RadioBtn = (props) =>
{
    const {value,size,isDisabled,colorScheme,my,children} = props
    return (
        <Radio value = {value} size = {size} isDisabled = {isDisabled} colorScheme = {colorScheme} my = {my}>
            {children}
        </Radio>

    );
}
const Group = (props) =>
{
    const {defaultValue,size,name,accessibilityLabel,children,onChange} = props
    return(

            <Radio.Group defaultValue = {defaultValue} size = {size} name = {name} 
            onChange = {onChange} accessibilityLabel = {accessibilityLabel}  >
                {children}
            </Radio.Group>
    );
}

RadioBtn.Group = Group;
export default RadioBtn;

import {Link} from 'native-base';

export const CLink = (props) =>
{
    const {children,href,onPress} = props
    return (
        <Link onPress = {onPress} href = {href}>  
            {children}
        </Link>
    );
}
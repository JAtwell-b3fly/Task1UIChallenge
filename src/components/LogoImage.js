import {Image} from 'native-base';
import {Logo} from './assets/logo.png';

function LogoImage() {
    return 
        <Center>
            <Image source={Logo} alt="Alternate Text" size="xl" />
        </Center>;
};

 
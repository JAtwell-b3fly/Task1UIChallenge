import {Image} from 'native-base';
import {Logo} from './assets/logo.png';

function LogoImage() {
    return 
    <Center
    style={{
      flex: 1,
      height: "20%",
      width: "100%",
    }}
    >
    <Image
      source={require("./src/client/assets/logo.png")}
      alt="Alternate Text"
      size="xl"
    />
    </Center>
};

export default LogoImage;
 
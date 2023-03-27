
import { NativeBaseProvider} from 'native-base';
import Navigation from './src/navigationContainer';
import LoginTest from './src/Screens/LoginTestScreen';
export default function App() {
  return (
    <NativeBaseProvider>
      
      <Navigation/>
         
    </NativeBaseProvider>
    
  );
}

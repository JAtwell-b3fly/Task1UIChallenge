
import { NativeBaseProvider} from 'native-base';
import Navigation from './src/navigationContainer';
export default function App() {
  return (
    <NativeBaseProvider>
      
      <Navigation/>
         
    </NativeBaseProvider>
    
  );
}

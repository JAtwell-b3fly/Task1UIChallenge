import { Button, Box } from "native-base";

const Example = () => {
  return <Box alignItems="center">
      <Button onPress={() => console.log('')} size="md" >Login</Button>
    </Box>;
};
export default Example;
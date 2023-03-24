import { Button } from "native-base";

const CreateANewAccount = () => {
    return <ScrollView showsVerticalScrollIndicator={false} px="3">
        <VStack w="100%" space={4} px="2" mt="4" alignItems="center" justifyContent="center">
          {
          /* Solid */
        }
          <Heading size="md">Solid</Heading>
          <Stack mb="2.5" mt="1.5" direction={{
          base: "column",
          md: "row"
        }} space={2} mx={{
          base: "auto",
          md: "0"
        }}>
            <Button size="sm">Create A New Account</Button>
            </Stack>

        <Divider w="100%" />
        </VStack>
    </ScrollView>;
};

export default CreateANewAccount;
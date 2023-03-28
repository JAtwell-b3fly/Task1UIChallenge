import { Container, Grid, Row, Col, View } from 'native-base';

export const Group5Layout = ({ headercomponent2, screennavcomponent, headerlabel, accountsettingsform, paymentsettingsform }) => {
    return (
      <View>
        <Grid templateRows="auto 1fr" height="100%">
          <Grid.Item rowSpan={1}>
            {headercomponent2} //new header component specifically for all the settings screens
          </Grid.Item>
          <Grid.Item rowSpan={1}>
            {screennavcomponent} //screen navigation component containing the buttons to navigate to all the other settings screens
          </Grid.Item>
          <Grid.Item rowSpan={1}>
            {headerlabel} //header label for the screens: Account Settings, Payment Settings
          </Grid.Item>
          <Grid.Item rowSpan={1}>
            <Container height="100%" overflow="scroll">
              <Grid templateColumns="repeat(1, 1fr)" gap={6}>
                <Grid.Item>
                  {accountsettingsform | paymentsettingsform} //Account Settings Form or the Payment Settings form
                </Grid.Item>
              </Grid>
            </Container>
          </Grid.Item>
        </Grid>
      </View>
    );
  };
  
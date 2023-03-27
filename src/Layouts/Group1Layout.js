import { Container, Grid, Row, Col, View } from 'native-base';

export const LoginLayout = ({ header, avatar, loginSection, registrationSection }) => {
  return (
    <Container padder>
      <Grid>
        <Row size={2}>
          {header} //the image of the logo
        </Row>
        <Row size={4}>
          <Col>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              {avatar} //avatar component allowing the user to switch between different limited icons as their avatar
            </View>
          </Col>
        </Row>
        <Row size={6}>
          <Col>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              {loginSection || registrationSection} //section containing the login form or registration form, 2 buttons and links
            </View>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

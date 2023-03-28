import { Container, Grid, Row, Col, View } from 'native-base';

export const Group9Layout = ({ applogoheader, appname, appversion, appdescription, developerinformation }) => {
    return (
      <View>
        <Grid>
          <Container>
            <Row>
              <Col>
                {applogoheader} //the logo of the app will appear in the header of the screen
              </Col>
            </Row>
            <Row>
              <Col>
                {appname} //the name of the application should appear here // center align
              </Col>
            </Row>
            <Row>
              <Col>
                {appversion} //the version of the application should appear here //left align
              </Col>
            </Row>
            <Row>
              <Col>
                {appdescription} //the description of the application //left align
              </Col>
            </Row>
            <Row>
              <Col>
                {developerinformation} //the developer information //left align
              </Col>
            </Row>
          </Container>
        </Grid>
      </View>
    );
  };
  
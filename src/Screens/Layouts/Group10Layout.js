import { Container, Grid, Row, Col, View } from 'native-base';

export const Group10Layout = ({headercomponent2,screennavcomponent,headerlabel,refundpolicycomponent,sectionlabel,refundformsection}) => {

  return (
    <View>
      <Container>
        <Grid>
          <Row size={2}>
            <Col>
              {headercomponent2} //the header component used for the settings screens
            </Col>
          </Row>
          <Row size={1}>
            <Col>
              {screennavcomponent} //the screen navigation component that contains the buttons to navigate to all the other setting screens
            </Col>
          </Row>
          <Row size={1}>
            <Col>
              {headerlabel} //Header Label: Refund & Returns
            </Col>
          </Row>
          <Row size={2}>
            <Col>
              {refundpolicycomponent} //Return Policy Component containing the full Refund Policy
            </Col>
          </Row>
          <Row size={1}>
            <Col>
              {sectionlabel} //Section Label: Return & Refund Request Form
            </Col>
          </Row>
          <Row size={3}>
            <Col>
              {refundformsection} //Return & Refund Request Form and the submit button
            </Col>
          </Row>
        </Grid>
      </Container>
    </View>
  );
};

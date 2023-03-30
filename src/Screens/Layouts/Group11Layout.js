import {View, Text, Grid, Col, Row, Container} from 'native-base';

export const Group11Layout = ({headercomponent2, screennavcomponent, headinglabel, customersupportformviewcomponent, feedbackformsection, FAQssection}) => {
  return (
    <View>
      <Grid>
        <Row size={2}>
          <Col>
            {headercomponent2} //The header component used in all the setting screens
          </Col>
        </Row>
        <Row size={1}>
          <Col>
            {screennavcomponent} //screen navigation component containing the buttons that navigate the user to the other settings screens
          </Col>
        </Row>
        <Row size={1}>
          <Col>
            <Text>{headinglabel}</Text> //Heading Label: Customer Support
          </Col>
        </Row>
        <Row size={4}>
          <Col>
            {customersupportformviewcomponent} //The Customer Support Form View
          </Col>
        </Row>
        <Row size={1}>
          <Col>
            <Text>{headinglabel}</Text> //Heading Label: Feedback Form
          </Col>
        </Row>
        <Row size={3}>
          <Col>
            {feedbackformsection} //The feedback form section containing the feedback form and the submit button
          </Col>
        </Row>
        <Row size={1}>
          <Col>
            <Text>{headinglabel}</Text> //Heading Label: FAQs
          </Col>
        </Row>
        <Row size={3}>
          <Col>
            {FAQssection} //FAQs section component containing the FAQs, scroll bar and the icon buttons to open a dialog box containing more information on the question selected
          </Col>
        </Row>
      </Grid>
    </View>
  );
};

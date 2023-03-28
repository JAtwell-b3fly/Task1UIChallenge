import { Grid, Container, Row, Col, View } from 'native-base';

export const Group13Layout = ({headercomponent,backbutton,headinglabel,sectionlabel,shippingformsection,shippingformviewsection,billingaddressformsection,billingaddressformviewsection,paymentmethodformsection,paymentmethodformviewsection,orderconfirmationcalculationsection}) => {

  const isOrderConfirmation = !!orderconfirmationcalculationsection; // determine if the layout is for Order Confirmation screen

  return (
    <Container>
      <Grid>
        <Row>
          <Col>
            {headercomponent}
          </Col>
        </Row>
        <Row>
          <Col>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              {isOrderConfirmation ? null : backbutton}
              <View>
                <Text style={{textAlign: 'center'}}>{headinglabel}</Text>
              </View>
              <View style={{width: isOrderConfirmation ? '20%' : 'auto'}} />
            </View>
          </Col>
        </Row>
        <Row>
          <Col>
            <View>
              <Text>{sectionlabel}</Text>
            </View>
          </Col>
        </Row>
        <Row>
          <Col>
            {isOrderConfirmation ? shippingformviewsection : shippingformsection}
          </Col>
        </Row>
        <Row>
          <Col>
            <View>
              <Text>{sectionlabel}</Text>
            </View>
          </Col>
        </Row>
        <Row>
          <Col>
            {isOrderConfirmation ? billingaddressformviewsection : billingaddressformsection}
          </Col>
        </Row>
        <Row>
          <Col>
            <View>
              <Text>{sectionlabel}</Text>
            </View>
          </Col>
        </Row>
        <Row>
          <Col>
            {isOrderConfirmation ? paymentmethodformviewsection : paymentmethodformsection}
          </Col>
        </Row>
        {isOrderConfirmation && 
          <Row>
            <Col>
              <View>
                <Text>{sectionlabel}</Text>
              </View>
            </Col>
          </Row>
        }
        {isOrderConfirmation && 
          <Row>
            <Col>
              {orderconfirmationcalculationsection}
            </Col>
          </Row>
        }
      </Grid>
    </Container>
  );
};

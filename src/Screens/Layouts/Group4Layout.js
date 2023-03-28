import { Container, Grid, Row, Col } from 'react-bootstrap';

export const Group4Layout = ({ headercomponent, backbutton, headinglabel, cartsection, calculationsection, continueshoppingbutton, checkoutbutton }) => {

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={8}>
          {headercomponent} //header component
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col md={8}>
          <Row>
            <Col xs={12} md={8}>
              {backbutton} //back button to navigate to the previous screen which can be any screen //left aligned
              {headinglabel} //heading label: Shopping Cart //center aligned
              {cartsection} //cart section displaying the list of products in the cart section
            </Col>
            <Col xs={12} md={4}>
              {calculationsection} //calculation section where the subtotal, grand total, tax will be calculated
              {continueshoppingbutton} //continue shopping button to navigate to the Product Listing Screen //left aligned
              {checkoutbutton} //checkout button to navigate to the Order Confirmation Screen //right aligned
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

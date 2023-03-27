import { Grid, Col, Row, Box, VStack, View } from 'native-base';

export const ProductListingLayout = ({ headercomponent, categoryfilter, headinglabel, catalogboxsection }) => {
  return (
    <View>
      <Grid
        h={1}
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(6, 1fr)"
        bg="lightBlue.100"
        safeArea
      >
        <Row h={1} justifyContent="center" alignItems="center" colSpan={6}>
          {headercomponent} //header component
        </Row>
        <Row h={1} colSpan={6}>
          <Col size={1}>{categoryfilter}</Col> //category filter to manipulate what products are displayed
          <Col size={5}>
            <Box px={4}>
              {headinglabel} //heading label: Products
            </Box>
          </Col>
        </Row>
        <Row h={5} colSpan={6}>
          {catalogboxsection} //catalogbox section displaying the products depending on what filter is selected
        </Row>
      </Grid>
    </View>
  );
};

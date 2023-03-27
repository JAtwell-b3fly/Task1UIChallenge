import { Grid, Col, Row, Box, VStack, View } from 'native-base';

export const HomeScreenLayout = ({ headercomponent, categoryfilter, welcomesection, headinglabel, catalogboxsection, tilessection }) => {
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
          <Col size={1}>{categoryfilter}</Col> //category filter component
          <Col size={5}>{welcomesection}</Col> //welcome message once the user has logged in
        </Row>
        <Row h={1} colSpan={6}>
          <Col size={6}>
            <Box px={4}>
              {headinglabel} //heading label: Recommended Products
            </Box>
          </Col>
        </Row>
        <Row h={3} colSpan={6}>
          {catalogboxsection} //catalogbox section displaying the recommended products
        </Row>
        <Row h={2} colSpan={6}>
          {tilessection} //tiles section containing buttons or tiles that navigate the user to the Customer Reviews and Ratings Page, Company Missions and Visions, Company Certifications
        </Row>
      </Grid>
    </View>
  );
};

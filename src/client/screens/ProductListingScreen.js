import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Import external components and sub-components
import Header from '../client/component/Layouts/Header'; //import the custom created header component
import CategoryFilter from '../client/component/Layouts/Filter'; //import the custom created filter component
import CatalogBox from '../client/component/Layouts/CatalogBox'; //import the custom created catalogbox component
import HeadingLabel from '../client/component/Layouts/HeadingLabel'; //import the custom created Heading Label section component
import { Group2Layout } from '../../Screens/Layouts/Group2LayoutTest';

import styles from '../src/shared/ProductListingScreenStyles.css'; //import the custom created stylesheet


export default function ProductListingScreen() {
  return (
      <Group2Layout headingcomponent={<Header />}
                    categoryfilter={<CategoryFilter />}
                    headinglabel={<HeadingLabel />}
                    catalogboxsection={<CatalogBox />}
      />
  );
}


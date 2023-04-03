import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Import external components and sub-components
import { HeaderLayout } from '../../components/Layouts/Header'; //import the custom created header component
import { Categories } from '../../components/Forms/categoryFilter'; //import the custom created filter component
import { ProductList } from '../../components/Forms/ProductList'; //import the custom created catalogbox component
import { CLabel } from '../../components/common/Label'; //import the custom created Heading Label section component
import { Group2Layout } from '../../Screens/Layouts/Group2LayoutTest';

import styles from '../src/shared/ProductListingScreenStyles.css'; //import the custom created stylesheet


export default function ProductListingScreen() {
  return (
      <Group2Layout headingcomponent={<HeaderLayout />}
                    categoryfilter={<Categories />}
                    headinglabel={<CLabel />}
                    catalogboxsection={<ProductList />}
      />
  );
}


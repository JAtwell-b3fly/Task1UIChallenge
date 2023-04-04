import React from 'react';

import { HeaderLayout } from '../../components/Layouts/Header'; //import the custom created header component
import { Categories } from '../../components/Forms/categoryFilter'; //import the custom created filter component
import WelcomeSection from '../client/component/Layouts/WelcomeSection'; //import the custom created welcome section component
import { ProductList } from '../../components/Forms/ProductList'; //import the custom created catalogbox component
import { CLabel } from '../../components/common/Label'; //import the custom created Heading Label section component
import Tiles from '../client/component/Layouts/Tiles'; //import the custom created tiles component
import { Group2Layout } from '../../Screens/Layouts/Group2LayoutTest';

import styles from '../src/shared/HomeScreenStyles.css'; //import the custom created stylesheet

export default function HomeScreen() {
  return (
    <Group2LayoutTest headercomponent = {<HeaderLayout />}
                      catagoryfilter = {<Categories />}
                      welcomesection = {<WelcomeSection />}
                      headinglabel={<CLabel />}
                      catalogboxsection = {<ProductList/>}
                      tilessection = {<Tiles />}               
    />
  );
}


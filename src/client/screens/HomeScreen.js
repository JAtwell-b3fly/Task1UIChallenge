import React from 'react';

import Header from '../client/components/Layouts/Header'; //import the custom created header component
import CategoryFilter from '../client/component/Layouts/Filter'; //import the custom created filter component
import WelcomeSection from '../client/component/Layouts/WelcomeSection'; //import the custom created welcome section component
import CatalogBox from '../client/component/Layouts/CatalogBox'; //import the custom created catalogbox component
import HeadingLabel from '../client/component/Layouts/HeadingLabel'; //import the custom created Heading Label section component
import Tiles from '../client/component/Layouts/Tiles'; //import the custom created tiles component
import { Group2Layout } from '../../Screens/Layouts/Group2LayoutTest';

import styles from '../src/shared/HomeScreenStyles.css'; //import the custom created stylesheet

export default function HomeScreen() {
  return (
    <Group2LayoutTest headercomponent = {<Header />}
                      catagoryfilter = {<CategoryFilter />}
                      welcomesection = {<WelcomeSection />}
                      catalogboxsection = {<CatalogBox />}
                      tilessection = {<Tiles />}               
    />
  );
}


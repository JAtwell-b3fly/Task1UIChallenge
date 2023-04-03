import React from 'react';

import { SecondHeaderLayout } from '../../components/Layouts/HeaderOther'; //import custom created header component
import ScreenNav from './client/components/Layouts/ScreenNav'; //import custom created screennav buttons component
import ReturnPolicy from './client/components/Layouts/ReturnPolicy'; //import custom created return policy component
import ReturnForm from './client/components/Forms/ReturnForm'; //import custom created return form component
import { CLabel } from '../../components/common/Label';
import { Group10Layout } from '../../Screens/Layouts/Group10Layout';

export default function ReturnAndRefundScreen() {
  return (
    <Group10Layout headercomponent2={<SecondHeaderLayout />}
                  screennavcomponent={<ScreenNav />}
                  headerlabel={<CLabel />}
                  refundpolicycomponent={<ReturnPolicy />}
                  sectionlabel={<CLabel />}
                  refundformsection={<ReturnForm />}
    />
  );
}

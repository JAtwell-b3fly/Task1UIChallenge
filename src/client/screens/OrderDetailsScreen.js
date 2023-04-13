import React from "react";
import { View } from "native-base";

import { CLabel } from "../components/common/Label";
import { SecondHeaderLayout } from "../components/Layouts/HeaderOther";
import Group7Layout from "./Layouts/Group7Layout";
import OrderDetails from "../components/Layouts/OrderDetails";

export default function OrderDetails () {
    return(
        <View>
            <Group7Layout headercomponent2={<SecondHeaderLayout />}
                            headerlabel3 = {<CLabel />}
                            OrderDetails={<OrderDetails />}
            />
        </View>
    )
}
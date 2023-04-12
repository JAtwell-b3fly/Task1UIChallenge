import React from "react";
import { View } from "native-base";

import { SecondHeaderLayout } from "../components/Layouts/HeaderOther";
import { CLabel } from "../components/common/Label";
import Group7Layout from "./Layouts/Group7Layout";
import OrderStatusDetails from "../components/Layouts/OrderStatusDetails";

export default function OrderStatus () {
    return(
        <View>
            <Group7Layout headercomponent2={<SecondHeaderLayout />}
                            headerlabel2={<CLabel />}
                            OrderStatusDetails={<OrderStatusDetails />}
            />
        </View>
    )
}
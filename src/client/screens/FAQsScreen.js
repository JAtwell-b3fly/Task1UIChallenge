import React from "react";
import { View } from "native-base";

import Group7Layout from "./Layouts/Group7Layout";
import { SecondHeaderLayout } from "../components/Layouts/HeaderOther";
import { CLabel } from "../components/common/Label";
import FAQheading from "../components/Layouts/FAQheading";
import FAQresponse from "../components/Layouts/FAQresponse";

export default function FAQ (){
    return(
        <View>
           <Group7Layout headercomponent2={<SecondHeaderLayout />}
                        headerlabel1={<CLabel />}
                        FAQheading={<FAQheading />}
                        FAQresponse={<FAQresponse />}
           />
        </View>
    )
}
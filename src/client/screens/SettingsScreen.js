import React from "react";

import { SecondHeaderLayout } from "../components/Layouts/HeaderOther";
import Group8Layout from "./Layouts/Group8Layout";
import RadioBtn from "../components/common/RadioButton";
import { Button } from "native-base";
import { Avatar } from "native-base";

export default function SettingsScreen () {
    return(
        <View>
            <Group8Layout applogoheader={<SecondHeaderLayout />}
                            avatarcomponent={<Avatar />}
                            setting1button={<Button />}
                            setting2button={<Button />}
                            setting3button={<Button />}
                            setting4button={<RadioBtn />}
                            setting5button={<RadioBtn />}
                            setting6button={<RadioBtn />}
                            setting7button={<RadioBtn />}
                            setting8button={<RadioBtn />}
                            setting9button={<RadioBtn />}
                            setting10button={<Button />}
                            setting11button={<Button />}
                            setting12button={<Button />}
                            setting13button={<Button />}
                            setting14button={<Button />}
            />
        </View>
    )
}
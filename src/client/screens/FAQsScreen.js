import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getFAQById } from "../api/faqApi";

import Group7Layout from "./Layouts/Group7Layout";
import { SecondHeaderLayout } from "../components/Layouts/HeaderOther";
import { CLabel } from "../components/common/Label";
import FAQheading from "../components/Layouts/FAQheading";
import FAQresponse from "../components/Layouts/FAQresponse";

const FAQ = () => {

    //State management
    const [faq, setFAQ] = useState(null);
    const [faqResponse, setFAQResponse] = useState(null);

    const navigation = useNavigation();
    const route = useRoute();

    // Get FAQ data from database based on FAQ id
    useEffect(() => {
        const faqId = route.params.faqId;
        getFAQById(faqId)
        .then((response) => {
            setFAQ(response.faq);
            setFAQResponse(response.faqResponse);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [route.params.faqId]);

    // Navigate back to Customer Support Screen
    const handleBackNavigation = () => {
        navigation.goBack();
    };

    return(
        <View>
           <Group7Layout headercomponent2={<SecondHeaderLayout />}
                        headerlabel1={<CLabel />}
                        FAQheading={<FAQheading />}
                        FAQresponse={<FAQresponse />}
           />
        </View>
    )
};

export default FAQ;
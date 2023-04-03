import React from 'react';
import {View,VStack,HStack,Heading,Center,Text} from 'native-base';

// Import necessary components and styles
import { SecondHeaderLayout } from '../../components/Layouts/HeaderOther'; //import the custom created new header component
import ScreenNav from './client/components/Layouts/ScreenNav'; //import the custom created screennav component
import CustomerSupportForm from './client/components/Forms/CustomerSupportForm'; //import the custom created customersupport form view component
import FeedbackForm from './client/components/Forms/FeedbackForm'; //import the custom created feedback form component
import FAQ from './client/components/Layouts/FAQ'; //import the cusotm created FAQ component
import { Group11Layout } from '../../Screens/Layouts/Group11Layout';

import styles from './CustomerSupport.css'; //import the external stylesheet
import { CLabel } from '../../components/common/Label';

//Actions
  // Define state to store FAQ dialog visibility
  const [faqDialogVisible, setFAQDialogVisible] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  // Define function to handle FAQ button click
  const handleFAQClick = (faq) => {
    setSelectedFAQ(faq);
    setFAQDialogVisible(true);
  };

  /* {FAQs.map((faq) => (
          <div key={faq.id} className="CustomerSupport-faq-item">
            <button className="CustomerSupport-faq-button" onClick={() => handleFAQClick(faq)}>
              {faq.question}
            </button>
            <button className="CustomerSupport-faq-icon-button" onClick={() => handleFAQClick(faq)}>
              <i className="fa fa-info-circle" />
            </button>
          </div>
        ))} */

  /* {faqDialogVisible && (
        <div className="CustomerSupport-faq-dialog">
          <button className="CustomerSupport-faq-dialog-close" onClick={() => setFAQDialogVisible(false)}>
            <i className="fa fa-times-circle" />
          </button>
          <h3 className="CustomerSupport-faq-dialog-question">{selectedFAQ.question}</h3>
          <p className="CustomerSupport-faq-dialog-answer">{selectedFAQ.answer}</p>
        </div>
      )} */

// Define the Customer Support screen component
export default function CustomerSupport() {
  return (
    <Group11Layout headercomponent2={<SecondHeaderLayout />}
                    screennavcomponent={<ScreenNav />}
                    headinglabel1={<CLabel />}
                    customersupportformviewcomponent={<CustomerSupportForm />}
                    headinglabel2={<CLabel />}
                    feedbackformsection={<FeedbackForm />}
                    headinglabel3={<CLabel />}
                    FAQssection={<FAQ />}
    />
  );
}

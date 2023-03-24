// Import necessary components and styles
import Header from './Header'; //import the custom created new header component
import Footer from './Footer'; //import the custom created footer component
import ScreenNav from './ScreenNav'; //import the custom created screennav component
import CustomerSupportForm from './CustomerSupportForm'; //import the custom created customersupport form view component
import FeedbackForm from './FeedbackForm'; //import the custom created feedback form component
import FAQ from './FAQ'; //import the cusotm created FAQ component
import styles from './CustomerSupport.css'; //import the external stylesheet

// Define the Customer Support screen component
function CustomerSupport() {
  // Define state to store FAQ dialog visibility
  const [faqDialogVisible, setFAQDialogVisible] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  // Define function to handle FAQ button click
  const handleFAQClick = (faq) => {
    setSelectedFAQ(faq);
    setFAQDialogVisible(true);
  };

  return (
    <div className="CustomerSupport">
      <Header />
      <ScreenNav />
      <h2 className="CustomerSupport-heading">Customer Support</h2>
      <CustomerSupportForm />
      <h2 className="CustomerSupport-subheading">Feedback Form</h2>
      <FeedbackForm />
      <button className="CustomerSupport-submit-button">Submit</button>
      <h2 className="CustomerSupport-subheading">FAQs</h2>
      <div className="CustomerSupport-faq-list">
        {FAQs.map((faq) => (
          <div key={faq.id} className="CustomerSupport-faq-item">
            <button className="CustomerSupport-faq-button" onClick={() => handleFAQClick(faq)}>
              {faq.question}
            </button>
            <button className="CustomerSupport-faq-icon-button" onClick={() => handleFAQClick(faq)}>
              <i className="fa fa-info-circle" />
            </button>
          </div>
        ))}
      </div>
      {faqDialogVisible && (
        <div className="CustomerSupport-faq-dialog">
          <button className="CustomerSupport-faq-dialog-close" onClick={() => setFAQDialogVisible(false)}>
            <i className="fa fa-times-circle" />
          </button>
          <h3 className="CustomerSupport-faq-dialog-question">{selectedFAQ.question}</h3>
          <p className="CustomerSupport-faq-dialog-answer">{selectedFAQ.answer}</p>
        </div>
      )}
      <Footer />
    </div>
  );
}
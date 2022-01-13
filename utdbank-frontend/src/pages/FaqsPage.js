import React from 'react'
import PageHeader from '../components/common/PageHeader';
import ContactForm from '../components/contact/ContactForm';
import Faq from '../components/contact/Faq';


const FaqsPage = () => {
    return (
        <div>
          <PageHeader title="FAQ's" />
          <Faq/>
          <ContactForm subtitle="Do you have any question?" buttonmessage="Submit A Question"/>
        </div>
    )
}

export default FaqsPage;

import React, { useState, useEffect } from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sendMessage = async (values) => {
    try {
      setIsSubmitting(true);
      
      // EmailJS configuration
      // You'll need to set up EmailJS account and get these values
      const serviceId = 'service_4sb2omc'; // Replace with your EmailJS service ID
      const templateId = 'template_dtos9y6'; // Replace with your EmailJS template ID
      const publicKey = '9F9GQrjokbmNm_OpC'; // Replace with your EmailJS public key
      
      // Prepare template parameters
      const templateParams = {
        to_email: 'nafeelmannan@gmail.com',
        from_name: values.name,
        from_email: values.email,
        from_phone: values.phone || 'Not provided',
        from_company: values.company || 'Not provided',
        message: values.message,
        reply_to: values.email
      };

      // Send email using EmailJS
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      if (result.status === 200) {
        messageRef.current.innerText = 'Message sent successfully! We\'ll get back to you within 24 hours.';
        messageRef.current.className = 'messages success';
        
        // Reset the form
        values.name = "";
        values.email = "";
        values.phone = "";
        values.company = "";
        values.message = "";
      } else {
        messageRef.current.innerText = 'Failed to send message. Please try again.';
        messageRef.current.className = 'messages error';
      }
    } catch (error) {
      console.error('Error sending message:', error);
      messageRef.current.innerText = 'Failed to send message. Please try again.';
      messageRef.current.className = 'messages error';
    } finally {
      setIsSubmitting(false);
      
      // Clear message after 5 seconds
      setTimeout(() => {
        messageRef.current.innerText = '';
        messageRef.current.className = 'messages';
      }, 5000);
    }
  };

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  company: "",
                  message: "",
                }}
                onSubmit={async (values) => {
                  await sendMessage(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <div className="controls">
                      <div className="form-group">
                        <Field
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Full Name *"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          validate={validateEmail}
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                        />
                        {errors.email && touched.email && (
                          <div className="error-message">{errors.email}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <Field
                          id="form_phone"
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          id="form_company"
                          type="text"
                          name="company"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <Field
                        as="textarea"
                        id="form_message"
                        name="message"
                        placeholder="Tell us about your project *"
                        rows="5"
                        required="required"
                      />
                    </div>

                    <button type="submit" className="butn bord" disabled={isSubmitting}>
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <h3 className="wow" data-splitting>
                {ContactFromDate.title}
              </h3>
              <div className="item mb-40">
                <h5>
                  <a href="#0">{ContactFromDate.email}</a>
                </h5>
                <h5>{ContactFromDate.phone}</h5>
              </div>
              <h3 className="wow" data-splitting>
                Visit Us.
              </h3>
              <div className="item">
                <h6>
                  {ContactFromDate.location.first}
                  <br />
                  {ContactFromDate.location.second}
                </h6>
              </div>
              <div className="social mt-50">
                <a href="#0" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

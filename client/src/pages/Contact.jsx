import React from "react";
import Layout from "../components/Layout/Layout";
import { FaEnvelopeOpen, FaHeadphones, FaPhone } from "react-icons/fa";
import InfoSection from "../components/ContactUs/InfoSection";
import ContactForm from "../components/ContactUs/ContactForm";
import MapEmbed from "../components/ContactUs/MapEmbed";

const Contact = () => {
  return (
    <Layout title={"Contact Us - Know more"}>
      <div className="px-52 pt-16">
        <InfoSection />
        <ContactForm />
      </div>
      <div>
        <MapEmbed />
      </div>
    </Layout>
  );
};

export default Contact;

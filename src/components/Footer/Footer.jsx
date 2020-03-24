import React from "react";
import styles from "./Footer.module.scss";
import PrivacyPdf from "../../assets/privacy-docs/privacy-statement.pdf";
import TermsOfServicePdf from "../../assets/privacy-docs/terms-of-service.pdf";
import TermsOfUsePdf from "../../assets/privacy-docs/terms-of-use.pdf";

const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <div>
          <h3>FACEBOOK</h3>
          <p>
            <a
              href="https://www.facebook.com/groups/135015991160230/?ref=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Facebook group!
            </a>
          </p>
        </div>
        <div>
          <h3>YOUR PROFILE</h3>
          <p>Your Diet Type</p>
          <p>Your Genetics</p>
          <p>Your Nutrient Breakdown</p>
          <p>Your Answers</p>
        </div>
        <div>
          <h3>SETTINGS</h3>
          <p>Settings</p>
        </div>
        <div>
          <h3>LEGAL</h3>
          <p>
            <a href={PrivacyPdf} target="_blank" rel="noopener noreferrer">
              Privacy Statement
            </a>
          </p>
          <p>
            <a
              href={TermsOfServicePdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
          </p>
          <p>
            <a href={TermsOfUsePdf} target="_blank" rel="noopener noreferrer">
              Terms of Use
            </a>
          </p>
          <p>Ask a question</p>
        </div>
      </section>
    </>
  );
};

export default Footer;

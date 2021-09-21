import React from "react";

//ASSETS
import HeroImg from "../../../public/assets/about-us.jpg";

//COMPONENTS
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";
import { email, phoneNumber, address } from "../shared";

const PrivacyPolicy = () => {
    return (
        <div>
            <HeroSection img={HeroImg} title={"Privacy Policy"}/>

            <div className="max-w-7xl mx-auto px-4 py-28 sm:px-6 lg:px-8">
                <h2 className="text-4xl text-darkGrey font-extrabold my-8">Our Privacy Policy</h2>

                <h3 className="text-2xl text-darkGrey font-extrabold my-8">1. Marketing</h3>
                <p className="text-mediumGrey mb-4">We may use your email address; provided as part of your Account Data and Enquiry Data, to send email marketing communications about:</p>
                    <ul className="text-mediumGrey mb-4">
                        <li>- New interventions; and</li>
                        <li>- New developments to the Application.</li>
                    </ul>
                <p className="text-mediumGrey mb-4">You will be asked to expressly agree in advance to Our use of your personal information for marketing purposes.</p>
                <p className="text-mediumGrey mb-4">You may opt out or instruct Us at any time not to process your personal information for marketing purposes.</p>

                <h3 className="text-2xl text-darkGrey font-extrabold my-8">2. Keeping your data secure</h3>
                <p className="text-mediumGrey mb-4">We will use technical and organisational measures to safeguard your personal data, for example:</p>
                    <ul className="text-mediumGrey mb-4">
                        <li>- Access to your account is controlled by a password and user name that are unique to you;</li>
                        <li>- We store your personal data on secure servers; and</li>
                        <li>- We are working towards ISO 27001 and PEN tested systems ensuring security.</li>
                    </ul>
                <p className="text-mediumGrey mb-4">While We will use all reasonable efforts to safeguard your personal data, you acknowledge that the use of the internet is not entirely secure and 
                    for this reason We cannot guarantee the security or integrity of any personal data that are transferred from you or to you via the internet. If you 
                    have any particular concerns about your information, please contact Us using Our contact details below.</p>
                <p className="italic font-bold text-mediumGrey mb-4">What can I do to keep my information safe?</p>
                <p className="text-mediumGrey mb-4">If you want detailed information from Get Safe Online on how to protect your information and your computers and devices against fraud, identity theft, 
                    viruses and many other online problems, please visit 
                    <a href="https://www.getsafeonline.org" target="_blank" className="text-blue hover:text-darkGrey"> www.getsafeonline.org</a>. 
                    Get Safe Online is supported by HM Government and leading businesses.</p>

                <h3 className="text-2xl text-darkGrey font-extrabold my-8">3. Retaining and deleting personal data</h3>
                <p className="text-mediumGrey mb-4">The personal data that We process will not be kept for longer than is necessary for the processing purpose.</p>
                <p className="text-mediumGrey mb-4">We will retain your personal data for 1 year from the closure of your account, at the end of which it will be deleted from Our systems.</p>
                <p className="text-mediumGrey mb-4">In some instances, your personal data may be retained for a longer period. This includes:</p>
                    <ul className="text-mediumGrey mb-4">
                        <li>- Where you seek re-referral to Our service;</li>
                        <li>- Where necessary for Us to defend or bring any actual or contemplated legal proceedings;</li>
                        <li>- Where there are; or reasonably may be, child or adult protection or safeguarding concerns, or otherwise in order to protect your vital interests or the vital interests of another natural person.</li>
                    </ul>
                <p className="text-mediumGrey mb-4">We may retain your personal data up to 6 years where such retention is necessary for compliance with a legal obligation to which We are subject.</p>
                

                <h3 className="text-2xl text-darkGrey font-extrabold my-8">4. Cookies</h3>
                <p className="text-mediumGrey mb-4">We use cookies as set out in Our <a href="/cookies" className="text-blue hover:text-darkGrey">cookies policy</a>.</p>
                

                <h3 className="text-2xl text-darkGrey font-extrabold my-8">5. Changes to the privacy policy</h3>
                <p className="text-mediumGrey mb-4">We may change this privacy policy from time to time by publishing a new version on Our Application.</p>
                <p className="text-mediumGrey mb-4">You should check this policy occasionally to ensure you are aware of the most recent version that will apply each time you access this Application.</p>
                <p className="text-mediumGrey mb-4">We may also notify you of changes to this policy by email or through messages displayed on your profile and/or Our Application.</p>

                <h3 className="text-2xl text-darkGrey font-extrabold my-8">6. Your Rights</h3>
                <p className="text-mediumGrey mb-4">You have the following rights in respect of the personal data We hold about you:</p>
                <p className="italic font-bold text-mediumGrey mb-4">(a) Right of access</p>
                <p className="text-mediumGrey mb-4">You have the right to request a copy of the personal data which We hold about you. You may also request details of the purposes of the processing, the categories of 
                    personal data concerned and the recipients of the personal data.</p> 
                
                <p className="italic font-bold text-mediumGrey mb-4">(b) Right to rectification</p>
                <p className="text-mediumGrey mb-4">You have the right to have any inaccurate personal data about you rectified and to have any incomplete personal data about you completed.</p>     
                
                <p className="italic font-bold text-mediumGrey mb-4">(c) Right to erasure</p>
                <p className="text-mediumGrey mb-4">In certain circumstances, you have the right to request that We delete personal data held about you, free of charge and without undue delay.</p>
                <p className="text-mediumGrey mb-4">Those circumstances include:</p>
                <ul className="text-mediumGrey mb-4">
                    <li>- Where personal data is no longer necessary in relation to the purposes for which they were collected or otherwise processed;</li>
                    <li>- You withdraw consent to consent-based processing;</li>
                    <li>- The processing is for direct marketing purposes; and/or</li>
                    <li>- The personal data have been unlawfully processed.</li>
                </ul>
                
                <p className="italic font-bold text-mediumGrey mb-4">(d) Right to restrict processing of your personal data</p>
                <p className="text-mediumGrey mb-4">You have the right to ask Us not to process your personal data where:</p>
                <ul className="text-mediumGrey mb-4">
                    <li>- The accuracy of the personal data is contested;</li>
                    <li>- Processing is unlawful and you do not wish for the personal data to be erased; and</li>
                    <li>- We no longer need the personal data for the purposes of Our processing, but where you require the data for the establishment, exercise or defence of legal claims.</li>
                </ul>

                <p className="italic font-bold text-mediumGrey mb-4">(e) Right to object to processing of your personal data</p>
                <p className="text-mediumGrey mb-4">You have the right to object to Our processing your personal data:</p>
                <ul className="text-mediumGrey mb-4">
                    <li>- On grounds related to your particular situation. We will stop processing your personal data unless We have a legitimate ground for processing which overrides your interests or rights;</li>
                    <li>- Where processing is for direct marketing purposes, including profiling to the extent that it is related to such direct marketing.</li>
                </ul>

                <p className="italic font-bold text-mediumGrey mb-4">(f) Right to Data Portability</p>
                <p className="text-mediumGrey mb-4">Where the legal basis for Our processing of your personal data is consent, and such processing is carried out by automated means, you have the right to receive your 
                    personal data from Us in a structured, commonly used and machine-readable format. However, this right does not apply where it would adversely affect the rights and 
                    freedoms of others.</p>

                <p className="italic font-bold text-mediumGrey mb-4">(g) Right to Withdraw Consent</p>
                <p className="text-mediumGrey mb-4">Where the legal basis for Our processing of your personal information is consent, you have the right to withdraw that consent at any time. Withdrawal will not affect 
                    the lawfulness of processing before the withdrawal.</p>

                <h3 className="text-2xl text-darkGrey font-extrabold my-8">7. Exercising rights in relation to your personal data</h3>
                <p className="text-mediumGrey mb-4">You can exercise your rights at any time in by contacting Us using the contact details below.</p>
                <p className="text-mediumGrey mb-4">Following a request by you, We may request account information and/or proof of your identity and address in order to help Us identify you (for example, a copy of your 
                    driving licence or passport and a recent utility or credit card bill).</p>
                <p className="text-mediumGrey mb-4">Where you request a copy of the personal data which We hold, the first copy will be provided free of charge, however We may charge a small administration fee for additional requests.</p>

                <h3 className="text-2xl text-darkGrey font-extrabold my-8">8. Our details and how to contact us</h3>
                <p className="text-mediumGrey mb-4">The Application is owned and operated by MYMUP Digital, a community interest company registered in England and Wales under Company Number: 10086192.</p>
                <p className="text-mediumGrey mb-4">Our registered office address is:</p>
                <ul className="text-mediumGrey mb-4">
                    <li>64 Beckfield Road</li>
                    <li>Bingley</li>
                    <li>Bradford</li>
                    <li>West Yorkshire</li>
                    <li>BD16 1QS</li>
                </ul>
                <p className="text-mediumGrey mb-4">Our principal place of business and Postal Address is:</p>
                <p className="text-mediumGrey mb-4">{address}</p>

                <p className="text-mediumGrey mb-4">You can contact Us:</p>
                <ul className="text-mediumGrey mb-4">
                    <li>- By post, using Our Postal Address;</li>
                    <li>- By email to {email}; or</li>
                    <li>- By telephone to {phoneNumber}.</li>
                </ul>

                <h3 className="text-2xl text-darkGrey font-extrabold my-8">9. Data Protection Officer</h3>
                <p className="text-mediumGrey mb-4">Our nominated Data Protection Officer for the purposes of the Act and GDPR is Lorna Armitage.</p>
                <p className="text-mediumGrey mb-4">You can contact our Data Protection Officer:</p>
                <ul className="text-mediumGrey mb-4">
                    <li>- By post, using Our Postal Address;</li>
                    <li>- By email to {email}; or</li>
                    <li>- By telephone to {phoneNumber}.</li>
                </ul>

            </div>


            <ContactSection/>
        </div>
    );
};

export default PrivacyPolicy;

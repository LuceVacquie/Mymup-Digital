import React from "react";

//ASSETS
import HeroImg from "../../../public/assets/about-us.jpg";

//COMPONENTS
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";

const Cookies = () => {
    return (
        <div>
            <HeroSection img={HeroImg} title={"Cookies"}/>

            <div className="max-w-7xl mx-auto px-4 py-28 sm:px-6 lg:px-8">
                <h2 className="text-4xl text-darkGrey font-extrabold my-8">Our Cookie Policy</h2>

                <p className="text-mediumGrey mb-4">A cookie is a small text file which is placed onto your computer (or other electronic device) when you access our website. We use cookies on this website to:</p>
                    <ul className="text-mediumGrey mb-4">
                        <li>- recognise you whenever you visit this website (this speeds up your access to the website as you do not have to log in each time);</li>
                        <li>- obtain information about your preferences, online movements and use of the internet;</li>
                        <li>- carry out research and statistical analysis to help improve our services and to help us better understand our visitor requirements and interests;</li>
                        <li>- target our marketing and advertising campaigns more effectively by providing interest-based advertisements that are personalised to your interests; and</li>
                        <li>- make your online experience more efficient and enjoyable.</li>
                    </ul>
                <p className="text-mediumGrey mb-4">The information we obtain from our use of cookies will not usually contain your personal data. Although we may obtain information about 
                your computer or other electronic device such as your IP address, your browser and/or other internet log information, this will not usually identify you personally. In certain 
                circumstances, we may collect personal information about you where you voluntarily provide it (e.g. by completing an online form) or where you use our services.</p>
                <p className="text-mediumGrey mb-4">In most cases we will need your consent in order to use cookies on this website. The exception is where the cookie is essential in order for 
                us to provide you with a service you have requested.</p>

                <h3 className="text-2xl text-darkGrey font-extrabold my-8">Consent</h3>
                <p className="text-mediumGrey mb-4">There is a notice on our <a href="/" target="_blank" className="text-blue hover:text-darkGrey">home page</a> which describes how we use 
                cookies and which also provides a link to our website <a href="/privacy-policy" target="_blank" className="text-blue hover:text-darkGrey">privacy policy</a>. If you use this 
                website after this notification has been displayed to you, we will assume that you consent to our use of cookies for the purposes described in this website cookie 
                policy and our website <a href="/privacy-policy" target="_blank" className="text-blue hover:text-darkGrey">privacy policy</a>.</p>

                <h3 className="text-2xl text-darkGrey font-extrabold my-8">Third-party Cookies</h3>
                <p className="text-mediumGrey mb-4">We work with third party suppliers who may also set cookies on our website, for example Google analytics. These third party suppliers are 
                responsible for the cookies they set on our site. If you want further information please go to the website for the relevant third party. You will find additional information 
                in the table below.</p>

                <h3 className="text-2xl text-darkGrey font-extrabold my-8">Description of Cookies</h3>
                <p className="text-mediumGrey mb-4">The table below provides more information about the cookies we use and why:</p>
                <table className="border-2 border-lightGrey">
                    <tr className="font-bold text-darkGrey text-left">
                        <th className="border-2 p-2 border-lightGrey">Name</th>
                        <th className="border-2 p-2 border-lightGrey">Purpose of the Cookie</th>
                    </tr>
                    <tr>
                        <td className="font-bold text-darkGrey border-2 p-2 border-lightGrey">_utma</td>
                        <td className="text-mediumGrey border-2 p-2 border-lightGrey">
                            This cookie is used to determine new and returning visitors. It has an expiration time of 2 years. If the ga.js library is executed and no _utma cookie exists, 
                            this will be recorded as the users’ first visit and a _utma cookie will be set. If a _utma cookie is already in place, the expiration time is reset and the user 
                            is recorded as a return visitor.
                        </td>
                    </tr>
                    <tr>
                        <td className="font-bold text-darkGrey border-2 p-2 border-lightGrey">_utmb</td>
                        <td className="text-mediumGrey border-2 p-2 border-lightGrey">
                        This cookie is used to determine a new session. The cookie is set when the ga.js library executes and there is no _utmb cookie in place. It has an expiration time of 
                        30 minutes, therefore if a user is inactive for a period longer than this, a new cookie will be set when the library executes and the interaction will be recorded as a 
                        new session.
                        </td>
                    </tr>
                    <tr>
                        <td className="font-bold text-darkGrey border-2 p-2 border-lightGrey">_utmz</td>
                        <td className="text-mediumGrey border-2 p-2 border-lightGrey">
                        This cookie is used to determine the traffic source, medium, campaign name and campaign term which delivered the user to your website. It is created when the javascript 
                        library executes and expires after 6 months.
                        </td>
                    </tr>
                    <tr>
                        <td className="font-bold text-darkGrey border-2 p-2 border-lightGrey">_utmv</td>
                        <td className="text-mediumGrey border-2 p-2 border-lightGrey">
                        This cookie is used for storing visitor-level custom variable data. It is created when the _setCustomVar method is used with a visitor level custom variable. Like the 
                        _utma cookie, this cookie expires after 2 years and is reset each time the user visits before the expiration of the cookie.
                        </td>
                    </tr>
                    <tr>
                        <td className="font-bold text-darkGrey border-2 p-2 border-lightGrey">[Google Analytics]</td>
                        <td className="text-mediumGrey border-2 p-2 border-lightGrey"></td>
                    </tr>
                </table>
                

                <h3 className="text-2xl text-darkGrey font-extrabold my-8">How to turn off Cookies</h3>
                <p className="text-mediumGrey mb-4">If you do not want to accept cookies, you can change your browser settings so that cookies are not accepted. If you do this, please be 
                aware that you may lose some of the functionality of this website. For further information about cookies and how to disable them please go to the Information Commissioner's 
                web page on cookies: <a href="https://ico.org.uk/for-the-public/online/cookies/" target="_blank" className="text-blue hover:text-darkGrey">https://ico.org.uk/for-the-public/online/cookies/</a>.</p>
            
            </div>

            <ContactSection/>
        </div>
    );
};

export default Cookies;

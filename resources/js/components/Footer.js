import React from "react";

//COMPONENTS
import SocialMedia from "./SocialMedia";

const navigation = {
    quickLinks: [
        { name: "About us", href: "/about" },
        { name: "MYMUP Platform", href: "/mymup-platform" },
        { name: "Contact us", href: "/contact" },
    ],
    legal: [
        { name: "Terms & Conditions", href: "/terms-conditions" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Cookies", href: "/cookies" },
    ],
};

const address =
    "MYMUP Digital \n Regus 1st Floor East \n Suite \n The Waterfront \n Shipley \n West Yorkshire \n BD17 7TD";

const Footer = () => {
    return (
        <footer
            className="bg-darkGrey text-footerLink flex relative inset-x-0 bottom-0"
            aria-labelledby="footer-heading"
        >
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="max-w-7xl mx-auto px-4 py-28 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-base font-bold text-gray-300 tracking-wider uppercase">
                                Find us
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                                <li>MYMUP Digital</li>
                                <li>Regus 1st Floor East</li>
                                <li>Suite</li>
                                <li>The Waterfront</li>
                                <li>Shipley</li>
                                <li>West Yorkshire</li>
                                <li>BD17 7TD</li>
                            </ul>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h3 className="text-base font-bold text-gray-300 tracking-wider uppercase">
                                Get in touch
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                                <li>
                                    <a
                                        href="tel:01274897714"
                                        className="text-base hover:text-gray-300"
                                    >
                                        01274897714
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:info@mymup.org"
                                        className="text-base hover:text-gray-300"
                                    >
                                        info@mymup.org
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-base font-bold text-gray-300 tracking-wider uppercase">
                                Quick links
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {navigation.quickLinks.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-base hover:text-gray-300"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h3 className="text-base font-bold text-gray-300 tracking-wider uppercase">
                                Legal
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {navigation.legal.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-base hover:text-gray-300"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-20 border-t border-gray-300 py-10 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        <SocialMedia />
                    </div>
                    <div className="mt-8 text-base md:mt-0 md:order-1">
                        <p>2021 &copy; MYMUP Digital</p>
                        <p>MYMUP Digital is a subsidiary of the MYMUP Group.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

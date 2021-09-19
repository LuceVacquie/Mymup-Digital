import React from "react";

const ContactSection = () => {
    return (
        <div className="flex relative text-white">
            <div className="bg-blue w-1/2 py-28">
                <p>Want to know more? Then give us a call.</p>
                <p>01274 897714</p>
            </div>
            <div className="bg-darkBlue w-1/2 py-28">
                <p>Alternatively, you can email us.</p>
                <p>info@mymup.org</p>
            </div>
        </div>
    );
};

export default ContactSection;

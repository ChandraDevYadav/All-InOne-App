import React from "react";

const MapEmbed = () => {
    return (
        <div className="mt-4">
            <div className="w-full h-[450px]">
                <iframe
                    title="Biratnagar Map"
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28549.09567478728!2d87.25824619094714!3d26.452474531224936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e589d760b0297f%3A0x64c86f3a24355d6!2sBiratnagar%2C%20Nepal!5e0!3m2!1sen!2snp!4v1693483026486!5m2!1sen!2snp"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default MapEmbed;

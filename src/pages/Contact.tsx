import React from "react";
import { contactDetails } from "../data/links";

const Contact: React.FC = () => {
    return (
        <section className="w-full h-full flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden">
            {/* Section Title */}
            <div className="text-center mb-10 mx-10">
                <h1 className="text-4xl font-bold">Contact Me</h1>
                <p className="mt-4 text-lg">Feel free to reach out via any of the platforms below!</p>
            </div>

            {/* Contact Icons */}
            <div className="flex flex-wrap justify-center gap-8">
                {contactDetails.map((contact, index) => (
                    <div className="flex flex-col items-center" key={index}>
                        {/* Icon */}
                        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                            <a href={contact.link} target="_blank" rel="noopener noreferrer">
                                {contact.icon}
                            </a>
                        </div>
                        {/* Label */}
                        <span className="mt-2">
                            <a href={contact.link} target="_blank" rel="noopener noreferrer">
                                {contact.name}
                            </a>
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Contact;

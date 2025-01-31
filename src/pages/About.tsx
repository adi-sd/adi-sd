import React from "react";
import { personalInfo } from "../data/personal";

const About: React.FC = () => {
    const { name, location, age, birthdate, hometown, profession, education, interests } = personalInfo;

    return (
        <section id="about" className="w-full h-fit py-16 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-6 py-10 h-full">
                {/* Section Title */}
                <h2 className="text-4xl font-bold mb-6 md:mb-10 text-blue-500 text-center font-mono">About</h2>

                {/* Two-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start md:h-full">
                    {/* Personal Info */}
                    <div className="space-y-6 md:h-full">
                        <h3 className="text-2xl md:text-4xl font-semibold text-blue-500 mb-6">Personal Details</h3>
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg md:h-fit">
                            <div className="w-full flex flex-col items-start justify-start">
                                <ul className="text-lg space-y-6 text-gray-300">
                                    <li>
                                        Hi, I’m <b className="text-blue-500">{name}</b>
                                    </li>
                                    <li>
                                        Currently based in <b className="text-blue-500">{location}</b>
                                    </li>
                                    <li>
                                        I’m <b className="text-blue-500">{age} years old</b>, born on{" "}
                                        <b className="text-blue-500">{birthdate}</b>
                                    </li>
                                    <li>
                                        Originally from <b className="text-blue-500">{hometown}</b>
                                    </li>
                                    {education.map((edu, index) => (
                                        <li key={index}>
                                            <b className="text-blue-500">{edu.title}</b>
                                            <span> from {edu.institution}</span>
                                        </li>
                                    ))}
                                    <li>
                                        Professionally, I’m a <b className="text-blue-500">{profession}</b>
                                    </li>
                                    <li>
                                        My Current interests include:
                                        <ul className="list-disc pl-6 mt-4 space-y-4">
                                            {interests.map((interest, idx) => (
                                                <li key={idx}>{interest}</li>
                                            ))}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-4xl font-semibold text-blue-500 mb-6">Education</h3>
                        {education.map((edu, index) => (
                            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                                <h4 className="text-2xl font-semibold text-blue-500">{edu.title}</h4>
                                <p className="text-lg mt-2 text-gray-300">{edu.institution}</p>
                                <p className="text-gray-400 mt-2">{edu.duration}</p>
                                <ul className="text-lg list-disc pl-6 mt-4 space-y-2 text-gray-300">
                                    {edu.courses.map((course, idx) => (
                                        <li key={idx}>{course}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

import React from "react";
import { workExperience } from "../data/work";

const Work: React.FC = () => {
    return (
        <section id="work" className="w-full h-fit py-16 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-6 py-10">
                {/* Section Title */}
                <h2 className="text-4xl font-bold mb-6 md:mb-10 text-blue-500 text-center font-mono">
                    Work Experience
                </h2>

                {/* Work Experience Cards */}
                <div className="grid grid-cols-1 gap-12">
                    {workExperience.map((work, index) => (
                        <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            {/* Header */}
                            <div className="mb-6">
                                <h3 className="text-2xl md:text-4xl font-semibold text-blue-500 mb-2 md:mb-4">
                                    {work.title}
                                </h3>
                                <h4 className="text-lg md:text-2xl text-gray-300 font-bold">
                                    {work.company}, {work.location}
                                </h4>
                                <p className="text-gray-400 mt-2  md:mt-4 md:text-xl">
                                    <b>Dates:</b> {work.dates}
                                </p>
                                <p className="text-gray-400 mt-2 md:mt-4 md:text-xl">
                                    <b>Duration:</b> {work.duration}
                                </p>
                            </div>

                            {/* Key Contributions */}
                            <div className="mb-6">
                                <h4 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4">
                                    Key Contributions
                                </h4>
                                <ul className="list-disc pl-6 space-y-2 md:space-y-3 text-gray-300 md:text-lg">
                                    {work.keyContributions.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Achievements */}
                            <div>
                                <h4 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4">Achievements</h4>
                                <ul className="list-disc pl-6 space-y-2 md:space-y-3 text-gray-300 md:text-lg">
                                    {work.achievements.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;

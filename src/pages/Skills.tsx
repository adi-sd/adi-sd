import React from "react";
import { skills } from "../data/skills";

const Skills: React.FC = () => {
    return (
        <section id="skills" className="w-full h-fit py-16 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-6 py-10">
                {/* Section Title */}
                <h2 className="text-4xl font-bold mb-10 text-blue-500 text-center font-mono">Technical Skills</h2>

                {/* Main Skills Card */}
                <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
                    {skills.map((skillSet, index) => (
                        <div key={index} className="mb-16">
                            {/* Skill Group Title */}
                            <h3 className="text-2xl font-semibold text-blue-500 mb-10 text-center tracking-wide">
                                {skillSet.category}
                            </h3>

                            {/* Skill Cards */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {skillSet.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="flex flex-col items-center justify-center text-center bg-gray-800 py-6 px-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-200"
                                    >
                                        <div className="text-5xl text-blue-500 mb-4">{skill.icon}</div>
                                        <span className="text-lg text-gray-300 font-semibold">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

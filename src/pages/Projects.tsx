import React from "react";
import { FaCode } from "react-icons/fa";
import { projects } from "../data/projects";
import { FaDisplay } from "react-icons/fa6";

const Projects: React.FC = () => {
    return (
        <section id="projects" className="w-full h-fit py-16 bg-gray-900 text-white p-5">
            <div className="container mx-auto my-10">
                {/* Section Title */}
                <h2 className="text-4xl font-bold mb-8 text-blue-500 text-center">Projects</h2>

                {/* Project Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300 flex flex-col"
                        >
                            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-2">
                                <b>Duration:</b> {project.date}
                            </p>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="mt-auto flex items-center justify-between">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-400 flex items-center gap-2"
                                >
                                    <FaCode className="text-xl" />
                                    <span>View Code</span>
                                </a>
                                {project.deploymentLink && (
                                    <a
                                        href={project.deploymentLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-400 flex items-center gap-2"
                                    >
                                        <FaDisplay className="text-xl" />
                                        <span>View Deployment</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

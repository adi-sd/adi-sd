import React from "react";
import { FaFileAlt } from "react-icons/fa";

const Home: React.FC = () => {
    return (
        <section className="w-full h-full flex flex-col md:flex-row items-center bg-gray-900 text-white overflow-hidden relative">
            {/* Text Section */}
            <div className="z-20 w-full md:w-3/4 px-8 flex flex-col gap-4 md:px-16 py-12 md:py-0 text-gray-300">
                <p className="text-lg text-blue-500 mb-4 md:text-3xl animate-fadeIn">Hi There! 👋</p>
                <h1 className="text-4xl md:text-[6rem] font-bold md:my-6 leading-tight animate-slideIn">
                    <span>I'm </span>
                    <span className="text-blue-500">Aditya Dhage</span>,
                </h1>
                <h2 className="text-2xl md:text-5xl font-medium mt-2 md:mt-4 animate-fadeIn delay-100">
                    <span className="text-blue-500">Full Stack Developer</span>
                </h2>
                <p className="text-base md:text-xl mt-4 md:mt-6 max-w-lg md:max-w-4xl animate-fadeIn delay-200">
                    With a strong foundation in building scalable, user-focused software solutions.
                </p>
                <p className="text-base md:text-xl mt-2 md:mt-4 max-w-lg md:max-w-4xl animate-fadeIn delay-300">
                    Passionate about solving complex problems through technical proficiency, creative thinking, and a
                    commitment to staying ahead of emerging trends.
                </p>
                <div className="flex flex-wrap justify-start items-center gap-6 mt-8 md:mt-10 animate-fadeIn delay-400">
                    <a
                        href="/contact"
                        className="bg-blue-500 text-white px-6 py-3 md:px-10 md:py-5 rounded-lg text-lg md:text-xl font-semibold shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-600"
                    >
                        Get in Touch!
                    </a>
                    <a
                        href="/Aditya_Dhage_Resume_LinkedIn.pdf"
                        className="border border-blue-500 text-blue-500 px-6 py-3 md:px-10 md:py-5 rounded-lg text-lg md:text-xl font-semibold hover:bg-blue-500 hover:text-white shadow-lg transform transition-transform hover:scale-105 flex items-center justify-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFileAlt className="text-2xl mr-2" />
                        <span>Resume</span>
                    </a>
                </div>
            </div>

            {/* Mobile Image Section */}
            <div className="absolute top-[30vh] left-0 w-full h-[70vh] md:hidden">
                {/* Gradient Overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent z-10"
                    aria-hidden="true"
                ></div>
                <img
                    src="/Aditya_Dhage_Picture.jpg"
                    alt="Aditya Dhage"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Desktop Image Section */}
            <div className="hidden md:block relative w-3/4 h-full">
                {/* Gradient Overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900 z-10"
                    aria-hidden="true"
                ></div>
                <img
                    src="/Aditya_Dhage_Picture.jpg"
                    alt="Aditya Dhage"
                    className="absolute -top-10 left-0 w-[110%] h-[110%] object-cover"
                />
            </div>
        </section>
    );
};

export default Home;

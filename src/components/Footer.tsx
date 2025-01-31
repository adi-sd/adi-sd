import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="w-full h-[4rem] fixed bottom-0 left-0 bg-gray-800 text-white flex items-center justify-center z-30">
            <div className="container mx-auto text-center">
                © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
    size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 48 }) => {
    const fontSize = size * 0.7; // Dynamic font size based on logo size

    return (
        <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{ fontFamily: "'Comfortaa', sans-serif" }} // Reverted font
        >
            {/* Sun Animation */}
            <motion.div
                className="relative flex items-center justify-center"
                style={{ width: size, height: size, backgroundColor: "#fbbf24", borderRadius: "50%" }}
                initial={{ scale: 0.5, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
                <div
                    className="absolute inset-0 rounded-full animate-pulse"
                    style={{ backgroundColor: "#fcd34d", filter: "blur(4px)" }}
                ></div>
                <div
                    className="absolute inset-0"
                    style={{ width: "80%", height: "80%", backgroundColor: "#fde68a", borderRadius: "50%" }}
                ></div>
            </motion.div>

            {/* Name Animation */}
            <motion.div
                className="flex flex-col text-center text-white"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, type: "spring" }}
                style={{ fontSize: `${fontSize}px` }}
            >
                <motion.h1
                    className="font-bold text-blue-500"
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                >
                    Aditya S. Dhage
                </motion.h1>
            </motion.div>
        </motion.div>
    );
};

export default Logo;

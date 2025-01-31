import React from "react";

interface SectionProps {
    id: string;
    children: React.ReactNode;
    backgroundColor?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, backgroundColor = "bg-white" }) => {
    return (
        <section
            id={id}
            className={`flex-shrink-0 flex items-center justify-center snap-start ${backgroundColor} w-full h-full
      `}
        >
            {children}
        </section>
    );
};

export default Section;

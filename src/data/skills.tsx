import { FaJava, FaReact, FaNodeJs, FaDatabase, FaAws, FaDocker } from "react-icons/fa";
import {
    SiTypescript,
    SiNextdotjs,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiGraphql,
    SiJenkins,
    SiKubernetes,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiAuth0,
    SiOracle,
    SiFigma,
    SiPython,
    SiGooglecloud,
    SiSpeedtest,
    SiOpenstack,
    SiApachemaven,
    SiGithub,
    SiMediapipe,
} from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { GiWaterSplash } from "react-icons/gi";

export const skills = [
    {
        category: "Programming",
        skills: [
            { name: "Java", icon: <FaJava className="text-3xl text-orange-600" /> },
            { name: "JavaScript", icon: <FaReact className="text-3xl text-yellow-400" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-3xl text-blue-500" /> },
            { name: "Python", icon: <SiPython className="text-3xl text-green-500" /> },
            { name: "Data Structures", icon: <BiNetworkChart className="text-3xl text-white" /> },
            { name: "Algorithms", icon: <SiOpenstack className="text-3xl text-blue-600" /> },
        ],
    },
    {
        category: "Web Technologies",
        skills: [
            { name: "Node.js", icon: <FaNodeJs className="text-3xl text-green-400" /> },
            { name: "React.js", icon: <FaReact className="text-3xl text-blue-500" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-3xl text-gray-500" /> },
            { name: "Auth.js", icon: <SiAuth0 className="text-3xl text-pink-600" /> },
            { name: "REST API", icon: <FaNodeJs className="text-3xl text-green-500" /> },
            { name: "GraphQL", icon: <SiGraphql className="text-3xl text-pink-400" /> },
            { name: "HTML", icon: <SiHtml5 className="text-3xl text-orange-500" /> },
            { name: "CSS", icon: <SiCss3 className="text-3xl text-blue-500" /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-3xl text-teal-500" /> },
        ],
    },
    {
        category: "Databases",
        skills: [
            { name: "SQL", icon: <FaDatabase className="text-3xl text-gray-500" /> },
            { name: "NoSQL", icon: <SiMongodb className="text-3xl text-green-500" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-3xl text-blue-500" /> },
            { name: "OracleDB", icon: <SiOracle className="text-3xl text-red-600" /> },
            { name: "Prisma ORM", icon: <SiPrisma className="text-3xl text-indigo-500" /> },
        ],
    },
    {
        category: "Cloud & Tools",
        skills: [
            { name: "Maven", icon: <SiApachemaven className="text-3xl text-red-400" /> },
            { name: "Git, Github", icon: <SiGithub className="text-3xl text-white" /> },
            { name: "Docker", icon: <FaDocker className="text-3xl text-blue-400" /> },
            { name: "Kubernetes", icon: <SiKubernetes className="text-3xl text-blue-600" /> },
            { name: "AWS (EKS, S3, EC2)", icon: <FaAws className="text-3xl text-orange-500" /> },
            { name: "GCP (App Engine, Compute Engine)", icon: <SiGooglecloud className="text-3xl text-green-500" /> },
        ],
    },
    {
        category: "Miscellaneous",
        skills: [
            { name: "CICD", icon: <SiMediapipe className="text-3xl text-red-600" /> },
            { name: "Jenkins", icon: <SiJenkins className="text-3xl text-yellow-400" /> },
            { name: "Figma", icon: <SiFigma className="text-3xl text-pink-500" /> },
            { name: "Agile", icon: <SiSpeedtest className="text-3xl text-purple-500" /> },
            { name: "Waterfall", icon: <GiWaterSplash className="text-3xl text-blue-500" /> },
        ],
    },
];

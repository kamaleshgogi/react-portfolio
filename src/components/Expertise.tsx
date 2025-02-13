import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS",
    "Gaphic Design",
    "Typoghraphy",
    "Social Media",
    "Photogtaphy",
    "Video Editing",
    "Image Manipulation",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "Photoshop",
    "Illustrator",
    "Adobe Creative Suite",
    "Figma",
    "WordPress",
    "Drupal",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faSwatchbook} size="3x"/>
                    <h3>Design</h3>
                    <p>I specialize in creating visuallyfaReactand functiona brand identities and user needs. With expertise in graphic design, branding, and marketing collateral, I deliver cohesive visual solutions that enhance user engagement and brand loyalty.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Web Development</h3>
                    <p>I have built a diverse array of web applications frfaDocker using modernct and Node.js. My proficiency spans the entire development process, from frontend design to backend integration, ensuring seamless and user-friendly digital experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Generative AI</h3>
                    <p>I leverage cutting-edge AI models to build intelligent, cloud-enabled solutions faPythoner data-driveerience includes integrating Generative AI and Large Language Models (LLMs) into pipelines to enhance functionality and innovation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
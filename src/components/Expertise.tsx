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
    "LLM",
    "LangChain",
    "ChatGPT",
    "Hugging Face",
    "Copilot",
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
                    <p>I specialize in crafting visually compelling and functional user interfaces that align with brand identities and user needs. With expertise in UI/UX design, branding, and creating intuitive digital experiences, I deliver cohesive designs that enhance usability, foster engagement, and build strong brand connections.</p>
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
                    <p>I have developed a wide range of web applications using modern technologies like React and Node.js. My expertise covers the entire development lifecycle, from crafting intuitive front-end designs to implementing seamless back-end integrations, ensuring scalable and user-friendly digital experiences.</p>
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
                    <p>I utilize advanced AI models to develop intelligent, cloud-based solutions, with expertise in integrating Generative AI and Large Language Models (LLMs) into workflows to drive innovation and enhance functionality. My approach focuses on creating data-driven systems that streamline processes, improve user experiences, and enable smarter decision-making.</p>
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
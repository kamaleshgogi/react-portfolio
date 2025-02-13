import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            
            <div className="project">
                <a href="https://github.com/kamaleshgogi/Flixmatch" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kamaleshgogi/Flixmatch" target="_blank" rel="noreferrer"><h2>FlixMatch</h2></a>
                <p>Worked on a personal project that reccomends movies that you would like based on your previous watch history and also keeps a catelog of all the movies you liked.</p>
            </div>
            <div className="project">
                <a href="https://github.com/kamaleshgogi/pokedex" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kamaleshgogi/pokedex" target="_blank" rel="noreferrer"><h2>Pokedex</h2></a>
                <p>Design and developed an interactive pokemon collections site which displays stats and keeps count of ur collected Pokemon.</p>
            </div>
            <div className="project">
                <a href="https://www.behance.net/gallery/219158795/Jump-radio-1069" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.behance.net/gallery/219158795/Jump-radio-1069" target="_blank" rel="noreferrer"><h2>Jump Radio 106.9 Brand Redesign</h2></a>
                <p>Created a complete brand guide for the redesign and worked on a hifideliy wireframe on Figma to go along with the brand redesign.</p>
            </div>
            <div className="project">
                <a href="https://www.behance.net/gallery/218829203/Atom-App-Redesign" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.behance.net/gallery/218829203/Atom-App-Redesign" target="_blank" rel="noreferrer"><h2>Atom App redesign</h2></a>
                <p>Worked on UI redesign for a ticketing company as a part of our college assignment</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Web Designer & Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Mercury Studio</h4>
            <p>
              <ul>
                <li>Designed and developed responsive websites and web apps using React, HTML/CSS, and JavaScript, alongside custom Node.js/Express APIs for dynamic functionality.</li>
                <li>Independently managed client relationships and project timelines, delivering projects on time and within budget.</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title"> Junior UI/UX Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">The Youth Herald, Ottawa</h4>
            <p>
            <ul>
                <li>Modernized landing pages, increasing user engagement by 37%, and implemented a blog strategy that boosted organic traffic by 23%.</li>
                <li>Collaborated with cross-functional teams to deliver user-centric designs and built dynamic components using React to enhance website functionality.</li>
              </ul>            
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Interactive Media Design</h3>
            <h4 className="vertical-timeline-element-subtitle">Algonquin College, Ottawa, ON</h4>
            <p>
              <ul>
                <li>Studied user experience design, front-end development, and digital marketing, gaining proficiency in Adobe Creative Suite, Figma, and WordPress.</li>
                <li>Developed a portfolio of web design projects, including a responsive e-commerce site and a mobile app prototype for a local business.</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Design Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Honeycomb, Mumbai</h4>
            <p>
              <ul>
                <li>Designed and developed a user-friendly restaurant website, aligning content with brand messaging and creating engaging features like a newsletter sign-up form.</li>
                <li>Conducted user research, wireframing, and prototyping while gaining hands-on experience in content strategy and SEO optimization.</li>
              </ul>            
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
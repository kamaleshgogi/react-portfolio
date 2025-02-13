import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQFv41l66T6ouw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709192335368?e=1744243200&v=beta&t=Lvcp52cgIiafevfEYuUuyzI9Q_qR4YAgRhxcAL760YE" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/kamaleshgogi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kamaleshgogi" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Kamalesh Gogi</h1>
          <p>Web Designer / Devloper</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/kamaleshgogi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kamaleshgogi/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;
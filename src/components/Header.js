import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import Avatar from 'react-avatar';
import profileImage from "../assets/profile_image.jpg";

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h1>
              Hi, I'm {data.name}{" "}
              <span className="wave">👋🏻</span>
            </h1>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Focused on scalable"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "systems and data"}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Avatar src={profileImage} round="15px" size="340px"/>
        </div>
      </div>
    </div>
  )
}

export default Header

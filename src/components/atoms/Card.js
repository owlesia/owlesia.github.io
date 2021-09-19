import React from "react"

const Card = ({ heading, paragraph, date, imgUrl, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content" style={{ backgroundColor: 'black' }}>
        <h1 className="header">{heading}</h1>
        <p className="text">{date}</p>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Link to Related Material
        </a>
      </div>
    </div>
  )
}

export default Card

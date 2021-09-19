import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Education = () => {
  return (
    <div className="secion" id="education">
      <div className="container">
        <div className="about-section">

          <Fade bottom cascade>
            <h1>Education</h1>
          </Fade>

          <div className="about-section-row">
            <div className="about-section-column-left">
              <h3>University of Wisconsin - Madison</h3>
              <ul>
                <li>M.S. Computer Science with Thesis</li>
                <p><span className="bold">Research Work</span> in progress!<br />
                  Advisor: <a href="https://shivaram.org/">Professor Shivaram Venkataraman</a>
                </p>
              </ul>
            </div>
            <div className="about-section-column-right">
              <h3>Madison, WI</h3>
              <p>Fall 2021 – Spring 2023<br /></p>
            </div>
          </div>

          <div className="about-section-row">
            <div className="about-section-column-left">
              <h3>Stony Brook University</h3>
              <ul>
                <li>B.S. Computer Science with Specialization in AI and Data Science</li>
                <li>B.S. Applied Mathematics and Statistics (2<sup>nd</sup> major)</li>
                <p><span className="bold">Research Work</span> at <a href="http://www.pace.cs.stonybrook.edu/">
                  Performance Analysis of Computer Systems (PACE) Lab</a><br />
                  Advisor: <a href="https://www3.cs.stonybrook.edu/~anshul/">Professor Anshul Gandhi</a>
                </p>
                <p>
                  Assisted with the research on the use of variability to reduce latency in web applications.
                  Consider a server consisting of a single CPU that serves a queue of jobs on a first-come-first-served basis.
                  The server’s response time is a sum of time the job spent in queue (arrival time) and the time it takes for the CPU to process the job (service time).
                  In an attempt to reduce response time, people usually focus on mean service time.
                  However, there exists a different approach that focuses on squared coefficient of variation for the distribution of service time.
                </p>
              </ul>
            </div>
            <div className="about-section-column-right">
              <h3>Stony Brook, NY</h3>
              <p>Fall 2017 – Spring 2020<br /><i>Summa Cum Laude, GPA: 3.91</i></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Education

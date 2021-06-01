import React from 'react'

const About = () => {
  return (
    <>
      <div className="my-5">
        <h1 className=" service-name text-center">ABOUT</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div class="work-experience">
              <h1 class="mt-5">HI THERE I'M SIDHARTH</h1>
              <h3 class="subhead mt-4">"An average programmer looking for a responsibility of position in an organization where I can learn and use my previous learning and skills for organization's as well as individual growth..."</h3>
              {/* <button className="resume btn-resume">
                <a onClick="resumeTab(this)" href="D:\react-webpage\webpage\src\data\V_SIDHARTH_RESUME_FRESHER.pdf" name="data/V_SIDHARTH_RESUME_FRESHER.pdf">Resume</a>
              </button> */}
              <h1 className="mt-5">WORK-EXPERIENCE</h1>
              <span id="company-details">MERN Developer Intern [Jan2021-Present]</span>
              <br/>
              <span id="company-name">Codiotic Technologies Private Limited |Indore</span>
            </div>

            <div className="tech-info mt-5">
              <h1 class="mt-5">TECH-INFO</h1>
              <span className="head">Languages</span>
              <br />
              <div className="lang mt-3">
                <button type="button" className="btn btn">Java</button>
                <button type="button" className="btn btn ml-3">JavaScript</button>
              </div>
              <br />
              <span className="head ">Front-End</span>
              <br />
              <div className="front">
                <button type="button" className="btn btn mt-3">HTML</button>
                <button type="button" className="btn btn mt-3 ml-3">CSS</button>
                <button type="button" className="btn btn mt-3 ml-3">Bootstrap</button>
                <button type="button" className="btn btn mt-3 ml-3">JavaScript</button>
                <button type="button" className="btn btn mt-3 ml-3">JQuery</button>
                <button type="button" className="btn btn mt-3 ml-3">React JS</button>
                <button type="button" className="btn btn mt-3 ml-3">Adobe XD</button>
                <button type="button" className="btn btn mt-3 ml-3">Basics Of Material UI</button>
              </div>
              <br />
              <span className="head">Back-End</span>
              <br />
              <div className="back">
                <button type="button" className="btn btn mt-3">Node JS</button>
                <button type="button" className="btn btn mt-3 ml-3">Express JS</button>
              </div>
              <br />
              <span className="head">Tools</span>
              <br />
              <div className="tools">
                <button type="button" className="btn btn mt-3">Amazon EC2</button>
                <button type="button" className="btn btn mt-3 ml-3">Postman</button>
                <button type="button" className="btn btn mt-3 ml-3">GitHub</button>
                <button type="button" className="btn btn mt-3 ml-3">Adobe XD</button>
                <button type="button" className="btn btn mt-3 ml-3">Visual Studio Code</button>
              </div>
            </div>

            <div className="education">
              <h1 class="mt-5">EDUCATION</h1>
              <span className="degree-text">Master Of Computer Application[2019-2021]</span>
              <br />
              <span className="institute-text">Medicaps University,Indore |(M.P.)</span>
              <br />
              <span className="degree-text">Bachelor Of Computer Application[2016-2019]</span>
              <br />
              <span className="institute-text">Chandigarh Group Of Colleges,Mohali |(P.B)</span>
              <br />
              <span className="degree-text">Higher Secondary[2015-2016]</span>
              <br />
              <span className="institute-text">Capt. Amol Kalia Fert Model Sr. Sec School, |Punjab</span>
              <br />
              <span className="degree-text">High School[2013-2014]</span>
              <br />
              <span className="institute-text">Capt. Amol Kalia Fert Model Sr. Sec School, |Punjab</span>
            </div>

            <div className="project1">
              <h1 class="mt-5">PROJECTS</h1>
              <span className="project-head">1) Blogging Website:- </span>
              <br />
              <div className="tech-info">
              <h2 class="mt-4">Technologies Used</h2>
              <button type="button" className="btn btn ml-3 mt-2">React JS</button>
              <button type="button" className="btn btn ml-3 mt-2">Node JS</button>
              <button type="button" className="btn btn ml-3 mt-2">Express JS</button>
              <button type="button" className="btn btn ml-3 mt-2">Material UI</button>
              <button type="button" className="btn btn ml-3 mt-2">Mongo DB</button>
              </div>
              <br />
              <h2 class=" desc mt-1">Description</h2>
              <span className="project-subhead">Developed a web-app which allows users to write/read blogs, and share their learning and experiences.</span>
            </div>

            <div className="project2 mt-5">
              <span className="project-head"> 2) Property Site:- </span>
              <br />
              <div className="tech-info">
              <h2 class="mt-4">Technologies Used</h2>
              <button type="button" className="btn btn ml-3 mt-2">HTML</button>
              <button type="button" className="btn btn ml-3 mt-2">CSS</button>
              <button type="button" className="btn btn ml-3 mt-2">PHP</button>
              <button type="button" className="btn btn ml-3 mt-2">WAMP</button>
              </div>
              <br />
              <h2 class=" desc mt-1">Description</h2>
              <span className="project-subhead">A web platform that allows users to check availability of Flats.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
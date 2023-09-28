import React from "react";
import "./About.css";

function About() {
  return (
    <div className="body d-flex justify-content-center align-items-center mt-[160px]">
      <section>
        <div className="container">
          <div className="card">
            <div className="content">
              <div className="imgbx">
                {/* <img className="bire" src={bire} alt="" /> */}
              </div>
              <div className="contentbx">
                <h3>
                  Bir B Uperkoti
                  <br />
                  <span>
                    Graphic Designer
                    <br />
                    Front End Developer
                  </span>
                </h3>
              </div>
            </div>
            <ul className="sci">
              <li>
                <a
                  href="https://www.facebook.com/bir.uperkoti/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bir_uperkoti/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/BirUperkoti?fbclid=IwAR0k7MGhuI42n-KhfxyFUpApgvfoVmNsN5KbNar3jzmDbIJQqo3oxkqf0LU"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter-square"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgbx">
                {/* <img className="mama" src={mama} alt="" /> */}
              </div>
              <div className="contentbx">
                <h3>
                  Manish Rai
                  <br />
                  <span>
                    Web Designer
                    <br />
                    Full Stack Developer
                  </span>
                </h3>
              </div>
            </div>
            <ul className="sci">
              <li>
                <a
                  href="https://www.facebook.com/manish.raee.92"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/raii.manish/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/manishthl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

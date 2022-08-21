import React from "react";
import Tilt from 'react-tilt'
import project4 from '../assets/img/project4.png'
import Project1 from '../assets/img/project1.png'
import project2 from '../assets/img/project2.png'
import project3 from '../assets/img/project3.png'
import project5 from '../assets/img/project5.png'
import project6 from '../assets/img/project6.png'
import Button from 'react-bootstrap/Button';


const Project = ()=>{
    return(
        <section id="projects">
        <div class="container">
          <div class="project-wrapper">
            <h2 class="section-title dark-blue-text">Projects</h2>
            <div class="row">
              <div class="col-lg-4 col-sm-12">
                <div class="project-wrapper__text load-hidden mypos">
                  <h3 class="project-wrapper__text-title">Password Manager</h3>
                  <div>
                    <p class="mb-4">
                      It is a python program which store yours id and passsword securly. It encrypt yours data and store it which can only be unlock by a master password.
                    </p>
                  </div>
                  <Button variant="outline-secondary" href="https://github.com/Anishsir404/password_manager">See Live</Button>{'     '}
                  <Button variant="outline-secondary" href="https://github.com/Anishsir404/password_manager" >Source Code</Button>{' '}


                </div>
              </div>
              <div class="col-lg-8 col-sm-12 spacing">
                <div class="project-wrapper__image load-hidden">
                  <a rel="noreferrer" href="https://github.com/Anishsir404/password_manager" target="_blank">
                    <div
                      data-tilt
                      data-tilt-max="4"
                      data-tilt-glare="true"
                      data-tilt-max-glare="0.5"
                      class="thumbnail rounded js-tilt"
                      style={{paddingLeft:'15px'}}
                    >
                    <Tilt className="Tilt myedit" options={{ max : 15}} style={{height:200}} ><div className="Tilt-inner"><img
                        alt="Project"
                        class="img-fluid"
                        src={Project1}
                      /> </div>
                    </Tilt>

                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4 col-sm-12 spacing">
                <div class="project-wrapper__text load-hidden mypos">
                  <h3 class="project-wrapper__text-title">Background Gradient Generater.</h3>
                  <div>
                    <p class="mb-4">
                      This website will help you to get yours prefered background color in easy and fast. It is written in HTML ,CSS and JavaScript.
                    </p>
                  </div>
                  <Button variant="outline-secondary" href="https://anishsir404.github.io/gradient-background/">See Live</Button>{'     '}
                  <Button variant="outline-secondary" href="https://github.com/Anishsir404/gradient-background">Source Code</Button>{' '}
                </div>
              </div>
              <div class="col-lg-8 col-sm-12 spacing">
                <div class="project-wrapper__image load-hidden">
                  <a rel="noreferrer" href="https://anishsir404.github.io/gradient-background/" target="_blank">
                    <div
                      data-tilt
                      data-tilt-max="4"
                      data-tilt-glare="true"
                      data-tilt-max-glare="0.5"
                      class="thumbnail rounded js-tilt"
                      style={{paddingLeft:'15px'}}

                    >
                      <Tilt className="Tilt myedit" options={{ max : 15}} style={{height:200}} ><div className="Tilt-inner"><img
                        alt="Project"
                        class="img-fluid"
                        src={project2}
                      /> </div>
                    </Tilt>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-sm-12 spacing">
                <div class="project-wrapper__text load-hidden mypos">
                  <h3 class="project-wrapper__text-title">Robo Friend</h3>
                  <div>
                    <p class="mb-4">
                      This was my first project with react. It has properties to search and see the result at the same time. This is the project for fun and learning.
                    </p>
                  </div>
                  <Button variant="outline-secondary" href="https://anishsir404.github.io/Robo/">See Live</Button>{'     '}
                  <Button variant="outline-secondary" href="https://github.com/Anishsir404/Robo" >Source Code</Button>{' '}

                </div>
              </div>
              <div class="col-lg-8 col-sm-12 spacing">
                <div class="project-wrapper__image load-hidden">
                  <a rel="noreferrer" href="https://anishsir404.github.io/Robo/" target="_blank">
                    <div
                      data-tilt
                      data-tilt-max="4"
                      data-tilt-glare="true"
                      data-tilt-max-glare="0.5"
                      class="thumbnail rounded js-tilt"
                      style={{paddingLeft:'15px'}}
                    >
                      <Tilt className="Tilt myedit" options={{ max : 15}} style={{height:200}} ><div className="Tilt-inner"><img
                        alt="Project"
                        class="img-fluid"
                        src={project3}
                      /> </div>
                    </Tilt>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4 col-sm-12 spacing">
                <div class="project-wrapper__text load-hidden mypos">
                  <h3 class="project-wrapper__text-title">Sample Portfolia</h3>
                  <div>
                    <p class="mb-4">
                      This was my first portfolia which was made with bootstrap. During this project i learn to use bootstrap and css to its max.
                    </p>
                  </div>
                  <Button variant="outline-secondary" href="https://anishsir404.github.io/Anish-portfolia/">See Live</Button>{'     '}
                  <Button variant="outline-secondary" href="https://github.com/Anishsir404/Anish-portfolia" >Source Code</Button>{' '}

                </div>
              </div>
              <div class="col-lg-8 col-sm-12 spacing">
                <div class="project-wrapper__image load-hidden">
                  <a rel="noreferrer" href="https://anishsir404.github.io/Anish-portfolia/" target="_blank">
                    <div
                      data-tilt
                      data-tilt-max="4"
                      data-tilt-glare="true"
                      data-tilt-max-glare="0.5"
                      class="thumbnail rounded js-tilt"
                      style={{paddingLeft:'15px'}}
                    >
                      <Tilt className="Tilt myedit" options={{ max : 15}} style={{height:200}} ><div className="Tilt-inner"><img
                        alt="Project"
                        class="img-fluid"
                        src={project4}
                      /> </div>
                    </Tilt>
                    </div>
                  </a>
                </div>
              </div>
            </div>


            <div class="row">
              <div class="col-lg-4 col-sm-12 spacing">
                <div class="project-wrapper__text load-hidden mypos">
                  <h3 class="project-wrapper__text-title">Face Detection</h3>
                  <div>
                    <p class="mb-4">
                      This was my first big project which has server and database in its echo system. It is written in with node and it detect face from a image which is given in url form.
                    </p>
                  </div>
                  <Button variant="outline-secondary" href="https://github.com/Anishsir404/face-detection-fontent">See Live</Button>{'     '}
                  <Button variant="outline-secondary" href="https://github.com/Anishsir404/face-detection-fontent" >Source Code</Button>{' '}

                </div>
              </div>
              <div class="col-lg-8 col-sm-12 spacing">
                <div class="project-wrapper__image load-hidden">
                  <a rel="noreferrer" href="https://github.com/Anishsir404/face-detection-fontent" target="_blank">
                    <div
                      data-tilt
                      data-tilt-max="4"
                      data-tilt-glare="true"
                      data-tilt-max-glare="0.5"
                      class="thumbnail rounded js-tilt"
                      style={{paddingLeft:'15px'}}
                    >
                      <Tilt className="Tilt myedit" options={{ max : 15}} style={{height:200}} ><div className="Tilt-inner"><img
                        alt="Project"
                        class="img-fluid"
                        src={project5}
                      /> </div>
                    </Tilt>
                    </div>
                  </a>
                </div>
              </div>
            </div>


            <div class="row">
              <div class="col-lg-4 col-sm-12 spacing">
                <div class="project-wrapper__text load-hidden mypos">
                  <h3 class="project-wrapper__text-title">Quote Generator</h3>
                  <div>
                    <p class="mb-4">
                      This website is make to get rendom quote and we can share it in twitter also.
                    </p>
                  </div>
                  <Button variant="outline-secondary" href="https://anishsir404.github.io/Quote-generator/">See Live</Button>{'     '}
                  <Button variant="outline-secondary" href="" >Source Code</Button>{' '}

                </div>
              </div>
              <div class="col-lg-8 col-sm-12 spacing">
                <div class="project-wrapper__image load-hidden">
                  <a rel="noreferrer" href="https://anishsir404.github.io/Quote-generator/" target="_blank">
                    <div
                      data-tilt
                      data-tilt-max="4"
                      data-tilt-glare="true"
                      data-tilt-max-glare="0.5"
                      class="thumbnail rounded js-tilt"
                      style={{paddingLeft:'15px'}}
                    >
                      <Tilt className="Tilt myedit" options={{ max : 15}} style={{height:200}} ><div className="Tilt-inner"><img
                        alt="Project"
                        class="img-fluid"
                        src={project5}
                      /> </div>
                    </Tilt>
                    </div>
                  </a>
                </div>
              </div>
            </div>


            <div class="row">
              <div class="col-lg-4 col-sm-12 spacing">
                <div class="project-wrapper__text load-hidden mypos">
                  <h3 class="project-wrapper__text-title">Bash Script</h3>
                  <div>
                    <p class="mb-4">
                      I have written some bash script which can encrypt and decrypt the message using symetric and asymatric encryption. There is also a script which can be used to scan devices in your network.
                    </p>
                  </div>
                  <Button variant="outline-secondary" href="https://github.com/Anishsir404/scanner_bash">See Live</Button>{'     '}
                  <Button variant="outline-secondary" href="https://github.com/Anishsir404/Encryption-Decryption" >Source Code</Button>{' '}

                </div>
              </div>
              <div class="col-lg-8 col-sm-12 spacing">
                <div class="project-wrapper__image load-hidden">
                  <a rel="noreferrer" href="https://github.com/Anishsir404/Encryption-Decryption" target="_blank">
                    <div
                      data-tilt
                      data-tilt-max="4"
                      data-tilt-glare="true"
                      data-tilt-max-glare="0.5"
                      class="thumbnail rounded js-tilt"
                      style={{paddingLeft:'15px'}}
                    >
                      <Tilt className="Tilt myedit" options={{ max : 15}} style={{height:200}} ><div className="Tilt-inner"><img
                        alt="Project"
                        class="img-fluid"
                        src={project6}
                      /> </div>
                    </Tilt>
                    </div>
                  </a>
                </div>
              </div>
            </div>






          </div>
        </div>
      </section>
    )
}

export default Project;
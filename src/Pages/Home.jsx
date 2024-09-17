import Navbar from "../Components/Navbar";
import hi from '../assets/icons/hi.png'
import skill1 from '../assets/icons/Html.png'
import skill2 from '../assets/icons/CSS.png'
import skill3 from '../assets/icons/JavaScript.png'
import skill4 from '../assets/icons/React.png'
import skill5 from '../assets/icons/angular.png'
import skill6 from '../assets/icons/Next.png'
import skill7 from '../assets/icons/NodeJs.png'
import skill8 from '../assets/icons/figma.png'
import skill9 from '../assets/icons/bootstrap.png'
import skill10 from '../assets/icons/taiwind.png'
import skill11 from '../assets/icons/mysql.png'
import skill12 from '../assets/icons/Mongodb.png'
import InstituteImg1 from '../assets/icons/Ezitech.png'
import InstituteImg2 from '../assets/icons/Eziline.png'
import Project1 from '../assets/icons/project1.jpg'
import Project2 from '../assets/icons/project2.jpg'
import Project3 from '../assets/icons/project3.jpg'
import profileImage from '../assets/Images/IMG_20240812_001857.jpg'
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <div className="Top_Section">
        <Navbar />
      </div>
      <div className="Hero_Section">
        <div className="container heroSection">
          <div className="row py-5">
            <div className="col-lg-6 d-flex justify-content-around">
              <div className="WelcomeText">
                <div className="py-2">
                  <h1>Hi, I'm Muhammad Hamza,<img src={hi} alt="" /></h1>
                  <p>A Front-End Web Developer. I specialize in creating responsive, interactive, and modern web applications using technologies like HTML, CSS, JavaScript, Bootstrap, React.js, and more. My passion is to turn ideas into digital solutions with clean, efficient code. Explore my work below!</p>
                </div>
                <div className="d-flex">
                  <i class="bi bi-geo-alt-fill"></i>
                  <p className="px-1">Rawalpindi Punjab Pakistan</p>
                </div>
                <div className="py-2">
                  <a href="http://"><i class="bi bi-github"></i></a>
                  <a href="http://"><i class="bi bi-linkedin px-3"></i></a>
                  <a href="http://"><i class="bi bi-facebook "></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-around">
              <div className="Profile">
                <img src={profileImage} className="img-fluid" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Skill_Section">
        <div className="container Skills">
          <div className="row ">
            <div className="col-lg-12 d-flex justify-content-around">
              <h1 className="text-center">My Skills</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill1} className="img-fluid" alt="" srcset="" />
                <h5>HTML</h5>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill2} className="img-fluid" alt="" srcset="" />
                <h5>CSS</h5>
              </div></div>
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill3} className="img-fluid" alt="" srcset="" />
                <h5>JavaScript</h5>
              </div></div>
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill4} className="img-fluid" alt="" srcset="" />
                <h5>React js</h5>
              </div></div>
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill5} className="img-fluid" alt="" srcset="" />
                <h5>Angular</h5>
              </div></div>
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill6} className="img-fluid" alt="" srcset="" />
                <h5>Next Js</h5>
              </div></div>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill7} className="img-fluid" alt="" srcset="" />
                <h5>Node Js</h5>
              </div></div>
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill8} className="img-fluid" alt="" srcset="" />
                <h5>Figma</h5>
              </div></div>
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill9} className="img-fluid" alt="" srcset="" />
                <h5>Bootstrap</h5>
              </div></div>
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill10} className="img-fluid" alt="" srcset="" />
                <h5>Tailwind</h5>
              </div></div>
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill11} className="img-fluid" alt="" srcset="" />
                <h5>MySql</h5>
              </div></div>
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill12} className="img-fluid" alt="" srcset="" />
                <h5>Mongodb</h5>
              </div></div>
          </div>
        </div>
      </div>
      <div className="Work_Section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-around">
              <h1 className="text-center">Work Experience</h1>
            </div>
          </div>
          <div className="Institute">
            <div className="row ">
              <div className="col-lg-2 col-sm-12">
                <div className="WorkImg">
                  <h5 className="align-middle">YoungDev <span>Intern</span></h5>
                </div>
              </div>
              <div className="col-lg-10 col-sm-12">
                <div className="text">
                  <div className="textS1 justify-content-between">
                    <div className="">
                      <h5>Front End Intern</h5>
                      <p>( Remote )</p>
                    </div>
                    <div>
                      <p>Sep-2024 | Present</p>
                    </div>
                  </div>
                  <div className="textS2">
                  <p><i className="bi bi-geo-alt-fill"></i>Rawalpindi Punjab Pakistan</p>
                  </div></div></div>
            </div>
          </div>
          <div className="Institute">
            <div className="row ">
              <div className="col-lg-2 col-sm-12">
                <div className="WorkImg">
                  <img src={InstituteImg1} className="img-fluid" alt="" srcset="" />
                </div>
              </div>
              <div className="col-lg-10 col-sm-12">
                <div className="text">
                  <div className="textS1 justify-content-between">
                    <div className="">
                      <h5>Front End Intern</h5>
                      <p>( On Site )</p>
                    </div>
                    <div>
                      <p>Aug-2024 | Present</p>
                    </div>
                  </div>
                  <div className="textS2">
                  <p><i className="bi bi-geo-alt-fill"></i>Rawalpindi Punjab Pakistan</p>
                  </div></div></div>
            </div>
          </div>
          <div className="Institute">
            <div className="row ">
              <div className="col-lg-2 col-sm-12">
                <div className="WorkImg">
                  <img src={InstituteImg2} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-10 col-sm-12">
                <div className="text">
                  <div className="textS1 justify-content-between">
                    <div className="">
                      <h5>Front End Intern</h5>
                      <p>( On Site )</p>
                    </div>
                    <div>
                      <p>Aug-2024 | Present</p>
                    </div>
                  </div>
                  <div className="textS2">
                  <p><i className="bi bi-geo-alt-fill"></i>Rawalpindi Punjab Pakistan</p>
                  </div></div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="Project_Section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-around">
              <h1>Projects</h1>
            </div>
          </div>
          <div className="projectItem">
            <div className="row">
              <div className="col-lg-5 col-md-12 p-0">
                <div className="ProjectImg">
                  <img src={Project1} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-7 col-md-12 p-0">
                <div className="Projecttext">
                  <div className="d-flex justify-content-between">
                    <h5>King (Modern E-Commerce Website Project)</h5>
                    <p>On Going</p>
                  </div>
                  <div>
                    <p>Develop a modern e-commerce website using React, HTML, CSS, and JavaScript, showcasing a stylish clothing and accessories collection. The site will feature a responsive design with a dynamic hero section, smooth navigation, and interactive elements. Users can browse new arrivals, view collections, and take advantage of sales promotions. Key libraries like React Router and CSS frameworks will be utilized to enhance functionality. The site will also support multiple languages and currencies, providing an engaging shopping experience.</p>
                  </div>
                  <div>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>Bootstrap</li>
                      <li>React Js</li>
                      <li>Material UI</li>
                      <li>Animation</li>
                      <li>Responsivnes</li>
                    </ul>
                  </div>
                  <div>
                    <a href=""><i class="bi bi-box-arrow-up-right px-1" />Live Link</a><br />
                    <a href=""><i class="bi bi-github px-1" />GitHub Repo Link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projectItem">
            <div className="row">
              <div className="col-lg-7 col-md-12 p-0">
                <div className="Projecttext">
                  <div className="d-flex justify-content-between">
                    <h5>King (Modern E-Commerce Website Project)</h5>
                    <p>On Going</p>
                  </div>
                  <div>
                    <p>Develop a modern e-commerce website using React, HTML, CSS, and JavaScript, showcasing a stylish clothing and accessories collection. The site will feature a responsive design with a dynamic hero section, smooth navigation, and interactive elements. Users can browse new arrivals, view collections, and take advantage of sales promotions. Key libraries like React Router and CSS frameworks will be utilized to enhance functionality. The site will also support multiple languages and currencies, providing an engaging shopping experience.</p>
                  </div>
                  <div>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>Bootstrap</li>
                      <li>React Js</li>
                      <li>Material UI</li>
                      <li>Animation</li>
                      <li>Responsivnes</li>
                    </ul>
                  </div>
                  <div>
                    <a href="https://ahanafittnes.netlify.app/"><i class="bi bi-box-arrow-up-right px-1" />Live Link</a><br />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 p-0">
                <div className="ProjectImg">
                  <img src={Project2} className="img-fluid" alt="" />
                </div>
              </div>
            </div></div>
          <div className="projectItem">
            <div className="row ">
              <div className="col-lg-5 col-md-12 p-0">
                <div className="ProjectImg">
                  <img src={Project3} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-7 col-md-12 p-0">
                <div className="Projecttext">
                  <div className="d-flex justify-content-between">
                    <h5>King (Modern E-Commerce Website Project)</h5>
                    <p>On Going</p>
                  </div>
                  <div>
                    <p>Develop a modern e-commerce website using React, HTML, CSS, and JavaScript, showcasing a stylish clothing and accessories collection. The site will feature a responsive design with a dynamic hero section, smooth navigation, and interactive elements. Users can browse new arrivals, view collections, and take advantage of sales promotions. Key libraries like React Router and CSS frameworks will be utilized to enhance functionality. The site will also support multiple languages and currencies, providing an engaging shopping experience.</p>
                  </div>
                  <div>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>Bootstrap</li>
                      <li>React Js</li>
                      <li>Material UI</li>
                      <li>Animation</li>
                      <li>Responsivnes</li>
                    </ul>
                  </div>
                  <div>
                    <a href="https://fineloans.netlify.app/"><i class="bi bi-box-arrow-up-right px-1" />Live Link</a><br />
                  </div>
                </div>
              </div>
            </div>
          </div></div>
      </div>
      <div className="Footer_Section">
        <Footer />
      </div>
    </>
  )
}

export default Home;

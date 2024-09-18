import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Project1 from '../assets/icons/Project1.jpg'
import Project2 from '../assets/icons/project2.jpg'
import Project3 from '../assets/icons/Project3.jpg'
import Project4 from '../assets/icons/Project4.jpg'


function Projects() {

  return (
    <>
      <div className="Top_Section">
        <Navbar />
      </div>
      <div className="Hero_Section">
        <div className="container">
          <div className="Skillsinfo">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1>Projects</h1>
                <p>In this section, I am excited to showcase a collection of projects that demonstrate my expertise as a front-end web developer. These projects highlight my ability to create dynamic, responsive, and user-centered websites and applications. From building interactive user interfaces to implementing robust functionality with modern web technologies, each project reflects my passion for coding and problem-solving.

                  The projects below cover a variety of industries and use cases, including e-commerce platforms, portfolio websites, and more. I have utilized a range of tools and technologies such as HTML, CSS, JavaScript, React.js, and various back-end solutions like Node.js, MySQL, and MongoDB. Through these experiences, I’ve gained valuable insights into performance optimization, responsive design, and accessibility to ensure that my solutions not only meet but exceed user expectations..</p>
              </div>
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
              <div className="col-lg-5 col-md-12 p-0">
                <div className="ProjectImg">
                  <img src={Project2} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-7 col-md-12 p-0">
                <div className="Projecttext">
                  <div className="d-flex justify-content-between">
                    <h5>Ahana ( Fittness And Training Website Project)</h5>
                    <p>23 Aug 2024 | 30 Aug 2024</p>
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
                    <a href="https://github.com/MuhammadHamza30/Ahana_Fittnes"><i class="bi bi-github px-1" />GitHub Repo Link</a>

                  </div>
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
                    <h5>Finloans (Loans  Website Project)</h5>
                    <p>15 Aug 2024 | 22 Aug 2024</p>
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
                    <a href="https://github.com/MuhammadHamza30/Finloans"><i class="bi bi-github px-1" />GitHub Repo Link</a>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projectItem">
            <div className="row ">
              <div className="col-lg-5 col-md-12 p-0">
                <div className="ProjectImg">
                  <img src={Project4} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-7 col-md-12 p-0">
                <div className="Projecttext">
                  <div className="d-flex justify-content-between">
                    <h5>Hepta ( Tours And Travels Website)</h5>
                    <p>7 Aug 2024 | 14 Aug 2024</p>
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
                    <a href="https://fantastic-choux-35e7a4.netlify.app/"><i class="bi bi-box-arrow-up-right px-1" />Live Link</a><br />
                    <a href="https://github.com/MuhammadHamza30/hepta"><i class="bi bi-github px-1" />GitHub Repo Link</a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer_Section">
        <Footer />
      </div>
    </>
  )
}
export default Projects;
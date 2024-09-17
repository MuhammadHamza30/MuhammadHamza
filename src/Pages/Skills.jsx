import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
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


function Skills() {

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
                <h1>My Skills</h1>
                <p>As a front-end web developer, I possess a strong foundation in core technologies such as HTML, CSS, and JavaScript, which I use to create responsive, user-friendly websites. I have experience building dynamic, scalable applications with React.js, Angular, and Next.js, ensuring smooth user experiences. On the back-end, I leverage Node.js to handle server-side logic, and I work with databases like MySQL and MongoDB for efficient data management. I also incorporate design principles using tools like Figma and frameworks like Bootstrap and Tailwind to deliver visually appealing and functional interfaces. In this section, you will see my proficiency in these skills, visually represented through progress bars, reflecting my growth and expertise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Skill_Section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-0 d-flex justify-content-around">
              <h1>Progress</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 progress_Section">
            <img src={skill1} className="img-fluid" alt="" />
            <h2>HTML</h2>
              <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-danger" style={{width:" 90%"}}>90%</div>
              </div>
              <img src={skill2} className="img-fluid" alt="" />
              <h2>CSS</h2>
              <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar " style={{width:" 90%"}}>90%</div>
              </div>
              <img src={skill3} className="img-fluid" alt="" />
              <h2>JavaScript</h2>
              <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-warning text-dark" style={{width:" 90%"}}>90%</div>
              </div>
              <img src={skill4} className="img-fluid" alt="" />
              <h2>React Js</h2>
              <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-info" style={{width:" 70%"}}>70%</div>
              </div>
              <img src={skill5} className="img-fluid" alt="" />
              <h2>Angular</h2>
              <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-danger" style={{width:" 40%"}}>40%</div>
              </div>
              <img src={skill6} className="img-fluid" alt="" />
              <h2>Next Js</h2>
              <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-dark" style={{width:" 40%"}}>40%</div>
              </div>
              <img src={skill7} className="img-fluid" alt="" />
              <h2>Node Js</h2>
              <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar " style={{width:" 40%", background:"green"}}>40%</div>
              </div>
              <img src={skill12} className="img-fluid" alt="" />
              <h2>MongoDB</h2>
              <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar " style={{width:" 40%" , background:"brown"}}>40%</div>
              </div>
              <img src={skill11} className="img-fluid" alt="" />
              <h2>MySQL</h2>
              <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar " style={{width:" 70%" , background:"orange"}}>70%</div>
              </div>
              <img src={skill9} className="img-fluid" alt="" />
              <h2>Bootstarp</h2>
              <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar " style={{width:"90%" , background:"purple"}}>90%</div>
              </div>
              <img src={skill10} className="img-fluid" alt="" />
              <h2>Tailwind</h2>
              <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-onfo" style={{width:" 40%"}}>40%</div>
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
export default Skills;
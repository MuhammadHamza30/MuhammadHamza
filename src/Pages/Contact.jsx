import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contact(){

  return(
    <>
          <div className="Top_Section">
          <Navbar />
          </div>
          <div className="Hero_Section">
        <div className="container">
          <div className="Skillsinfo">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1>Contact Me</h1>
                <p>
                Feel free to reach out to me through any of the following contact methods. You can give me a call at the provided phone number, send an email for inquiries or collaborations, or visit my location for a more direct meeting. I'm always open to discussing exciting projects or addressing any questions you may have.</p>
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
export default Contact;
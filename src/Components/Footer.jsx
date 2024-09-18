import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/Images/logo.png'
import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";


function Footer() {
  return (
    <div className="footer">
      <div className="container" >
        <div className="row S1">
          <div className="col-md-6 col-lg-6" data-aos="fade-right">
            <img src={logo} className="pb-2"alt="" />
            <p><i className='bi bi-envelope-fill' /> muhammadhamza4u2020@gmail.com<br /><br />
              <i className='bi bi-phone-fill' /> +92336-1192391<br /><br />
              <i className='bi bi-geo-alt-fill' /> Rawalpindi Punjab Pakistan</p>
            <div className=''>
              <div className='iconslist d-flex p-0 pt-5'>
                <div><a href="https://www.facebook.com/muhammad.hamza.SE"><FaFacebookF size={25} /></a></div>
                <div><a href=""><FaTwitter size={25} /></a></div>
                <div><a href="https://www.linkedin.com/in/muhammadhamza30"><FaLinkedin size={25} /></a></div>
                <div><a href=""><FaInstagram size={25} /></a></div>
                <div><a href="https://www.github.com/MuhammadHamza30"><FaGithub size={25} /></a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pt-5" data-aos="fade-up">
            <h1 className=''>Services</h1>
            <ul className='p-0'>
              <li className="ClassName"><a href="">UI/Ux Design</a></li>
              <li className="ClassName"><a href="">Web Design</a></li>
              <li className="ClassName"><a href="">Web Developmaent</a></li>
              <li className="ClassName"><a href="">Documentation</a></li>
              <li className="ClassName"><a href="">Product</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 pt-5" data-aos="fade-up">
            <h1 className=''>Useful Links</h1>
            <ul className='p-0'>
              <li className="ClassName"><a href="">About</a></li>
              <li className="ClassName"><a href="">Skills</a></li>
              <li className="ClassName"><a href="">Projects</a></li>
              <li className="ClassName"><a href="">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='row S2 text-center mx-5'>
        <div className='col-12'>
          <p> Copyright © 2024 All rights reserved | This is made with <FaHeart /> by Muhammad Hamza</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
import { NavLink } from "react-router-dom";
import toggleicon from '../assets/icons/toggleicon.jpg'
import logo from '../assets/Images/logo.png';

function Navbar() {

  const handleDownload = () => {

    const fileUrl = "../assets/Images/MuhammadHamzaResume.pdf"; // Replace with your file path
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "MuhammadHamzaResume.pdf"; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <img src={logo} className="logo" alt="" srcset="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""><img className="navbar_icon" src={toggleicon} alt="" /></span>
                </button>
                <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={'/About'}>About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={'/Skills'}>Skills</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={'/Projects'}>Projects</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={'/Contact'}>Contact</NavLink>
                    </li>
                  </ul>
                </div>
                <div>
                <button onClick={handleDownload} className="Download p-2">
                  Download My CV
                </button></div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar;

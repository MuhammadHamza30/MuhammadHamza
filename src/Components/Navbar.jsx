import { NavLink } from "react-router-dom";
import toggleicon from '../assets/icons/toggleicon.jpg'
import logo from '../assets/Images/logo.png';

function Navbar() {

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
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;

import { useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";

const NavBar = ({ scrollToFooter }) => {
  const navigate = useNavigate();
  const clerk = useClerk();

  const handleNavigation = async () => {
    try {
      await clerk.openSignIn();
      const user = clerk.user;
      if (user) {
        navigate("/services");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFooterNavigation = () => {
    scrollToFooter();
  };

  const user = clerk.user;
  const titanicLink = user ? "/" : "#";

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top container">
      <div className="container">
        <a className="navbar-brand" href={titanicLink}>
          Titanic SPA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse custom-nav" id="navbarNav">
          <div className="ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#social-media"
                  onClick={handleFooterNavigation}
                >
                  Social Media
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#services"
                  onClick={handleNavigation}
                >
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import { MdClose } from "react-icons/md"; // Importing MdClose icon from Material Design Icons

const NavBar = ({ scrollToFooter }) => {
  const navigate = useNavigate();
  const clerk = useClerk();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle navigation to services page
  const handleNavigation = async () => {
    try {
      console.log("Attempting to open sign in");
      await clerk.openSignIn(); // Opening sign-in modal
      const user = clerk.user; // Getting signed-in user
      console.log("Signed in user:", user);
      if (user) {
        navigate("/services"); // Navigating to services page if user is signed in
      }
    } catch (error) {
      console.log("Error while signing in:", error);
    }
  };

  // Function to handle navigation to footer
  const handleFooterNavigation = () => {
    console.log("Scrolling to footer");
    scrollToFooter(); // Scrolling to footer section
  };

  const user = clerk.user; // Getting signed-in user
  const titanicLink = user ? "/" : "#"; // Determining link based on user authentication status
  console.log("Titanic link:", titanicLink);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top container">
      <div className="container">
        {/* Titanic SPA logo link */}
        <a className="navbar-brand" href={titanicLink}>
          Titanic SPA
        </a>
        {/* Navbar toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <MdClose /> // Render MdClose icon when navbar is open
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>
        {/* Navbar menu */}
        <div
          className={`collapse navbar-collapse custom-nav ${
            isMenuOpen ? "show" : ""
          }`}
        >
          <div className="ml-auto">
            <ul className="navbar-nav">
              {/* About section link */}
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              {/* Social Media section link */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#social-media"
                  onClick={handleFooterNavigation}
                >
                  Social Media
                </a>
              </li>
              {/* Services section link */}
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

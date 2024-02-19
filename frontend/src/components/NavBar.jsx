// NavBar.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useClerk, SignOutButton, SignedIn } from "@clerk/clerk-react";
import { MdClose } from "react-icons/md";

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

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top container">
      <div className="container">
        <a className="navbar-brand" href="/">
          Titanic SPA
        </a>
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
        <div
          className={`collapse navbar-collapse custom-nav ${
            isMenuOpen ? "show" : ""
          }`}
        >
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
              <SignedIn>
                <li className="nav-item">
                  <a
                    href="/user-profile"
                    className="nav-link"
                    style={{ cursor: "pointer", color: "green" }}
                  >
                    Profile
                  </a>
                </li>

                <li className="nav-item">
                  <SignOutButton
                    className="nav-link"
                    style={{ cursor: "pointer", color: "orange" }}
                  />
                </li>
              </SignedIn>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

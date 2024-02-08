import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";

/**
 * SuccessPage component to handle user redirection
 */
const SuccessPage: React.FC = () => {
  // get user data from Clerk
  const { user } = useClerk();
  // navigate to different pages
  const navigate = useNavigate();

  // useEffect to check user data and redirect accordingly
  useEffect(() => {
    console.log("user:", user);
    if (user && user.primaryEmailAddress) { // Check if user and primaryEmailAddress are not null or undefined
      // list of staff emails
      const staffEmails: string[] = ["itirabrian@techie.com"];
      console.log("user.primaryEmailAddress:", user.primaryEmailAddress);
      // @ts-ignore
      if (staffEmails.includes(user.primaryEmailAddress)) {
        console.log("Redirecting to /admin-dashboard");
        navigate("/admin-dashboard");
      } else {
        console.log("Redirecting to /services");
        navigate("/services");
      }
    }
  }, [user, navigate]);
  

  // return redirecting message
  return <div>Redirecting...</div>;
};

export default SuccessPage;

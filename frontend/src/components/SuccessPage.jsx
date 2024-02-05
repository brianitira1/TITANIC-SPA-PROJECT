import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";

const SuccessPage = () => {
  const { user } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const staffEmails = ["itirabrian@techie.com"];
      if (staffEmails.includes(user.primaryEmailAddress)) {
        navigate("/admin-dashboard");
      } else {
        navigate("/services");
      }
    }
  }, [user, navigate]);

  return <div>Redirecting...</div>;
};

export default SuccessPage;

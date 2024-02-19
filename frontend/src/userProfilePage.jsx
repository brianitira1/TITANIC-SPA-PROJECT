import React from "react";
import { UserProfile } from "@clerk/clerk-react";

const UserProfilePage = () => (
  <div className="container">
    {" "}
    <div className="row justify-content-center">
      {" "}
      <div className="col-md-8">
        {" "}
        <UserProfile path="/user-profile" routing="path" />
      </div>
    </div>
  </div>
);

export default UserProfilePage;

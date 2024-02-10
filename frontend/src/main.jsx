import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ClerkProvider } from "@clerk/clerk-react";

//import dotenv from "dotenv";

//dotenv.config();


//process.env.VITE_CLERK_PUBLISHABLE_KEY
const PUBLISHABLE_KEY = "pk_test_ZWFnZXItbWFydGVuLTU1LmNsZXJrLmFjY291bnRzLmRldiQ"
  

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key, please confirm if you have one");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import App from "./App";

const domain = "dev-au06s6v025l2042v.us.auth0.com";
const clientId = "Emgdq5DSHdhtjiDcwrpkp6lCYbSHprqA";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: "http://localhost:5173", // ✅ More flexible for different environments
      }}
    >
      <BrowserRouter>
        <TaskProvider>
          <App />
        </TaskProvider>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

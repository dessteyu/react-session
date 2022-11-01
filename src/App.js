import React from "react";
import { BrowserRouter } from "react-router-dom";
import ProviderData from "./context/contextData";
import AppRoutes from "./routes";
function App() {

  return (
    <ProviderData>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ProviderData>
  );
}

export default App;

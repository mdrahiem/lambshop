import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import AppContent from "./app-content";

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </QueryClientProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));

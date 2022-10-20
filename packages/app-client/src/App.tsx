import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
} from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
// import { IYak } from "app-server";

import "./index.scss";
import Products from "./routes/products";
import { setInitData } from "./api/post";
import AppContent from "./App-content";

const client = new QueryClient();

// interface IReturnData {
//   data: IYak[];
// }

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

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { trpc } from "./api/trpc";
import { IYak } from "app-server";

import "./index.scss";
import Products from "./routes/products";

const client = new QueryClient();

interface IReturnData {
  data: IYak[];
}

const AppContent = () => {
  const hello = trpc.useQuery(["load"]) as IReturnData;
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>{JSON.stringify(hello.data)}</div>
      <Products />
    </div>
  );
};

const App = () => {
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: "http://localhost:8080/yak-shop",
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={client}>
      <QueryClientProvider client={client}>
        <AppContent />
      </QueryClientProvider>
    </trpc.Provider>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));

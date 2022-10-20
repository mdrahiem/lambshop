import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
} from "@tanstack/react-query";
// import { IYak } from "app-server";

import "./index.scss";
import Products from "./routes/products";
import { setInitData } from "./api/post";

const client = new QueryClient();

// interface IReturnData {
//   data: IYak[];
// }

const AppContent = () => {
  // const { data, refetch } = useQuery(
  //   ["load"],
  //   () =>
  //     fetch("http://localhost:8080/yak-shop/load").then((resp) => resp.json()),
  //   {
  //     enabled: false,
  //   }
  // );

  const addTodoMutation = useMutation(() => setInitData());

  // const initData = trpc.useQuery(["load"]) as IReturnData;
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      {/* <div>{JSON.stringify(initData.data)}</div> */}
      {/* {query.data?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))} */}
      {/* {JSON.stringify(data)} */}
      <button onClick={() => addTodoMutation.mutate()}>Load data</button>
      <Products />
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <AppContent />
    </QueryClientProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));

import type { FC } from "react";
import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./routes/Home";
import OrderForm from "./routes/Order-form";

function Layout() {
  return (
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav> */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

const AppContent: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="order" element={<OrderForm />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default AppContent;

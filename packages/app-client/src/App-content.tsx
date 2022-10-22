import type { FC } from "react";
import React, { lazy, Suspense } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import LoaderComponent from "./components/loader";
const Home = lazy(() => import("./routes/home"));
const OrderForm = lazy(() => import("./routes/order-page"));

function Layout() {
  return (
    <div>
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
        <Route
          index
          element={
            <Suspense fallback={<LoaderComponent />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="order"
          element={
            <Suspense fallback={<LoaderComponent />}>
              <OrderForm />
            </Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default AppContent;

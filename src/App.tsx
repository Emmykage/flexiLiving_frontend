import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/admin/Home";
import { PropertyPage } from "./pages/admin/Reviews";
import Properties from "./pages/admin/Properties";
import LandingHome from "./pages/user/home/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/reviews"
          element={
            <Layout>
              <PropertyPage />
            </Layout>
          }
        />
        <Route
          path="/properties"
          element={
            <Layout>
              <Properties />
            </Layout>
          }
        />

        <Route
          path="/"
          element={
            <Layout>
              <LandingHome />
            </Layout>
          }
        />

        <Route
          path="/reviews"
          element={
            <Layout>
              <PropertyPage />
            </Layout>
          }
        />
        <Route
          path="/properties"
          element={
            <Layout>
              <Properties />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;

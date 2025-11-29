import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/admin/Home";
import { PropertyPage } from "./pages/admin/Reviews";
import Properties from "./pages/admin/Properties";
import AdminProperties from "./pages/admin/Properties";
import LandingHome from "./pages/user/home/Home";
import PropertyDetails from "./pages/user/propertyDetails/PropertyDetails";
import AdminPropertyDetails from "./pages/admin/propertyDetails";
import ReviewDetails from "./pages/admin/ReviewsDetails";
// import
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/admin/dashboard"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/admin/reviews"
          element={
            <Layout>
              <PropertyPage />
            </Layout>
          }
        />
        <Route
          path="/admin/reviews/:id"
          element={
            <Layout>
              <ReviewDetails />
            </Layout>
          }
        />
        <Route
          path="/admin/properties"
          element={
            <Layout>
              <AdminProperties />
            </Layout>
          }
        />
        <Route
          path="/admin/properties/:id"
          element={
            <Layout>
              <AdminPropertyDetails />
            </Layout>
          }
        />
        <Route path="/" element={<LandingHome />} />
        <Route path="/admin/details/:id" element={<AdminPropertyDetails />} />
      </Routes>
    </>
  );
}

export default App;

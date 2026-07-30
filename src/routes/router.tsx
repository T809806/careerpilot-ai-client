import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Explore from "../pages/Explore/Explore";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from "./PrivateRoute";
import CareerDetails from "../pages/CareerDetails/CareerDetails";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddCareer from "../pages/AddCareer/AddCareer";
import ManageCareers from "../pages/ManageCareers/ManageCareers";
import AIRecommendation from "../pages/AIRecommendation/AIRecommendation";
import CoverLetter from "../pages/CoverLetter/CoverLetter";
import ErrorPage from "../pages/Error/ErrorPage";

const router = createBrowserRouter([

  {
    path: "/",
    element: <MainLayout />,
    
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },

{
  path: "about",
  element: <About />,
},

{
  path: "contact",
  element: <Contact />,
},
     
  {
  path: "/career/:id",
  element: (
    <PrivateRoute>
      <CareerDetails />
    </PrivateRoute>
  ),
},

{
  path: "/my-applications",
  element: (
    <PrivateRoute>
      <MyApplications />
    </PrivateRoute>
  ),
},

{
  path: "/add-career",
  element: (
    <PrivateRoute>
      <AddCareer />
    </PrivateRoute>
  ),
},

{
  path: "/manage-careers",
  element: (
    <PrivateRoute>
      <ManageCareers />
    </PrivateRoute>
  ),
},

{
  path: "/ai-recommendation",
  element: (
    <PrivateRoute>
      <AIRecommendation />
    </PrivateRoute>
  ),
},

{
  path: "/cover-letter",
  element: (
    <PrivateRoute>
      <CoverLetter />
    </PrivateRoute>
  ),
},
{
  path: "*",
  element: <ErrorPage />,
},
      
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      
      {
  element: <ProtectedRoute />,
  children: [
    {
      path: "dashboard",
      element: <Dashboard />,
    },
  ],
},
    ],
  },
]);

export default router;
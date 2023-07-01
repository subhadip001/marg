import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/landingPage/Footer";
import Home from "./pages/Home";

import About from "./pages/about/About";

import Explore from "./pages/explore/HistoricRoads";
import CulturalRoutes from "./pages/explore/CulturalRoutes";

import Identification from "./pages/identification/Identification";
import Classification from "./pages/identification/Classification";
import Risk from "./pages/identification/Risk";
import Trade from "./pages/identification/TradeRoutes";

import Heritage from "./pages/management/Heritage";
import Liability from "./pages/management/Liability";
import Policy from "./pages/management/Policy";
import Safety from "./pages/management/Safety";
import Stakeholders from "./pages/management/Stakeholders";

import NewUser from "./pages/margNetwork/NewUser";
import Research from "./pages/margNetwork/Research";
import Contributions from "./pages/margNetwork/Contributions";

import Preservation from "./pages/conservation/Preservation";
import Reconstruction from "./pages/conservation/Reconstruction";
import Rehabilitation from "./pages/conservation/Rehabilitation";
import Restoration from "./pages/conservation/Restoration";
import RailWayRoutes from "./pages/explore/RailwayRoutes";
import DetailMap from "./components/maps/DetailMap";
import MapDetailsPage from "./pages/explore/MapDetailsPage";

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "about",
          children: [
            {
              path: "themarg",
              element: <About />,
            },
            
          ],
        },
        {
          path: "explore",
          children: [
            {
              path: "culturalroutes",
              element: <CulturalRoutes />,
            },
            {
              path: "historicroutes",
              element: <Explore />,
            },
            {
              path: "railwayroutes",
              element: <RailWayRoutes />,
            },
            {
              path: "railwayroutes/details",
              element: <DetailMap />,
            },
            {
              path: "railwayroutes/detailsMap",
              element: <DetailMap />,
            },
            {
              path: "railwayroutes/details/map-point-details/:mapPointId",
              element: <MapDetailsPage />,
            },
          ],
        },
        {
          path: "identification&development",
          children: [
            {
              path: "methodology",
              element: <Identification />,
            },
            {
              path: "historicroads",
              element: <Classification />,
            },
            {
              path: "traderoutes",
              element: <Trade />,
            },
            {
              path: "routesatrisk",
              element: <Risk />,
            },
          ],
        },
        {
          path: "management",
          children: [
            {
              path: "safety",
              element: <Safety />,
            },
            {
              path: "liability",
              element: <Liability />,
            },
            {
              path: "policy",
              element: <Policy />,
            },
            {
              path: "heritagebylaws",
              element: <Heritage />,
            },
            {
              path: "keystakeholders",
              element: <Stakeholders />,
            },
          ],
        },
        {
          path: "conservation",
          children: [
            {
              path: "preservation",
              element: <Preservation />,
            },
            {
              path: "rehabilitation",
              element: <Rehabilitation />,
            },
            {
              path: "restoration",
              element: <Restoration />,
            },
            {
              path: "reconstruction",
              element: <Reconstruction />,
            },
          ],
        },
        {
          path: "themargnetwork",
          children: [
            {
              path: "newinstitutionuser",
              element: <NewUser />,
            },
            {
              path: "associatedinstitutions",
              element: <Research />,
            },
            {
              path: "networkcontributions",
              element: <Contributions />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

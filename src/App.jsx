import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import About from "./pages/about/About";
import Charter from "./pages/about/Charter";

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

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route element={<About />} /> */}
          <Route path="/about">
            {/* <Route index={true} element={<Explore />} /> */}
            <Route index={false} path="themarg" element={<About />} />
            <Route index={false} path="icomoscharter" element={<Charter />} />
          </Route>

          <Route path="/identification&development">
            {/* <Route index={true} element={<Identification />} /> */}
            <Route path="methodology" element={<Identification />} />
            <Route path="historicroads" element={<Classification />}></Route>
            <Route path="traderoutes" element={<Trade />} />
            <Route path="routesatrisk" element={<Risk />} />
          </Route>

          <Route path="/explore">
            {/* <Route index={true} element={<Explore />} /> */}
            <Route index={false} path="historicroutes" element={<Explore />} />
            <Route
              index={false}
              path="culturalroutes"
              element={<CulturalRoutes />}
            />
          </Route>

          <Route path="/conservation">
            {/* <Route index={true} element={<Explore />} /> */}
            <Route
              index={false}
              path="preservation"
              element={<Preservation />}
            />
            <Route
              index={false}
              path="rehabilitation"
              element={<Rehabilitation />}
            />
            <Route
              index={false}
              path="restoration"
              element={<Reconstruction />}
            />
            <Route index={false} path="reconstruction" element={<Restoration />} />
          </Route>

          <Route path="/management">
            {/* <Route index={true} element={<Safety />} /> */}
            <Route index={false} path="safety" element={<Safety />} />
            <Route index={false} path="liability" element={<Liability />} />
            <Route index={false} path="policy" element={<Policy />} />
            <Route index={false} path="heritagebylaws" element={<Heritage />} />
            <Route
              index={false}
              path="keystakeholders"
              element={<Stakeholders />}
            />
          </Route>

          <Route path="/themargnetwork">
            {/* <Route index={true} element={<Explore />} /> */}
            <Route
              index={false}
              path="newinstitutionuser"
              element={<NewUser />}
            />
            <Route
              index={false}
              path="associatedinstitutions"
              element={<Research />}
            />
            <Route
              index={false}
              path="networkcontributions"
              element={<Contributions />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

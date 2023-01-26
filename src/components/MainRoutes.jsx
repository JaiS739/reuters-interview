import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
const AboutLazy = lazy(() => import("./About"));

export const MainRoutes = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense fallback="loading..">
                <AboutLazy />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
};

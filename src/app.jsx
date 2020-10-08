import React from "react";
import Home from "./components/home";
import { CssBaseline } from "@material-ui/core";
import Header from "./header";
import { Router } from "react-router-dom";
import History from "./history";
import Footer from "./footer";
export default function app() {
  return (
    <>
      <CssBaseline>
        <Router history={History}>
          <Home />
          <Header />
          <Footer />
        </Router>
      </CssBaseline>
    </>
  );
}

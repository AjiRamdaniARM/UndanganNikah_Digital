import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import HalamanDepan from "./komponent/HalamanDepan";
import UndanganNikahan from "./komponent/UndanganNikahan";
import { AnimatePresence, motion} from "framer-motion";
import Header1 from "./komponent/Halaman/Header1";

const AnimatedRouter = () => {


    const location = useLocation();
    return(
      <AnimatePresence >
          <Switch location={location} key={location.pathname}>
            <Route path="/" component={HalamanDepan} exact>
              <HalamanDepan />
            </Route>
            <Route path="/UndanganNikahan" component={UndanganNikahan} exact>
              <UndanganNikahan />
            </Route>
            <Route path="/Header1" component={Header1} exact>
              <Header1 nina="syaaa" />
            </Route>
          </Switch>
      </AnimatePresence>
    )
}
export default AnimatedRouter;
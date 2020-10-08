import Beds from "./components/Beds";
import Lightening from "./components/Lightening";
import Chairs from "./components/Chairs";
import Tables from "./components/Tables";
import Hero from "./components/subcomponents/hero";
import Sofa from "./components/sofa";
import Cart from "./components/cart";

import { Route, Switch } from "react-router-dom";

import React from "react";

export default function header() {
  return (
    <Switch>
      <Route path="/" component={Hero} exact />
      <Route path="/:id" component={Hero} exact />
      <Route path="/beds/:id" component={Beds} exact />
      <Route path="/lightening/:id" component={Lightening} exact />
      <Route path="/chairs/:id" component={Chairs} exact />
      <Route path="/chairs/sofa/:id" component={Sofa} exact />
      <Route path="/tables/:id" component={Tables} exact />
      <Route path="/beds/:id" component={Beds} exact />
      <Route path="/cart/:id" component={Cart} exact />
      {/* <Route path="/checkout" component={CheckOut} exact /> */}
    </Switch>
  );
}

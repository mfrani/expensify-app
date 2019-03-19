import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Work1 from "../components/Work1";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/portfolio/:id" component={Work1} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import BlogPage from "views/BlogPage/BlogPage.js";

import Post1 from "views/BlogPage/blogposts/Post1";
import Post2 from "views/BlogPage/blogposts/Post2";
import Post3 from "views/BlogPage/blogposts/Post3";
import Post4 from "views/BlogPage/blogposts/Post4";
import Post5 from "views/BlogPage/blogposts/Post5";
import Post6 from "views/BlogPage/blogposts/Post6";
import Post7 from "views/BlogPage/blogposts/Post7";
import Post8 from "views/BlogPage/blogposts/Post8";
import Post9 from "views/BlogPage/blogposts/Post9";
import Post10 from "views/BlogPage/blogposts/Post10";
import Post11 from "views/BlogPage/blogposts/Post11";

import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SoundPage from "views/SoundPage/SoundPage.js"

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/aboutus" component={LandingPage} />
      <Route path="/blog" component={BlogPage} />

      <Route path="/post1" component={Post1} />
      <Route path="/post2" component={Post2} />
      <Route path="/post3" component={Post3} />
      <Route path="/post4" component={Post4} />
      <Route path="/post5" component={Post5} />
      <Route path="/post6" component={Post6} />
      <Route path="/post7" component={Post7} />
      <Route path="/post8" component={Post8} />
      <Route path="/post9" component={Post9} />
      <Route path="/post10" component={Post10} />
      <Route path="/post11" component={Post11} />

      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/uploadimage" component={LoginPage} />
      <Route path="/uploadsound" component={SoundPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

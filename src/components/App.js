import React from "react";
import NavBarRoute from "./navbar/navbarroute.js";
import Home from "./Home/Home.js";
import Blog from "./Blog/blog.js";
import MyJourney from "./myjourney/myjourney.js";

import './App.css';
import AboutMe from "./Aboutme/aboutme.js";
import MyProjects from "./project/project.js";

const App = () => {
  return (
    <div className="App">
    <React.StrictMode>
      <NavBarRoute />
      <Home />
      <AboutMe/>
      <MyJourney/>
      <MyProjects/>

      <Blog/>
    </React.StrictMode>
    </div>
  );
};

export default App;

import React, { useRef, useState } from "react";
import IntersectionObserverComponent from "./components/IntersectionObserverComponent";
import "./app.css";

import NavBar from "./components/NavBar";
import Nav from "./components/NavComponent";
import FirstPage from "./pages/FirstPage";
import AboutPage from "./pages/AboutPage";
import Courses from "./pages/CoursesPage";
import Projects from "./pages/ProjectsPage";
import Contact from "./pages/ContactPage";
import Footer from "./components/Footer";

import { CookiesMessage } from "./components/CookiesMessage.jsx";

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);


  const componentRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];



  return (

    <div className="lato-regular text-dark bg-light">

      <NavBar
        currentIndex={currentIndex}
        componentRefs={componentRefs}
      />

      <main className="relative" id="page" >

        <CookiesMessage />

        <FirstPage
          ref={componentRefs[0]}
          data-page-name="first"
        />

        <AboutPage
          ref={componentRefs[1]}
          data-page-name="about"
        />
        <Courses
          ref={componentRefs[2]}
          data-page-name="courses"
        />
        <Projects
          ref={componentRefs[3]}
          data-page-name="projects"
        />
        <Contact
          ref={componentRefs[4]}
          data-page-name="contact"
        />
        <Footer
          componentRefs={componentRefs}
          currentIndex={currentIndex}
          ref={componentRefs[5]}
          data-page-name="footer"
        />
      </main>

      <Nav
        componentRefs={componentRefs}
        currentIndex={currentIndex}
      />

      <IntersectionObserverComponent
        componentRefs={componentRefs}
        setCurrentIndex={setCurrentIndex}
      />

    </div>
  );
}

export default App;
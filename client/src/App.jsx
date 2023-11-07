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
    <>
      <NavBar
        currentIndex={currentIndex}
        componentRefs={componentRefs}
      />

      <main id="page" >

        <FirstPage
          ref={componentRefs[0]}
        />

        <AboutPage
          ref={componentRefs[1]}
        />
        <Courses
          ref={componentRefs[2]}
        />
        <Projects
          ref={componentRefs[3]}
        />
        <Contact
          ref={componentRefs[4]}
        />
        <Footer
          componentRefs={componentRefs}
          currentIndex={currentIndex}
          ref={componentRefs[5]}
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

    </>
  );
}

export default App;
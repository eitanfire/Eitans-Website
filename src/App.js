import { useEffect } from "react";
import { fetchCourses } from "./features/courses/coursesSlice";
import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import EitansIntro from "./pages/EitansIntro";
import ContactForm from "./pages/ContactForm";
import MakeAShoutOutForm from "./pages/MakeAShoutOutForm";
import CourseInterestForm from "./features/CourseInterestForm";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="read-more" element={<EitansIntro />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="shout-out" element={<MakeAShoutOutForm />} />
        <Route path="course-interest-form" element={<CourseInterestForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

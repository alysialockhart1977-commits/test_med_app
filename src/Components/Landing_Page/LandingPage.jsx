import React from "react";
import "./LandingPage.css";

// Defining the Function component LandingPage
function LandingPage() {
  return (
    <section className="hero-section">
      {/* Main hero container */}
      <div>
        <div data-aos="fade-up" className="flex-hero">

          {/* Heading */}
          <h1>
            Your Health
            <br />
            <span className="text-gradient">
              Our Responsibility
            </span>
          </h1>

          {/* Animated blob background elements */}
          <div className="blob-cont">
            <div className="blue blob"></div>
          </div>

          <div className="blob-cont">
            <div className="blue1 blob"></div>
          </div>

          {/* Description text */}
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque at
            quae ducimus. Suscipit omnis quibusdam non cum rem voluptatem!
          </h4>

          {/* Call-to-action button */}
          <a href="#services">
            <button className="button">Get Started</button>
          </a>

        </div>
      </div>
    </section>
  );
}
// Exporting the LandingPage component to be used in other parts of the application
export default LandingPage;
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import HeroImage from "../../assets/svgs/Group 9.svg";
import ArrowBtn from "../../assets/svgs/Group 10.svg";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="md:container md:mx-auto">
      <Navbar />
      <div className="homepage">
        <div className="hompage__left">
          <h2 className="homepage__title">
            The largest database for research on African languages.
          </h2>
          <p className="homepage__dec mt-4">
            At afri<span>hub</span> we offer the latest and most compelling
            research articles on various languages in Africa.
          </p>
          <div className="homepage__input mt-6">
            <input
              type="search"
              name="search"
              id="search"
              className="mt-4"
              placeholder="Search for article"
            />
            <button>Search</button>
          </div>
        </div>
        <div className="homepage__right">
          <img src={HeroImage} alt="HeroImage" />
        </div>
      </div>
      <div className="homepage__arrow mt-12">
        <img src={ArrowBtn} alt="ArrowButton" />
      </div>
    </div>
  );
}

export default HomePage;

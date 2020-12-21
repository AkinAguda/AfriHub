import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import HeroImage from "../../assets/svgs/Group 9.svg";
import ArrowBtn from "../../assets/svgs/Group 10.svg";
import Girlie from "../../assets/images/Rectangle 2.png";
import Read from "../../assets/svgs/Ellipse 7.svg";
import Download from "../../assets/svgs/Ellipse 8.svg";
import Submit from "../../assets/svgs/Ellipse 9.svg";
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
      <div className="homepage__second">
        <div className="homepage__secondImg">
          <img src={Girlie} alt="girl's display" />
        </div>
        <div className="homepage__secondDesc">
          <h2 className="homepage__secondTitle">
            Welcome to the home for research articles.
          </h2>
          <p className="homepage__secondDesc mt-4">
            Afrihub offers a large base for various articles for research on
            various African languages. We hold the various results of
            inquisitions into our understanding of our languages. At Afrihub we
            have just the right articles for you.
          </p>
          <Link to="/articles" className="homepage__secondbtn mt-12">
            <a className="homepage__secondbtn" href>
              View Articles
            </a>
          </Link>
        </div>
      </div>
      <div className="homepage__third">
        <div className="homepage__thirdDet">
          <h2 className="homepage__thirdTitle">
            What Can You Do On Afri<span>Hub?</span>
          </h2>
          <p className="homepage__thirdDesc mt-6">
            AfriHub allows you access to over 100,000 articles. Here you can
            read, download and also submit articles targeted towards research of
            African languages.
          </p>
        </div>
      </div>
      <div className="homepage__thirdOptions mt-6">
        <div className="homepage__thirdOne">
          <img src={Read} alt="Read" />
          <h2>Read</h2>
          <p>
            With over hundred thousand articles, you have access to allof them.
          </p>
        </div>
        <div className="homepage__thirdTwo">
          <img src={Download} alt="Download" />
          <h2>Download</h2>
          <p>
            Premium access allows you to download any articles of your choice.
          </p>
        </div>
        <div className="homepage__thirdThree">
          <img src={Submit} alt="Submit" />
          <h2>Submit</h2>
          <p>
            Have a lovely article about an inquiriy into our native languages?
            Share with us!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

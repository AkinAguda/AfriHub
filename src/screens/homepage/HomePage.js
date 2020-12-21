import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HeroImage from "../../assets/svgs/Group 9.svg";
import ArrowBtn from "../../assets/svgs/Group 10.svg";
import Girlie from "../../assets/images/Rectangle 2.png";
import Read from "../../assets/svgs/Ellipse 7.svg";
import Download from "../../assets/svgs/Ellipse 8.svg";
import Submit from "../../assets/svgs/Ellipse 9.svg";
import Maria from "../../assets/images/Rectangle 8.png";
import Tolu from "../../assets/images/Rectangle 9.png";
import William from "../../assets/images/Rectangle 10.png";
import Art from "../../assets/svgs/main v.svg";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home">
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
              inquisitions into our understanding of our languages. At Afrihub
              we have just the right articles for you.
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
              read, download and also submit articles targeted towards research
              of African languages.
            </p>
          </div>
        </div>
        <div className="homepage__thirdOptions mt-6">
          <div className="homepage__thirdOne">
            <img src={Read} alt="Read" />
            <h2>Read</h2>
            <p>
              With over hundred thousand articles, you have access to allof
              them.
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
        <div className="homepage__reviews mt-12">
          <div className="homepage__reviewsLeft">
            <img src={Maria} alt="Maria" className="mb-16 mr-48" />
            <img src={Tolu} alt="Tolu" className="mb-16 ml-48" />
            <img src={William} alt="William" className="mb-12 mr-48" />
          </div>
          <div className="homepage__reviewsRight">
            <h2 className="homepage__reviewsRightTitle">
              Amazing community interactions on Afri<span>hub</span>
            </h2>
            <p className="homepage__reviewsRightDesc mt-4">
              Our vast community allows for effective feedback on your articles
              giving you pointers and allows you to do the same to articles you
              read. We understand the importance of efficient feedback on our
              works and as such we are of the opinion that feed back will make
              you a better researcher.
            </p>
            <Link to="/register" className="homepage__thirdbtn mt-12">
              <a className="homepage__thirdbtn" href>
                Register
              </a>
            </Link>
          </div>
        </div>
        <div className="homepage__sub">
          <div className="sub__left">
            <img src={Art} alt="art" />
          </div>
          <div className="sub__right">
            <h2 className="sub__title">Subscribe to our Newsletter</h2>
            <p className="sub__para mt-4">
              To get updates on our latest additions and offers, subscribe to
              our newsletter!
            </p>
            <input
              type="text"
              name="text"
              id="subBtn"
              placeholder="Enter your email address"
            />
            <a href type="button" className="mt-4">
              {" "}
              Subscribe
            </a>
          </div>
        </div>
      </div>
      <div className="w-full mt-32">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;

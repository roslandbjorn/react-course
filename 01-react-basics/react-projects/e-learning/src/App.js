import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import CategoriesCard from "./components/page-components/CategoriesCard";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Title from "./components/Title";
import headerImg from "./img/header-img.png";
import { BsFillSendFill } from "react-icons/bs";
import { AiFillHtml5, AiFillPlayCircle, AiFillUnlock } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import MyList from "./Examples/MyList";
import OffersCard from "./components/page-components/OffersCard";
import { FaFileDownload, FaMapMarkedAlt } from "react-icons/fa";
import TestemonialCard from "./components/page-components/TestimonialCard";
import TestimonialsList from "./components/Lists/TestimonialsList";
import LoginForm from "./components/page-components/LoginForm";
import RegistrationForm from "./components/page-components/RegistrationForm";

const offerList = [
  {
    icon_1: <AiFillUnlock className="i" size={"2em"} />,
    title: "Tons of content",
    text: "We have over 100 000 videos",
  },
  {
    icon_1: <FaMapMarkedAlt className="i" size={"2em"} />,
    title: "Guided course",
    text: "We guide you with cources",
  },
  {
    icon_1: <FaFileDownload className="i" size={"2em"} />,
    title: "Project file downloads",
    text: "Available files",
  },
];

const moreOfferList = [
  {
    icon_1: <AiFillUnlock className="i" size={"2em"} />,
    title: "Tons of content",
    text: "We have over 100 000 videos",
  },
  {
    icon_1: <FaMapMarkedAlt className="i" size={"2em"} />,
    title: "Guided course",
    text: "We guide you with cources",
  },
  {
    icon_1: <FaFileDownload className="i" size={"2em"} />,
    title: "Project file downloads",
    text: "Available files",
  },
];

function App() {
  const [showCourseModal, setShowCourceModal] = useState(false);
  const [showOffers, setShowOffers] = useState(false);
  const [forms, setForms] = useState({
    loginForm: false,
    registrationForm: false,
  });
  const [login, setLogin] = useState(false);

  function handleStartLearningEvent() {
    setShowCourceModal(true);
  }

  function handleCancelLearningEvent() {
    setShowCourceModal(false);
  }

  function handleShowOffers() {
    setShowOffers(!showOffers);
  }

  function handleShowLoginForm() {
    setForms({ registrationForm: false, loginForm: true });
  }

  function handleCancelLoginForm() {
    setForms({ ...forms, loginForm: false });
  }

  function handleLoginFormValidation() {
    setForms({ ...forms, loginForm: false });
    setShowCourceModal(false);
    setLogin(true);
  }

  function handleShowRegistrationForm() {
    setForms({ loginForm: false, registrationForm: true });
  }

  function handleCancelRegistrationForm() {
    setForms({ ...forms, registrationForm: false });
  }

  return (
    <>
      {/* <MyList></MyList> */}
      <div className="container container-lg">
        {showCourseModal && (
          <Modal
            title={"Modal"}
            cancelEvent={handleCancelLearningEvent}
            loginEvent={!login && handleShowLoginForm}
          />
        )}

        <Header>
          <div className="header-content mb-2">
            <Title
              text={"Learn to code by watching others"}
              classes={"header-title fs-xxl mb-3"}
            />
            <p className="header-text mb-3">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
            <div className="header-btn">
              <Button
                text="Try it free 30 days"
                classes={"btn-primary text-light"}
                icon={<BsFillSendFill />}
                onClick={
                  !login
                    ? handleStartLearningEvent
                    : () => alert("You are logged in")
                }
              />
              <Button classes={"btn-secondary text-light"} text="Learn more" />
            </div>
            <img src={headerImg} alt="header-img" className="header-img" />
          </div>
        </Header>

        <main>
          <section className="categories my-4">
            <Title text="Top categories" classes={"subtile text-center"} />
            <div className="categories-container d-flex">
              <CategoriesCard
                title={"Web development"}
                icon_1={<AiFillHtml5 size={"4em"} className="icon html5" />}
                icon_2={<DiCss3Full size={"4em"} className="icon css3" />}
                icon_3={<SiJavascript size={"4em"} className="icon js" />}
                btnIcon={<AiFillPlayCircle size={"2em"} />}
                startLearningEvent={handleStartLearningEvent}
              >
                <span className="fs-lg">Learn how to build web apps with:</span>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </CategoriesCard>
            </div>
          </section>
          {/* Offers */}
          <section className="offers container container-md pd-2">
            <Title
              classes={"subtitle text-center mb-4"}
              text="Here's what you get"
            />
            <div className="offers container">
              {/* <OffersCard
                icon_1={<AiFillUnlock className="i" size={"2em"} />}
                title={"Tons of content"}
                text={
                  "We have library of 100 000 videos that will help you learn to code"
                }
              /> */}
              {offerList.map((offer, index) => (
                <OffersCard
                  key={index}
                  icon_1={offer.icon_1}
                  title={offer.title}
                  text={offer.text}
                ></OffersCard>
              ))}
              {showOffers &&
                moreOfferList.map((offer, index) => (
                  <OffersCard
                    key={index}
                    icon_1={offer.icon_1}
                    title={offer.title}
                    text={offer.text}
                  ></OffersCard>
                ))}
            </div>
            <a
              onClick={handleShowOffers}
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <h4 className="text-center text-primary mt-2">
                {showOffers ? "Less" : "More..."}
              </h4>
            </a>
          </section>
          {/* Testimonials */}
          <section className="offers container container-md pd-2">
            <Title
              classes={"subtitle text-center mb-4 pb-2"}
              text="What our users say"
            />
            <div className="testemonials-container">
              <TestimonialsList />
            </div>
          </section>
          {forms.loginForm && (
            <div className="modal">
              <div className=" modal-content fadeIn-2ms">
                <LoginForm
                  handleCancel={handleCancelLoginForm}
                  loggedIn={handleLoginFormValidation}
                  showRegister={handleShowRegistrationForm}
                />
              </div>
            </div>
          )}
          {forms.registrationForm && (
            <div className="modal">
              <div className=" modal-content fadeIn-2ms">
                <RegistrationForm
                  handleCancel={handleCancelRegistrationForm}
                  showLogin={handleShowLoginForm}
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default App;

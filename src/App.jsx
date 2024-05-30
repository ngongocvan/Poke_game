// src/App.jsx
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./App.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(null);
  const slides = [<Page1 />, <Page2 />, <Page3 />, <Page4 />];
  const [user, setUser] = useState({
    userId: "",
    username: "",
    checked: false,
  });
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentSlide < 3) setCurrentSlide((currentSlide + 1) % slides.length);
    },
    onSwipedRight: () => {
      if (currentSlide < 3 && currentSlide > 0)
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  const handleNext = () => {
    setDirection("next");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const telegram = window.Telegram.WebApp;
      telegram.ready();

      if (telegram.initDataUnsafe?.user) {
        setUser({
          userId: telegram.initDataUnsafe.user.id.toString(),
          username: telegram.initDataUnsafe.user.username,
          checked: false,
        });
      } else {
        console.error("User information is not available.");
      }
    } else {
      console.error("Telegram WebApp SDK is not available.");
    }
  }, []);
  const showUser = () => {
    alert(user.userId + " " + user.username);
  };
  return (
    <div className="slide-container" {...handlers}>
      <div className="slide-content">{slides[currentSlide]}</div>
      {currentSlide < 3 && (
        <>
          <div className="slide-nav">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`nav-dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
          <button onClick={handleNext} className="next-button">
            Next
          </button>
          <button onClick={showUser}></button>
        </>
      )}
    </div>
  );
};

export default App;

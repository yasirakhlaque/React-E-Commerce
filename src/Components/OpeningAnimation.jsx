import React, { useEffect, useState } from "react";
import "../styles/OpeningAnimation.css";

const OpeningAnimation = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);
  const [letters, setLetters] = useState([]);
  const welcomeText = "TECHORA";

  useEffect(() => {
    setTimeout(() => setShowText(true), 1500);
    setTimeout(() => {
      const letterArray = welcomeText.split("").map((char, index) => ({
        char,
        delay: index * 150
      }));
      setLetters(letterArray);
    }, 1800);

    setTimeout(() => {
      if (onComplete) onComplete();
    }, 4500);
  }, [onComplete]);

  return (
    <div className="welcome-container">
      <div className="gradient-fill"></div>
      {showText && (
        <div className="welcome-text">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="letter"
              style={{ animationDelay: `${letter.delay}ms` }}
            >
              {letter.char}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default OpeningAnimation;
import { useState, useEffect } from "react";
import Btn from "../Button/Button.jsx";
import Feedback from "../Feedback/Feedback.jsx";
export default function Options() {
  const [goodClicks, setGoodClicks] = useState(0);
  const [neutralClicks, setNeutralClicks] = useState(0);
  const [badClicks, setBadClicks] = useState(0);

  const handleGoodClick = () => {
    setGoodClicks(goodClicks + 1);
  };

  const handleNeutralClick = () => {
    setNeutralClicks(neutralClicks + 1);
  };

  const handleBadClick = () => {
    setBadClicks(badClicks + 1);
  };

  return (
    <div>
      <Btn onClick={handleGoodClick}>Good</Btn>
      <Btn onClick={handleNeutralClick}>Neutral</Btn>
      <Btn onClick={handleBadClick}>Bad</Btn>
      <Btn>Reset</Btn>
      <Feedback good={goodClicks} neutral={neutralClicks} bad={badClicks} positive="0" />
    </div>
  );
}

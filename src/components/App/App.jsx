import { useState, useEffect } from "react";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import css from "../App/App.module.css";
import Feedback from "../Feedback/Feedback.jsx";
import Notification from "../Notification/Notification.jsx";

export default function App() {
  const [values, setValues] = useState(getInitFeedback);
  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);
  const isHidden = !totalFeedback;

  useEffect(() => {
    window.localStorage.setItem("initial-feedback", JSON.stringify(values));
  }, [values]);

  return (
    <div>
      <Description />
      <Options
        onUpdate={onLeaveFeedback}
        isHidden={isHidden}
        onReset={onReset}
      />
      {isHidden ? (
        <Notification />
      ) : (
        <Feedback
          values={values}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );

  function onLeaveFeedback(type) {
    setValues({
      ...values,
      [type]: values[type] + 1,
    });
  }

  function onReset() {
    setValues({ ...values, good: 0, neutral: 0, bad: 0 });
  }
  function getInitFeedback() {
    const initFeedback = window.localStorage.getItem("initial-feedback");
    if (initFeedback !== null) {
      return JSON.parse(initFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  }
}

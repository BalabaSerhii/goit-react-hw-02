import css from "./Feedback.module.css";

export default function Feedback({
  values: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  // const total = good + neutral + bad;
  // const test = total !== 0 ? Math.round((good / total) * 100) : 0;
  return (
    // <ul className={css.feedback}>
    //   <li className={css.liFeedback}>Neutral: {neutral}</li>
    //   <li className={css.liFeedback}>Bad: {bad}</li>
    //   <li className={css.liFeedback}>Good: {good}</li>
    //   <li className={css.liFeedback}>Total: {total}</li>
    //   <li className={css.liFeedback}>Positive: {test} %</li>
    // </ul>

    <div>
      <ul>
        <li>
          <p>
            Good: <span>{good}</span>
          </p>
        </li>
        <li>
          <p>
            Neutral: <span>{neutral}</span>
          </p>
        </li>
        <li>
          <p>
            Bad: <span>{bad}</span>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <p>
            Total: <span>{totalFeedback}</span>
          </p>
        </li>
        <li>
          <p>
            Positive: <span>{positiveFeedback}</span>
          </p>
        </li>
      </ul>
    </div>
  );
}

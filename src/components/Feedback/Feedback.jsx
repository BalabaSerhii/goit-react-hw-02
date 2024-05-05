
export default function Feedback({
  values: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  return (
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

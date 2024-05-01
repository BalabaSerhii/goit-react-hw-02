import css from "./Feedback.module.css"



export default function Feedback({ good, neutral, bad, positive = 0 }) {
 const total = good + neutral + bad;
 const test = total !== 0 ? Math.round((good / total) * 100):0; 
  return (
    <ul className={css.feedback}>
     <li className={css.liFeedback}>Neutral: {neutral}</li>
      <li className={css.liFeedback}>Bad: {bad}</li>
      <li className={css.liFeedback}>Good: {good}</li>
      <li className={css.liFeedback}>Total: {total}</li>
      <li className={css.liFeedback}>Positive: {test}</li>
   
    </ul>
  );
}

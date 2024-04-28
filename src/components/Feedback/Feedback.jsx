import css from "./Feedback.module.css"



export default function Feedback() {
  return (
    <ul className={css.feedback}>
      <li className={css.liFeedback}>Neutral:</li>
      <li className={css.liFeedback}>Bad:</li>
      <li className={css.liFeedback}>Positive:</li>
      <li className={css.liFeedback}>Total:</li>
      <li className={css.liFeedback}>Good:</li>
    </ul>
  );
}

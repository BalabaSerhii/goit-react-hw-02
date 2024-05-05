import css from "./Options.module.css"


export default function Options({ onUpdate, isHidden, onReset }) {
  return (
    <div className="btnAll">
      <button onClick={() => onUpdate("good")} className={css.btn}>Goods</button>
      <button onClick={() => onUpdate("neutral")} className={css.btn}>Neutral</button>
      <button onClick={() => onUpdate("bad")} className={css.btn}>Bad</button>
      {!isHidden && <button onClick={onReset} className={css.btnRes}>Reset</button>}
    </div>
  );
}

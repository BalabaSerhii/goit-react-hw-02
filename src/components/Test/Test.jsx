import Btn from "./TestBtn.jsx";
import css from "./Test.module.css"
export default function Test() {
  return (
    <div className={css.container}>
      <Btn variant="t1">Первая</Btn>
      <Btn variant="t2">Вторая</Btn>
      <Btn variant="t3">Третяя</Btn>
      <Btn variant="t4">Четвертая</Btn>
      <Btn variant="t5">Пятая</Btn>
    </div>
  );
}

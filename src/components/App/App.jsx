import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import css from "../App/App.module.css";
import Feedback from "../Feedback/Feedback.jsx";
import Test from "../Test/Test.jsx";
export default function App() {
  return (
    <div className={css.container}>
      <Description />
      <Options />
      {/* <Feedback good={goodClicks} neutral={neutralClicks} bad={badClicks} /> */}
      {/* <Test/> */}
    </div>
  );
}

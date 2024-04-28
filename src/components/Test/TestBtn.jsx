import css from "./Test.module.css";
import clsx from "clsx";
export default function Btn({ children, variant, type = "button" }) {
  return (
    
      <button className={clsx(css.btn, variant === "t1" ? css.grun : css.btn)} type={type}>
        
        {children}
      </button>
    
  );
}

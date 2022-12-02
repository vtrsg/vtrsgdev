import { Contact } from "../Contact";
import style from "./Footer.module.css";

export const Footer = () => {

  return (
    <div className={style.container}>
      <Contact/>
    </div>
  );
};

import { Contato } from "../Contato";
import style from "./Footer.module.css";

export const Footer = () => {

  return (
    <div className={style.container}>
      <Contato/>
    </div>
  );
};

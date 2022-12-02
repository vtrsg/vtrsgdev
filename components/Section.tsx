import { ReactElement } from "react";
import style from "../styles/Section.module.css";

type Props = {
  children: ReactElement;
  label: string;
};

export const Section = ({ children, label }: Props) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{label}</h2>
      {children}
    </div>
  );
};

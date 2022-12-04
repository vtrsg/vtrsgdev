import { type } from "os";
import style from "./MyButton.module.css";

type Props = {
  label: string;
  onClick?: () => void;
  type?: string;
};

export const MyButton = ({ label, onClick, type }: Props) => {
  return(
     <button onClick={onClick} className={style.myBtn}>
        {label}
    </button>);
};

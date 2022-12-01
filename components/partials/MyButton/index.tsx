import style from "./MyButton.module.css";

type Props = {
  label: string;
  onClick: () => void;
};

export const MyButton = ({ label, onClick }: Props) => {
  return(
     <button onClick={onClick} className={style.myBtn}>
        <span>{label}</span>
    </button>);
};

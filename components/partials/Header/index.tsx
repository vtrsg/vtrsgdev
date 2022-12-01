import style from "./Header.module.css";

export const Header = () => {
  const vtrsg = "<VTRSG/>";

  return (
    <div className={style.container}>
      <span className={style.text}>{vtrsg}</span>
    </div>
  );
};

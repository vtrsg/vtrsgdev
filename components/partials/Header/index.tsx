import Link from "next/link";
import style from "./Header.module.css";

export const Header = () => {
  const vtrsg = "<VTRSG/>";

  return (
    <Link href={"/"} >
    <div className={style.container}>
      <span className={style.text}>{vtrsg}</span>
    </div>
    </Link>
  );
};

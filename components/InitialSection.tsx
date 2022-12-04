import { MyButton } from "./partials/MyButton";
import style from "../styles/Initial.module.css";
import Link from "next/link";

export const Initial = () => {
    
  const handlePageBtn = () => {
    window.location.href = "https://github.com/vtrsg";
  };
 
  return (
    <div className={style.container}>
      <span className={style.text}>
        Olá! Me chamo <b>Vittorio</b> e sou
      </span>
      <h1 className={style.title}>Desenvolvedor Web</h1>
      <div className={style.buttons}>
        <MyButton label={"Portfólio"} onClick={handlePageBtn} />
        <Link href={"/contato"}>
        <MyButton
          label={"Contato"}
        />
        </Link>
      </div>
    </div>
  );
};

import Link from "next/link";
import Image from "next/image";
import style from "../styles/Initial.module.css";

import Seta from "../public/seta.png";
import { MyButton } from "./partials/MyButton";

export const Initial = () => {
    
  const handlePageBtn = () => {
    window.location.href = "https://github.com/vtrsg";
  };
 
  return (
    <>
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
    <div className={style.setas}>
      <Image
        src={Seta}
        width={32}
        height={32}
        alt={"rolar para baixo"}
        className={style.image}
      />
      <Image
        src={Seta}
        width={32}
        height={32}
        alt={"rolar para baixo"}
        className={style.image}
      />
      </div>
    
    </>
  );
};

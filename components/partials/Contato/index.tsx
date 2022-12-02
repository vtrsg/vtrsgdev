import Image from "next/image";
import style from "./Contato.module.css";

export const Contato = () => {
  return (
    <div className={style.container}>
      <div className={style.contatos}>
        <h3 className={style.title}>E-mail</h3>
        <span className={style.text}>vittorioschmittg@outlook.com</span>
        <h3 className={style.title}>Telefone</h3>
        <span className={style.text}>(51)99875-5477</span>
      </div>
      <div className={style.logos}>
        <Image
          src="/logos/whatsapp.png"
          width={50}
          height={50}
          alt="whatsapp"
        />
        <Image
          src="/logos/linkedin.png"
          width={50}
          height={50}
          alt="Linkedin"
        />
        <Image src="/logos/github.png" width={50} height={50} alt="github" />
      </div>
    </div>
  );
};

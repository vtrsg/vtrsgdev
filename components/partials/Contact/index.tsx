import Image from "next/image";
import Link from "next/link";
import style from "./Contact.module.css";

export const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.contatos}>
        <h3 className={style.title}>E-mail</h3>
        <span className={style.text}>vittorioschmittg@outlook.com</span>
        <h3 className={style.title}>Telefone</h3>
        <span className={style.text}>(51)99875-5477</span>
      </div>
      <div className={style.logos}>
        <Link href={"https://wa.me/5551998755477"} target={"_blank"}>
          <Image
            src="/logos/whatsapp.png"
            width={50}
            height={50}
            alt="whatsapp"
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/vittorio-schmitt-a613271b6/"} target={"_blank"}>
          <Image
            src="/logos/linkedin.png"
            width={50}
            height={50}
            alt="Linkedin"
          />
        </Link>
        <Link href={"https://github.com/vtrsg"} target={"_blank"}>
          <Image src="/logos/github.png" width={50} height={50} alt="github" />
        </Link>
      </div>
    </div>
  );
};

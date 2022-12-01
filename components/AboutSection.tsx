import Image from "next/image";
import style from "../styles/About.module.css";
import Avatar from "../public/avatar.jpg";

export const About = () => {
  return (
    <div className={style.container}>
      <Image
        src={Avatar}
        width={300}
        height={300}
        alt={"avatar do desenvolvedor"}
        className={style.image}
      />
      <div className={style.info}>...</div>
    </div>
  );
};

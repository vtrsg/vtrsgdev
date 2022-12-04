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
        <div className={style.codeItem}>
          <span className={style.purple}>Infos</span> {"\u007B"}
          <div>
            Nome: <span className={style.green}>Vittorio,</span>
          </div>
          <div>
            Sobrenome: <span className={style.green}>Schmitt,</span>
          </div>
          <div>
            País: <span className={style.green}>Brasil,</span>
          </div>
          <div>
            Profissão: <span className={style.green}>Desenvolvedor Web,</span>
          </div>
          <div>
            Estudante: <span className={style.green}>Análise e Desenvolvimento de Sistemas,</span>
          </div>
          {"\u007D"}
        </div>
    </div>
  );
};

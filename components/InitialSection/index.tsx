import { MyButton } from "../MyButton";
import style from "./Section.module.css";

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
        <MyButton
          label={"Contato"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </div>
  );
};

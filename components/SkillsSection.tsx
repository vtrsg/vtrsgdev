import style from "../styles/Skills.module.css";

import { GridSkills } from "./partials/GridSkills";

export const Skills = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Habilidades</h2>
      <GridSkills />
    </div>
  );
};

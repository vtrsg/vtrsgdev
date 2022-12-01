import style from "../styles/Tools.module.css";

import { GridTools } from "./partials/GridTools";

export const Tools = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Ferramentas</h2>
      
      <GridTools/>
      
    </div>
  );
};

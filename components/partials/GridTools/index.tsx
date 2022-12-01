import style from "./Grid.module.css";
import Image from "next/image";

import { tools } from "../../../utils/tools";

export const GridTools = () => {
  return (
    <div className={style.tools}>
      {tools.map((tool, index) => (
        <div key={index} className={style.tool}>
          <Image
            src={tool.icon}
            width={80}
            height={80}
            alt={tool.name}
          />
        </div>
      ))}
    </div>
  );
};

import style from "./Grid.module.css";
import Image from "next/image";

import { skills } from "../../../utils/skills";

export const GridSkills = () => {
  return (
    <div className={style.skills}>
      {skills.map((skill, index) => (
        <div key={index} className={style.skill}>
          <Image
            src={skill.icon}
            width={80}
            height={80}
            alt={skill.name}
          />
          <span className={style.title}>{skill.name}</span>
          <p className={style.text}>{skill.description}</p>
        </div>
      ))}
    </div>
  );
};


import { useState } from "react";
import { MyButton } from "../MyButton";
import style from "./Form.module.css";

export const Form = () => {
  const [status, setStatus] = useState("Enviar");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Enviando...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("/api/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },

      body: JSON.stringify(details),
    });
    setStatus("Enviado!!");

    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          id="name"
          placeholder="Nome"
          className={style.input}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="E-mail"
          className={style.input}
          required
        />
        <textarea
          id="message"
          cols={35}
          rows={8}
          placeholder="Deixe sua Mensagem"
          className={style.inputMsg}
          required
        />
        <MyButton
          label={"Enviar"}
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </form>
    </div>
  );
};

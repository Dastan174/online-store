"use client";
import { useState } from "react";
import scss from "./register.module.scss";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className={scss.wrapper}>
      <form className={scss.form}>
        <h2 className={scss.title}>Регистрация</h2>

        <div className={scss.field}>
          <label>Имя</label>
          <input type="text" placeholder="Введите имя" required />
        </div>

        <div className={scss.field}>
          <label>Ссылка на аватар (необязательно)</label>
          <input type="text" placeholder="https://example.com/avatar.jpg" />
        </div>

        <div className={scss.field}>
          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />
        </div>

        <div className={scss.field}>
          <label>Пароль</label>
          <div className={scss.passBlock}>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Введите пароль"
              required
            />
            <button
              type="button"
              className={scss.eye}
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <button className={scss.submit} type="submit">
          Зарегистрироваться
        </button>

        <div className={scss.or}>или</div>

        <button className={scss.google} type="button">
          <FaGoogle />
          Войти через Google
        </button>
      </form>
    </div>
  );
};

export default Register;

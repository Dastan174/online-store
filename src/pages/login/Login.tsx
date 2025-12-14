"use client";
import { useState } from "react";
import scss from "./login.module.scss";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className={scss.wrapper}>
      <form className={scss.form}>
        <h2 className={scss.title}>Вход</h2>

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

        <Link href="/forgot-password" className={scss.forgot}>
          Забыли пароль?
        </Link>

        <button className={scss.submit} type="submit">
          Войти
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

export default Login;

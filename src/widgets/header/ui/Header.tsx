import scss from "./header.module.scss";

export default function Header() {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <h1>Header</h1>
        </div>
      </div>
    </div>
  );
}

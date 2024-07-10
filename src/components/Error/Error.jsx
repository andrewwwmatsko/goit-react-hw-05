import errorImg from "../../images/error.png";

import css from "./Error.module.css";

export default function Error() {
  return (
    <main>
      <div className={css.container}>
        <img
          className={css.image}
          src={errorImg}
          alt="Computer tried to connect to the server but failed"
        />
        <p className={css.text}>Oops, something went wrong.</p>
        <p className={css.text}>Please reload this page.</p>
      </div>
    </main>
  );
}

import imgUrl from "../../images/404.png";

import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  setTimeout(() => {}, 3000);

  return (
    <main>
      <section className={css.section}>
        <div className={css.container}>
          <img src={imgUrl} alt="404 error" width={900} />
        </div>
      </section>
    </main>
  );
}

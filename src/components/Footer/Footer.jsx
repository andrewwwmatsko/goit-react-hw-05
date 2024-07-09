import Logo from "../Logo/Logo";

import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <Logo />
        <p className={css.rights}>
          &copy; 2024 FindYourMovie All rights are reserverd.
        </p>
      </div>
    </footer>
  );
}

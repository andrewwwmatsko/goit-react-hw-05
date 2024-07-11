import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <Link to="/">
          <Logo />
        </Link>
        <p className={css.rights}>
          &copy; 2024 FindYourMovie All rights are reserverd.
        </p>
      </div>
    </footer>
  );
}

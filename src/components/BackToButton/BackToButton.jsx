import { Link } from "react-router-dom";

import css from "./BackToButton.module.css";

export default function BackToButton({ to, children }) {
  return (
    <Link to={to} className={css.button}>
      {children}
    </Link>
  );
}

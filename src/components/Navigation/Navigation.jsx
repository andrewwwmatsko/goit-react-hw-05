import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";
import clsx from "clsx";
import Logo from "../Logo/Logo";

const createnavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <div>
          <NavLink to="/" className={createnavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={createnavLinkClass}>
            Movies
          </NavLink>
        </div>

        <Logo />
      </nav>
    </header>
  );
}

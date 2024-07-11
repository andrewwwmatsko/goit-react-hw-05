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
      <div className={css.container}>
        <nav className={css.navigation}>
          <div className={css.navBlock}>
            <div className={css.pageNav}>
              <NavLink to="/" className={createnavLinkClass}>
                <Logo />
              </NavLink>
              <NavLink to="/movies" className={createnavLinkClass}>
                Movies
              </NavLink>
            </div>

            <NavLink to="/profile" className={createnavLinkClass}>
              Log in
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

import { NavLink } from "react-router-dom";

import { IoMenu } from "react-icons/io5";

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
              <div className={css.biggerScreenlink}>
                <NavLink to="/movies" className={createnavLinkClass}>
                  Movies
                </NavLink>
              </div>

              <IoMenu className={css.menuIcon} size={32} color="whitesmoke" />
            </div>

            <div className={css.biggerScreenlink}>
              <NavLink to="/profile" className={createnavLinkClass}>
                Log in
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

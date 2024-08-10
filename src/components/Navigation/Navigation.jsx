import { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { IoMenu } from "react-icons/io5";

import Logo from "../Logo/Logo";
import css from "./Navigation.module.css";

import MobileMenu from "../MobileMenu/MobileMenu";
import { AnimatePresence } from "framer-motion";

const createnavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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

                <button
                  type="button"
                  className={css.modalBtn}
                  onClick={handleOpen}
                >
                  <IoMenu
                    className={css.menuIcon}
                    size={32}
                    color="whitesmoke"
                  />
                </button>
              </div>

              <div className={css.biggerScreenlink}>
                <NavLink to="/login" className={createnavLinkClass}>
                  Log in
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isModalOpen && (
          <MobileMenu isOpen={isModalOpen} onModalClose={handleClose} />
        )}
      </AnimatePresence>
    </>
  );
}

import { IoCloseSharp } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

import { motion } from "framer-motion";

import css from "./MobileMenu.module.css";
import { Link } from "react-router-dom";

const variants = {
  initial: {
    clipPath: "circle(30px at calc(100% - 40px) 10px)",
  },
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 10px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 40px) 0px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function MobileMenu({ onModalClose, isOpen }) {
  return (
    <motion.div
      initial={variants.initial}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      exit={variants.closed}
    >
      <div className={css.backderop}>
        <div className={css.mobMenu}>
          <div className={css.mob}>
            <button className={css.menuCloseBtn} onClick={onModalClose}>
              <IoMdCloseCircle size={24} />
            </button>
            <nav className={css.mobMenuNavigation}>
              <ul className="mob-menu-list">
                <li className={css.mobMenuItem}>
                  <Link
                    to="/movies"
                    className={css.mobMenuLink}
                    onClick={onModalClose}
                  >
                    Movies
                  </Link>
                </li>
                <li className={css.mobMenuItem}>
                  <Link
                    to="/register"
                    className={css.mobMenuLink}
                    onClick={onModalClose}
                  >
                    Sign up
                  </Link>
                </li>
                <li className={css.mobMenuItem}>
                  <Link
                    to="/login"
                    className={css.mobMenuLink}
                    onClick={onModalClose}
                  >
                    Log in
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

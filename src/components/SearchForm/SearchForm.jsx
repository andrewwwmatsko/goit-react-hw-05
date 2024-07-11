import toast from "react-hot-toast";

import { RiSearchLine } from "react-icons/ri";

import css from "./SearchForm.module.css";
import { useRef } from "react";

const notify = () =>
  toast.error("Please enter your query.", {
    duration: 2000,
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });

export default function SearchForm({ onSubmit, searchValue }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchValue = e.target.elements.search.value;

    if (searchValue === "") {
      notify();
      return;
    }

    onSubmit(searchValue);

    inputRef.current.style.focus = false;
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        name="search"
        placeholder="Search your movie"
        autoComplete="off"
        defaultValue={searchValue}
        autoFocus
        className={css.search}
      />
      <button type="submit" className={css.button}>
        <RiSearchLine size={24} color="rgba(0, 0, 0, 0.729)" />
      </button>
    </form>
  );
}

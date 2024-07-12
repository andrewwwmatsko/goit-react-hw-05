import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoadMore }) {
  return (
    <button
      type="button"
      onClick={() => {
        onLoadMore();
      }}
      className={css.button}
    >
      LoadMore
    </button>
  );
}

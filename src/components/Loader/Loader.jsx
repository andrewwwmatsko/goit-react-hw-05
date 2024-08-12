import PacmanLoader from "react-spinners/PacmanLoader";

const customStyles = {
  margin: "auto auto",
};

export default function Loader() {
  return (
    <>
      <PacmanLoader color="#0e4749" cssOverride={customStyles} />
    </>
  );
}

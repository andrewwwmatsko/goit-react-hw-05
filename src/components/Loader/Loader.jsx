import PacmanLoader from "react-spinners/PacmanLoader";

const customStyles = {
  margin: "auto auto",
};

export default function Loader() {
  return (
    <>
      <PacmanLoader color="rgb(154,0,0)" cssOverride={customStyles} />
    </>
  );
}

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetMovies } from "../../redux/movies/slice";

export default function ProfilePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetMovies());
  }, [dispatch]);
  return <p>Here is your profile</p>;
}

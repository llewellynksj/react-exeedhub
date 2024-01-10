import NavBar from "../components/NavBar";
import SchoolList from "./schools/SchoolFeed";

const Homepage = () => {
  return (
    <>
      <NavBar />
      <h1 className="text-center m-3">This is the homepage!</h1>
      <SchoolList />
    </>
  );
};

export default Homepage;

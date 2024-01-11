import "./services/axiosDefaults";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import LoginForm from "./pages/auth/LoginForm";
import RegisterForm from "./pages/auth/RegisterForm";
import SchoolFeed from "./pages/schools/SchoolFeed";
import School from "./pages/schools/School";
import AddReviewForm from "./pages/schools/AddReviewForm";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/schools" element={<SchoolFeed />} />
        <Route path="/schools/:id" element={<School />} />
        <Route path="/schools/:id/add-review" element={<AddReviewForm />} />

        <Route render={() => <h1>404: page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;

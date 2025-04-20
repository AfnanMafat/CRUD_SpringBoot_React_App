import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AddUser" element={<AddUser />} />
          <Route exact path="/EditUser/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

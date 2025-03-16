import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [token, setToken] = useState(false);

  return (
    <div>
      <Navbar
        setCurrentPage={setCurrentPage}
        token={token}
        setToken={setToken}
      />
      {currentPage === "home" && <Home />}
      {currentPage === "register" && (
        <RegisterPage setCurrentPage={setCurrentPage} setToken={setToken} />
      )}
      {currentPage === "login" && (
        <LoginPage setToken={setToken} setCurrentPage={setCurrentPage} />
      )}
      <Footer />
    </div>
  );
}

export default App;

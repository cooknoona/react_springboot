import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import UserStore from "./context/UserStore";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./pages/signup/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserStore>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </UserStore>
    </>
  );
}

export default App;

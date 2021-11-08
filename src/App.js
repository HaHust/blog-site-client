import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from "./components/common/AppHeader";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/main/Home";
import Aboutus from "./components/main/Aboutus";
import Login from "./components/auth/Login";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<Aboutus />} />
                  <Route path="/login" element={<Login />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;

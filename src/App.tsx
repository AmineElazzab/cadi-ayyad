import "./App.css";
import Bibliotheque from "./pages/Nos_Bibliotheques";
import Nouveautés from "./pages/Nouveautés";
import Propose from "./pages/A_Propose";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/bibliotheque" element={<Bibliotheque />} />
          <Route path="/nouveautes" element={<Nouveautés />} />
          <Route path="/propose" element={<Propose />} />
          <Route
            path="*"
            element={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                  backgroundColor: "black",
                }}
              >
                <h1
                  style={{
                    fontSize: "10rem",
                    color: "white",
                    textShadow: "0 0 1rem white",
                  }}
                >
                  404
                </h1>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

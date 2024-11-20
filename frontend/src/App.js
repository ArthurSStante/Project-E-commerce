import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Home />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import "./App.css";
import Home from "./Pages/home/Home";
import Aos from "aos";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="fit-width">
      <Home />
    </div>
  );
}

export default App;

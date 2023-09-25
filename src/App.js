import "./App.css";
import Card from "./Component/Card";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="w-full bg-black">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;

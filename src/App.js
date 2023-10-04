import "./App.css";
import Card from "./Component/Card";
import CardContainer from "./Component/CardContainer";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="w-full bg-black">
      <Navbar />
      <Hero />
      <CardContainer />
    </div>
  );
}

export default App;

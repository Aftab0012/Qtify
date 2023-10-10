import './App.css';
import CardContainer from './Component/CardContainer';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <CardContainer />
    </div>
  );
}

export default App;

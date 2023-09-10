import logo from './logo.svg';
import './App.css';
import Hero from './sections/Hero';
import Payment from './sections/Payment';
import Banking from './sections/Banking';
import CashCard from './sections/CashCard';
import Investing from './sections/Investing';

function App() {
  return (
    <div className="font-agrandir">
      <Hero/>
      <Payment/>
      <Banking/>
      <CashCard/>
      <Investing/>
    </div>
  );
}

export default App;

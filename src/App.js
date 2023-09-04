import logo from './logo.svg';
import './App.css';
import Hero from './sections/Hero';
import Payment from './sections/Payment';
import Banking from './sections/Banking';
import CashCard from './sections/CashCard';

function App() {
  return (
    <div className="font-agrandir">
      <Hero/>
      <Payment/>
      <Banking/>
      <CashCard/>
    </div>
  );
}

export default App;

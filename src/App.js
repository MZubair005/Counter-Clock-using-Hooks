import './App.css';
import Navbar from './components/Navbar';
import HooksCounter from './components/Counter&ClockWithHooks/CounterHooks';
import HooksClock from './components/Counter&ClockWithHooks/HooksClock';



function App() {
  return (
    <>      
    <Navbar title="TEXT UTILS" aboutText="About TextUtils" />
    
    <HooksClock />
    <HooksCounter />
    
    </>
);
}

export default App;

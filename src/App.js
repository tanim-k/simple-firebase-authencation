// remove logo 
import './App.css';
import app from './firebase.init';
import { getAuth } from "firebase/auth";
const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <h1>component er vitorer jinish di falaiya de lai te</h1>
      <ul>
        <li>
          <tomake-1>matha muta</tomake-1>
        </li>
        <li>
          <tomake-2>gola muta</tomake-2>
        </li>
        <li>
          <tomake-3>nak muta</tomake-3>
        </li>
        <li>
          <tomake-4>gola chipa</tomake-4>
        </li>
        <li>
          <tomake-5>vuri mota</tomake-5>
        </li>
      </ul>
      
    </div>
  );
}

export default App;

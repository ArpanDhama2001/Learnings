import './App.css';
import {Greet} from './components/Greet';
import {Status} from './components/Status'

function App() {
  return (
    <div className="App">
      <Greet first="Arpan" speed={10} />
      <Status status='success' />
    </div>
  );
}

export default App;

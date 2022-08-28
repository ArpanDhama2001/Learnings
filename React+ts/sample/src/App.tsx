import './App.css';
import Greet from './components/Greet';

function App() {
  const name = {
    first: 'Arpan',
    last: 'Dhama',
  }
  return (
    <div className="App">
      <Greet name={name} speed={10} />
    </div>
  );
}

export default App;

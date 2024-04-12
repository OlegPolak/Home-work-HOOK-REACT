import './App.css';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';
import UseState from './components/UseState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseEffect />
        <UseState />
        <UseRef />
      </header>
    </div>
  );
}

export default App;

import './App.css';
import List from './components/ReactMemo';
import UseMemo from './components/UseMemo';
import MyComponent from './components/UseReducer';
import UseWindowWidth from './components/UseWindowWidth';
// import UseEffect from './components/UseEffect';
// import UseLayoutEffect from './components/UseLayoutEffect';
// import UseRef from './components/UseRef';
// import UseState from './components/UseState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <UseEffect />
        <UseState />
        <UseRef />
        <UseLayoutEffect /> */}
        <MyComponent />
        {/* <UseMemo />
        <List />
        <UseWindowWidth /> */}
      </header>
    </div>
  );
}

export default App;



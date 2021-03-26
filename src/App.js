import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Homepage from './Homepage'

function App() {
  return (
    <div className="App">
      <Header>
        <Homepage />
      </Header>
    </div>
  );
}

export default App;

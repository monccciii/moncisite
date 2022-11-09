import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import LeftSide from './components/leftside'
import RightSide from './components/rightside'
import Home from './components/home'
function App() {
  return (
    <div className="App">
      <LeftSide/>
      <RightSide/>
    </div>
  );
}

export default App;

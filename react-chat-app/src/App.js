import logo from './logo.svg';
import './App.css';
import ChatApp from './Components/ChatApp';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <ChatApp/>
    </div>
  );
}

export default App;

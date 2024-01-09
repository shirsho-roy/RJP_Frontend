import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Chat from './Chat.jsx';
import Navigation from './Navbar.jsx';
function App() {
  return (
    <div className="App">
      <Navigation/>
     <Chat/>
    </div>
  );
}

export default App;

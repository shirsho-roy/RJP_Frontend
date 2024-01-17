import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Chat from './Chat.jsx';
import Navigation from './Navbar.jsx';
import ImageUploader from './ImageUploader.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageUploadComponent from './ImageUploadComponent.jsx';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router>
      <Routes>
      <Route path="/" element={ <Chat/>} />
        <Route path="/image" element={ <ImageUploadComponent/>} />
        
      </Routes>
      </Router> 
     
    </div>
  );
}

export default App;

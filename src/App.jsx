import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JokesList from './pages/JokesList';
import Joke from './pages/Joke';
import CreateJoke from './pages/CreateJoke';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jokes" element={<JokesList />} />
          <Route path="/jokes/:id" element={<Joke />} />
          <Route path="/create" element={<CreateJoke />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
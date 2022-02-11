import './App.css';
import { Container } from 'react-bootstrap';
import Login from './pages/login';
import Home from './pages/home';
import {
  Routes,
  Route
} from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="*" element={<Login />} />
          <Route path="/home" element={ <Home />} />
    </Routes>
  );
}

export default App;

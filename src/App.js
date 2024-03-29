import { Container } from 'reactstrap';
import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi'

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;

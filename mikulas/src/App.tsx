import { Outlet } from 'react-router'
import './App.css'
import { Nav } from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App

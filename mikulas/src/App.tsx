import { Outlet } from 'react-router'
import './App.css'
import { Nav } from './Nav';

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

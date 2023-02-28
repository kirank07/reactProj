import './App.css';
import Dashboard from './components/Dashboard';
import AddUser from './components/AddUser';
import ViewUsers from './components/ViewUsers';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Dashboard/>}  />
            <Route path='/all' element={<ViewUsers/>} />
            <Route path='/add' element={<AddUser/>} />
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;

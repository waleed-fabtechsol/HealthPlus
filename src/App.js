import './App.css';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import DashboardnavUser from './sidenav-user/Dashboard';
import { Dashboard } from './dashboard/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route element={<DashboardnavUser/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>

        


      </Routes>
  
   
  </>
  );
}

export default App;

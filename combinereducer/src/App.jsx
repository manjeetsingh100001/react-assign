import { Login } from './components/Login';
import './App.css';
import { Home } from './components/Home';
import { Route, Routes } from 'react-router-dom';
import { checkUserStatus } from './Redux/auth/actions';
import { useDispatch } from 'react-redux';
import { Private } from './components/Private';
import { Todo } from './components/Todo';

function App() {
  const authToken = localStorage.getItem("authToken");
  const dispatch = useDispatch();
  dispatch(checkUserStatus(authToken));

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Private>
            <Home />
          </Private>
        }></Route>
        <Route path="/todo/:id" element={
          <Private>
            <Todo />
          </Private>
        }></Route>
        <Route path="/login" element={
          <Private>
            <Login />
          </Private>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;

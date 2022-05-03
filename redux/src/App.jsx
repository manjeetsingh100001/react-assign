import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Todo } from './components/todo'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todo/:id" element={<Todo />}></Route>
      </Routes>
    </div>
  );
}

export default App;

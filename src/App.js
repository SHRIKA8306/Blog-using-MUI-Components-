
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Sub from './components/Sub';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/Sub' element={<Sub/>}></Route>
     </Routes>
    </div>
  );
}

export default App;

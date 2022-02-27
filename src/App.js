import { Route, Routes } from 'react-router-dom';
import AddNewUrlPage from "./Pages/AddNewUrl";

function App() {
  return (
    <div>
      <Routes>
      <Route path='/add' element={<AddNewUrlPage />}/>
      </Routes>
    </div>
  );
};

export default App;

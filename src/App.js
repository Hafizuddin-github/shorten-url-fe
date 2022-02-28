import { Route, Routes } from 'react-router-dom';
import AddNewUrlPage from "./Pages/AddNewUrl";
import RedirectUrlPage from './Pages/RedirectUrl';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/add' element={<AddNewUrlPage />}/>
      <Route path='/:shortenUrl' element={<RedirectUrlPage />}/>
      </Routes>
    </div>
  );
};

export default App;

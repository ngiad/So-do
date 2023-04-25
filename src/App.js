import { Route, Routes } from 'react-router-dom';
import HomePlayout from './layout/HomeLayout';
import "./style/Global.css"
import Net from './pages/Net';
import Table from './pages/Table';
import Chart from './pages/Chart';
import Error from './pages/Error';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePlayout />}>
        <Route index element={<Net />} />
        <Route path='table' element={<Table />} />
        <Route path='chart' element={<Chart />} />
      </Route>
      <Route path='/error' element={<Error />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

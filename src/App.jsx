import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import DataStructurePage from './pages/DataStructurePage';
import Algorithms from './pages/Algorithms';
import Complexity from './pages/Complexity';
import InterviewPrep from './pages/InterviewPrep';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ds/:id" element={<DataStructurePage />} />
        <Route path="/algorithms" element={<Algorithms />} />
        <Route path="/complexity" element={<Complexity />} />
        <Route path="/interview" element={<InterviewPrep />} />
      </Routes>
    </MainLayout>
  );
}

export default App;

import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Project from './components/Project';
import NotFound from './components/NotFound';


function App() {
      
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

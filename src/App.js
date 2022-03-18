import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Diary from './pages/Diary';
import Resources from './pages/Resources';

const App = () => {
  return (

      <Router>
        <Routes>
          <Route exact path="/" element={<Diary />} />
          <Route exact path="/resources" element={<Resources />} />
        </Routes>
      </Router>
    
  );
}


export default App;

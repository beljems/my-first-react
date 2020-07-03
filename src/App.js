import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Pages from './components/Pages';

function App() {
    return (
      <BrowserRouter>
          <Header />
          <div className="app-content">
            <Sidebar />
            <Pages />
          </div>
      </BrowserRouter>
    );
}

export default App;

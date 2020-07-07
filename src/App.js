import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
    return (
      <BrowserRouter>
          <Header />
          <div className="app-content">
            <Sidebar />
            <Content />
          </div>
      </BrowserRouter>
    );
}

export default App;

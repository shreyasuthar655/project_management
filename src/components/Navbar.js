import React, { useState } from 'react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mode, setMode] = useState('light');

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="app-container">
      <button onClick={handleToggleSidebar} className="toggle-btn">
        ☰
      </button>
      <div className="search-bar-container">
          <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-content">
          <a href="#" className="nav-link"><img src='/overview.png'/>Overview</a>
          <a href="#" className="nav-link"><img src='/list.png'/>List</a>
          <a href="#" className="nav-link"><img src='/board.png'/>Board</a>
          <a href="#" className="nav-link"><img src='/dashboard.png'/>Dashboard</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

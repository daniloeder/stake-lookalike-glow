
import React from "react";
import "./TabBar.css";

interface TabBarItem {
  id: string;
  name: string;
  count?: number;
}

interface TabBarProps {
  items: TabBarItem[];
  activeItem: string;
  onTabChange: (itemId: string) => void;
}

const TabBar = ({ items, activeItem, onTabChange }: TabBarProps) => {
  return (
    <div className="tab-bar">
      <div className="tabs-container">
        {items.map((item) => (
          <button
            key={item.id}
            className={`tab-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => onTabChange(item.id)}
          >
            <span className="tab-name">{item.name}</span>
            {item.count !== undefined && (
              <span className="tab-count">{item.count.toLocaleString()}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabBar;

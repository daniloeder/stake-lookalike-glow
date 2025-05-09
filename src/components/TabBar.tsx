
import React from "react";

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

// CSS styles
const styles = `
.tab-bar {
  margin-bottom: 1.5rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.tab-bar::-webkit-scrollbar {
  display: none;
}

.tabs-container {
  display: flex;
  gap: 0.5rem;
  padding-bottom: 0.25rem;
}

.tab-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #17242D;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s;
}

.tab-item:hover {
  background-color: #1A2C38;
}

.tab-item.active {
  background-color: #1060B7;
  color: white;
}

.tab-name {
  font-weight: 500;
}

.tab-count {
  font-size: 0.75rem;
  opacity: 0.7;
}

@media (max-width: 640px) {
  .tab-item {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
  }
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default TabBar;

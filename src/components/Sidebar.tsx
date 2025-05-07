
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Home, Trophy, Gamepad2, Wallet } from "lucide-react";

interface SidebarItem {
  id: string;
  icon?: React.ReactNode;
  label: string;
  path?: string;
  children?: SidebarItem[];
}

const sidebarItems: SidebarItem[] = [
  {
    id: "home",
    icon: <Home />,
    label: "Home",
    path: "/",
  },
  {
    id: "sports",
    icon: <Trophy />,
    label: "Sports",
    children: [
      { id: "live", label: "Live", path: "/sports/live" },
      { id: "upcoming", label: "Upcoming", path: "/sports/upcoming" },
      { id: "results", label: "Results", path: "/sports/results" },
      { id: "promotions", label: "Promotions", path: "/sports/promotions" },
    ],
  },
  {
    id: "casino",
    icon: <Gamepad2 />,
    label: "Casino",
    children: [
      { id: "slots", label: "Slots", path: "/casino/slots" },
      { id: "live-casino", label: "Live Casino", path: "/casino/live" },
      { id: "table-games", label: "Table Games", path: "/casino/table-games" },
      { id: "game-shows", label: "Game Shows", path: "/casino/game-shows" },
    ],
  },
  {
    id: "promotions",
    icon: <Trophy />,
    label: "Promotions",
    path: "/promotions",
  },
  {
    id: "wallet",
    icon: <Wallet />,
    label: "Wallet",
    path: "/wallet",
  },
];

const Sidebar = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {sidebarItems.map((item) => (
          <div key={item.id} className="sidebar-item-container">
            {item.children ? (
              <div className="collapsible-item">
                <button
                  className="sidebar-item-button"
                  onClick={() => toggleItem(item.id)}
                >
                  <span className="sidebar-icon">{item.icon}</span>
                  <span className="sidebar-label">{item.label}</span>
                  <ChevronDown className={`dropdown-icon ${openItems.includes(item.id) ? 'rotated' : ''}`} />
                </button>

                <div className={`dropdown-content ${openItems.includes(item.id) ? 'expanded' : ''}`}>
                  {item.children.map((child) => (
                    <Link key={child.id} to={child.path || "#"} className="dropdown-item">
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link to={item.path || "#"} className="sidebar-item-link">
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-label">{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// CSS styles
const styles = `
.sidebar {
  width: 240px;
  height: 100%;
  background-color: #0A1218;
  border-right: 1px solid #1f2937;
  overflow-y: auto;
  flex-shrink: 0;
}

.sidebar-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.sidebar-item-container {
  width: 100%;
}

.sidebar-item-button,
.sidebar-item-link {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background: none;
  border: none;
  color: #e5e7eb;
  font-size: 0.875rem;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s;
}

.sidebar-item-button:hover,
.sidebar-item-link:hover {
  background-color: #17242D;
}

.sidebar-icon {
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
}

.sidebar-icon svg {
  width: 1.25rem;
  height: 1.25rem;
}

.sidebar-label {
  flex: 1;
  text-align: left;
}

.dropdown-icon {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.dropdown-icon.rotated {
  transform: rotate(-180deg);
}

.dropdown-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.dropdown-content.expanded {
  max-height: 200px;
}

.dropdown-item {
  display: block;
  padding: 0.5rem 1rem 0.5rem 2.75rem;
  color: #9ca3af;
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.2s;
}

.dropdown-item:hover {
  color: #e5e7eb;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default Sidebar;

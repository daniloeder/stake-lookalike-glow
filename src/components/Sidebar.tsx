
import { ChevronRight } from "lucide-react";

const sidebarItems = [
  { name: "Promotions", icon: "🎁", hasArrow: true },
  { name: "Affiliate", icon: "🤝" },
  { name: "VIP Club", icon: "🌟" },
  { name: "Blog", icon: "📝" },
  { name: "Forum", icon: "💬" },
  { name: "Sponsorships", icon: "🏆", hasArrow: true },
  { name: "Responsible Gambling", icon: "🔒" },
  { name: "Live Support", icon: "💬" },
  { name: "Language: English", icon: "🌐", hasArrow: true },
];

const Sidebar = () => {
  return (
    <aside className="h-full w-[190px] bg-[#0F1923]">
      <div className="space-y-1 py-2">
        <ul className="px-2">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center justify-between rounded px-3 py-2 text-sm text-white/80 hover:bg-[#1A2C38] hover:text-white"
              >
                <span className="flex items-center">
                  <span className="mr-2">{item.icon}</span>
                  <span>{item.name}</span>
                </span>
                {item.hasArrow && <ChevronRight className="h-4 w-4 text-gray-400" />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

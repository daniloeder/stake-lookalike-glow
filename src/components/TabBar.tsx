
const tabs = [
  { id: "lobby", label: "Lobby", icon: "🏠" },
  { id: "myBets", label: "My Bets", icon: "📋" },
  { id: "favorites", label: "Favourites", icon: "⭐" },
  { id: "startingSoon", label: "Starting Soon", icon: "⏱️" },
];

const TabBar = () => {
  return (
    <div className="mb-6 flex rounded-md bg-stake-darker">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`flex items-center px-4 py-2 ${
            tab.id === "lobby" ? "bg-stake-dark text-white" : "text-gray-400"
          }`}
        >
          <span className="mr-2">{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TabBar;

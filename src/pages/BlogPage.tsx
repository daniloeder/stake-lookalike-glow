
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  // Blog categories
  const categories = [
    { id: "all", name: "All" },
    { id: "crypto", name: "Crypto" },
    { id: "guides", name: "How to Guides" },
    { id: "news", name: "Stake News" },
    { id: "sport", name: "Sport" },
    { id: "casino", name: "Casino" },
    { id: "other", name: "Other" },
  ];

  // Featured blog post
  const featuredPost = {
    id: 1, 
    title: "Progressive Jackpot Slots Guide & Tips",
    image: "public/images/slot1.avif",
    description: "Progressive jackpot slots are a type of casino slot machine where the jackpot prize increases! Learn about how progressive slots work and play at Stake.",
    category: "casino"
  };

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Champions League Predictions",
      image: "public/images/sport1.png",
      description: "Discover expert Champions League predictions and picks to win the finals on May 31st 2025! Read up on our UCL picks, betting tips, and back a winner here on Stake!",
      category: "sport",
      background: "#0FA0CE",
    },
    {
      id: 2,
      title: "New Games on Stake: May 9th 2025 Casino Releases & Sports Promos",
      image: "public/images/new1.avif",
      description: "We've added 20+ new-release games to our casino catalogue this week! From sports bet bonuses to slot challenges, find out what's hot this week at Stake.com from May 9th 2025!",
      category: "casino",
      background: "#0D7E3E",
    },
    {
      id: 3,
      title: "Understanding Random Number Generators",
      image: "public/images/game1.avif",
      description: "Dive into the mechanics of Random Number Generators (RNGs) at Stake Casino. Read up on the technology that ensures game fairness and discover our best online gaming strategies!",
      category: "casino",
      background: "#1060B7",
    },
    {
      id: 4,
      title: "Latest Horse Racing News & Picks",
      image: "public/images/sport1.png",
      description: "Get the latest horse racing news, free tips & expert picks! Find out who's looking good for this week's upcoming races and bet with exclusive bonuses on Stake.com.",
      category: "sport",
      background: "#0FA0CE",
    },
    {
      id: 5,
      title: "How to Deposit Chilean Pesos (CLP)",
      image: "public/images/promo1.png",
      description: "Bet at Stake Casino & Sportsbook with Chilean Pesos! Discover how to simply and securely deposit & withdraw CLP to play and bet with your local currency.",
      category: "guides",
      background: "#A67C52",
    },
    {
      id: 6,
      title: "Stake Casino & Sport Betting Stats - Highlights April 2025",
      image: "public/images/promo2.avif",
      description: "Discover highlights, winning bets & top games in our April 2025 monthly round up of the latest casino and sports betting trends at Stake.com!",
      category: "news",
      background: "#EA384C",
    }
  ];

  // Filter posts based on active category
  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-page">
      {/* Blog header */}
      <div className="blog-header">
        <h1 className="blog-title">Blog</h1>
      </div>

      {/* Featured post */}
      <div className="featured-post" style={{backgroundImage: `url(${featuredPost.image})`}}>
        <div className="featured-content">
          <h2 className="featured-title">{featuredPost.title}</h2>
          <p className="featured-description">{featuredPost.description}</p>
        </div>
      </div>

      {/* Category selector */}
      <div className="categories-container">
        <div className="categories-grid">
          {categories.map(category => (
            <div 
              key={category.id} 
              className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <div className="category-icon" style={{ 
                backgroundColor: category.id === "crypto" ? "#8260F6" : 
                                category.id === "guides" ? "#F67B60" : 
                                category.id === "news" ? "#60A3F6" : 
                                category.id === "sport" ? "#FF2952" : 
                                category.id === "casino" ? "#28DB52" : 
                                category.id === "other" ? "#FFD700" : "#60A3F6"
              }}>
                {category.id === "crypto" && <span>₿</span>}
                {category.id === "guides" && <span>?</span>}
                {category.id === "news" && <span>N</span>}
                {category.id === "sport" && <span>🏀</span>}
                {category.id === "casino" && <span>🎲</span>}
                {category.id === "other" && <span>+</span>}
                {category.id === "all" && <span>All</span>}
              </div>
              <div className="category-name">{category.name}</div>
              <ChevronRight className="category-arrow" size={16} />
            </div>
          ))}
        </div>
      </div>

      {/* Blog posts */}
      <div className="blog-grid-container">
        {filteredPosts.map(post => (
          <div key={post.id} className="blog-card">
            <div className="blog-card-image" style={{ backgroundImage: `url(${post.image})` }}>
              <div className="blog-card-overlay"></div>
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-description">{post.description}</p>
              <button className="blog-read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

// CSS styles
const styles = `
.blog-page {
  width: 90%;
  margin-left: 5%;
  padding-bottom: 2rem;
  color: white;
}

.blog-header {
  width: 112%;
  margin-left: -6%;
  padding: 1.5rem 6%;
  background-color: #1A2C38;
  margin-bottom: 2rem;
}

.blog-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
}

.featured-post {
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
  margin-bottom: 2rem;
}

.featured-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
}

.featured-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
}

.featured-description {
  font-size: 1rem;
  color: #e0e0e0;
  max-width: 800px;
}

.categories-container {
  margin-bottom: 2rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem 1rem;
  background-color: #1A2C38;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  position: relative;
}

.category-item:hover {
  transform: translateY(-5px);
  background-color: #213743;
}

.category-item.active {
  background-color: #213743;
}

.category-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
}

.category-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  text-align: center;
}

.category-arrow {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 0.2s;
  color: #9ca3af;
}

.category-item:hover .category-arrow {
  opacity: 1;
}

.blog-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.blog-card {
  background-color: #1A2C38;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  transform: translateY(-5px);
}

.blog-card-image {
  position: relative;
  height: 160px;
  background-size: cover;
  background-position: center;
}

.blog-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%);
}

.blog-card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.blog-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: white;
}

.blog-card-description {
  font-size: 0.9rem;
  color: #9ca3af;
  margin-bottom: 1rem;
  flex: 1;
}

.blog-read-more {
  align-self: flex-start;
  padding: 0.5rem 1rem;
  background-color: #0D7E3E;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.blog-read-more:hover {
  background-color: #0A6731;
}

@media (max-width: 768px) {
  .blog-grid-container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .featured-post {
    height: 300px;
  }

  .featured-title {
    font-size: 1.5rem;
  }

  .featured-description {
    font-size: 0.9rem;
  }

  .categories-grid {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
}

@media (max-width: 480px) {
  .blog-grid-container {
    grid-template-columns: 1fr;
  }

  .featured-post {
    height: 250px;
  }

  .featured-title {
    font-size: 1.3rem;
  }
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default BlogPage;

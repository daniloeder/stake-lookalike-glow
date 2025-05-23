
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import "./BlogPage.css";

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

export default BlogPage;

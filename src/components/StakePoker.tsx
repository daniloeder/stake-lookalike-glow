import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import '../styles/StakePoker.css';

const StakePoker = () => {
  const [activeTab, setActiveTab] = useState("challenges");

  return (
    <div className="main-container">
      {/* Main game display area */}
      <div className="game-header">
        <div className="video-container">
          <div className="video-message">
            <p className="error-text">Failed to start third party demo session.</p>
            <p className="balance-text">
              Balance displayed in <span className="currency">USD</span>{" "}
              <ChevronDown className="inline-icon" />
            </p>
            <Button className="register-button">Register</Button>
          </div>

          <div className="control-icons">
            <div className="icon-frame">
              <span className="icon-inner-border"></span>
            </div>
            <div className="icon-frame">
              <span className="icon-filled"></span>
            </div>
            <div className="icon-frame">
              <span className="icon-double-line"></span>
            </div>
          </div>
        </div>

      </div>

      {/* Game info section */}
      <div className="info-container">
        <Card className="info-card">
          <div className="card-header">
            <div className="header-tags">
              <span className="white-text">Poker</span>
              <span className="separator">·</span>
              <span className="white-text">Stake Poker</span>
            </div>
            <button className="dropdown-icon">
              <ChevronDown className="chevron-icon" />
            </button>
          </div>

          <div className="tab-header">
            <button
              className={`tab-button ${activeTab === "challenges" ? "active-tab" : ""
                }`}
              onClick={() => setActiveTab("challenges")}
            >
              Challenges
            </button>
            <button
              className={`tab-button ${activeTab === "description" ? "active-tab" : ""
                }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
          </div>


          <div className="content-area">
            <div className="game-logo">
              <img
                src="/images/stake-poker.avif"
                alt="Stake Poker"
                className="logo-image"
              />
            </div>
            <div className="game-description">
              <div className="tag-list">
                <span className="tag">Edge: N/A</span>
              </div>
              <div className="tag-list">
                <span className="tag">Poker</span>
                <span className="tag">Stake Poker</span>
                <span className="tag">Stake Table Games</span>
                <span className="tag">Table Games</span>
              </div>
              <p>
                Gather your friends around the virtual poker table for the
                ultimate poker night and try your luck as you play poker online
                at Stake Casino!
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="info-container">
        <Card className="info-card">
          <div className="text-block">
            <h3 className="section-title">What is Poker?</h3>
            <p>
              Poker is a popular card game of skill that is widely played around the world, and particularly at online casinos such as Stake.com.
            </p>
            <p>
              The objective of this classic table game is to create the highest ranking five-card poker hand to beat the other players at the poker table.
            </p>
            <p>
              Whether you're a beginner to casino games, or advanced, you can have fun playing our online poker game against your friends and other keen poker players at Stake Casino!
            </p>

            <h3 className="section-title">Poker Gameplay & How to Play Poker</h3>
            <p>
              To play poker online at Stake.com, you must first create an account. Once you're all set up, you can take a seat at the virtual poker table and be in with a chance to win big.
            </p>
            <p>
              The objective of the game is to form the best five-card poker hand according to the hand rankings below. Be sure to check out our ultimate guide to playing poker online. You should also consider the following rules before getting started.
            </p>

            <h3 className="section-title">Rules of Poker</h3>
            <p>
              To understand the rules of poker, you first need to know the basic hand rankings, as the person wins the game with the best poker hand. In ascending order, here are the ten possible hand combinations in poker:
            </p>
            <ul>
              <li>High card - When no combinations are formed, the player with the highest card wins</li>
              <li>One pair - Two cards of the same value</li>
              <li>Two pair - Two different pairs of cards</li>
              <li>Three of a kind - Three cards of the same value</li>
              <li>Straight - Five cards in sequential order</li>
              <li>Flush - Five cards of the same suit</li>
              <li>Full house - A combination of three of a kind and one pair</li>
              <li>Four of a kind - Four cards of the same value</li>
              <li>Straight flush - A flush in sequential order</li>
              <li>Royal flush - A straight flush from 10 to Ace (odds are 649,739 to one)</li>
            </ul>
            <p>
              While there are many poker variations, Texas Hold’em is the most popular form. In Texas Hold’em, each player gets two secret “hole cards.” Betting begins immediately, with small and big blinds placed by the two players to the left of the dealer.
            </p>
            <p>
              Players can call, raise, or fold. Once betting is complete, three shared “flop” cards are revealed. Then, another betting round occurs before the “turn” (fourth card) is dealt, followed by another bet round, then the “river” (fifth card), and the final betting round. The best five-card hand wins.
            </p>

            <h3 className="section-title">Types of Poker Games</h3>
            <h4>Texas Hold'em</h4>
            <p>
              In Texas Hold'em, players use any combination of two hole cards and five community cards to form the best five-card hand.
            </p>
            <h4>Omaha</h4>
            <p>
              In Omaha, each player gets four hole cards and must use exactly two of them, along with three of the five community cards to make the best hand.
            </p>

            <h3 className="section-title">Poker Game Modes & Features</h3>
            <ul>
              <li><strong>Rapid Ring Games:</strong> Players instantly move to a new table after folding. Seats are randomly assigned.</li>
              <li><strong>Rapid Tournaments:</strong> Similar to Rapid Ring Games, but tournament style.</li>
              <li><strong>Rabbit Hunting:</strong> Reveals un-dealt community cards after a hand ends early.</li>
              <li><strong>Straddle:</strong> An optional third blind that increases the pot size pre-flop.</li>
              <li><strong>Run It Twice:</strong> Community cards are dealt twice if all all-in players opt in, and pots are split accordingly.</li>
              <li><strong>Bomb Pot:</strong> All players ante a large pot and skip to the flop.</li>
              <li><strong>Bounty:</strong> Rewards players for eliminating others during tournaments.</li>
              <li><strong>Shootout:</strong> Multi-round tournaments where players must win their table to advance.</li>
              <li><strong>Is Lucky One Hand:</strong> All players go all-in every round with no decisions.</li>
            </ul>

            <p>Explore more poker terminology in our <em>poker glossary</em>.</p>

            <h3 className="section-title">How to Deposit Funds to Play Stake Poker Online & Bet Responsibly</h3>
            <p>
              Stake supports deposits in local currencies like ARS, CLP, CAD, JPY, INR, and TRY, as well as cryptocurrencies like BTC, ETH, USDT, and more.
            </p>
            <p>
              You can use platforms like Moonpay and Swapped.com to buy crypto. Use the Stake Vault for secure storage, and review our crypto safety guide.
            </p>
            <p>
              Always gamble responsibly. Use our budget calculator and Stake Smart tools to stay in control.
            </p>

            <h3 className="section-title">Other Popular Stake Original Casino Games</h3>
            <p>
              Try Video Poker (a poker-slot hybrid), or explore Stake Originals like Plinko, Mines, Keno, Hilo, and more.
            </p>
            <p>
              Take advantage of promotions like Stake’s Daily Races or VIP Club rewards like rakeback and reload bonuses.
            </p>
            <p>
              New to online casinos? Read our full online casino guide before you start playing.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StakePoker;

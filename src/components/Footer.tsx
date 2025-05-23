import { Link } from "react-router-dom";
import { ExternalLink, Instagram, Twitter, Youtube, Facebook, Twitch, Linkedin } from "lucide-react";
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and copyright */}
        <div className="footer-logo-section">
          <div className="footer-logo-container">
          <img 
            src="src/assets/images/logo2.png"
            alt="Stake"
            className="footer-logo"
          />
          <p className="copyright">© {currentYear} Stake.com | All Rights Reserved.</p>
          </div>
          {/* Social media icons */}
          <div className="social-icons">
            <Link to="#" className="social-icon"><Linkedin size={18} /></Link>
            <Link to="#" className="social-icon"><Twitter size={18} /></Link>
            <Link to="#" className="social-icon"><Facebook size={18} /></Link>
            <Link to="#" className="social-icon"><Instagram size={18} /></Link>
            <Link to="#" className="social-icon"><Youtube size={18} /></Link>
            <Link to="#" className="social-icon"><Twitch size={18} /></Link>
          </div>
        </div>

        {/* Footer links */}
        <div className="footer-links-container">
          <div className="footer-links-column">
            <h3 className="footer-column-title">Casino</h3>
            <ul className="footer-links">
              <li><Link to="/casino">Casino Games</Link></li>
              <li><Link to="/slots">Slots</Link></li>
              <li><Link to="/live-casino">Live Casino</Link></li>
              <li><Link to="/roulette">Roulette</Link></li>
              <li><Link to="/blackjack">Blackjack</Link></li>
              <li><Link to="/poker">Poker</Link></li>
              <li><Link to="/providers">Providers</Link></li>
              <li><Link to="/promos">Promos & Competitions</Link></li>
              <li>
                <Link to="/stake-engine" className="external-link">
                  Stake Engine <ExternalLink className="external-icon" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h3 className="footer-column-title">Sports</h3>
            <ul className="footer-links">
              <li><Link to="/sportbook">Sportsbook</Link></li>
              <li><Link to="/live-sports">Live Sports</Link></li>
              <li><Link to="/soccer">Soccer</Link></li>
              <li><Link to="/basketball">Basketball</Link></li>
              <li><Link to="/tennis">Tennis</Link></li>
              <li><Link to="/esports">eSports</Link></li>
              <li><Link to="/bet-bonuses">Bet Bonuses</Link></li>
              <li><Link to="/sports-rules">Sports Rules</Link></li>
              <li><Link to="/racing-rules">Racing Rules</Link></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h3 className="footer-column-title">Support</h3>
            <ul className="footer-links">
              <li>
                <Link to="/help-center" className="external-link">
                  Help Center <ExternalLink className="external-icon" />
                </Link>
              </li>
              <li><Link to="/fairness">Fairness</Link></li>
              <li>
                <Link to="/gambling-helpline" className="external-link">
                  Gambling Helpline <ExternalLink className="external-icon" />
                </Link>
              </li>
              <li><Link to="/live-support">Live Support</Link></li>
              <li><Link to="/self-exclusion">Self Exclusion</Link></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h3 className="footer-column-title">About Us</h3>
            <ul className="footer-links">
              <li><Link to="/vip-club">VIP Club</Link></li>
              <li><Link to="/affiliate">Affiliate</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/aml-policy">AML Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h3 className="footer-column-title">Payment Info</h3>
            <ul className="footer-links">
              <li><Link to="/deposit-withdrawals">Deposit & Withdrawals</Link></li>
              <li><Link to="/currency-guide">Currency Guide</Link></li>
              <li><Link to="/crypto-guide">Crypto Guide</Link></li>
              <li><Link to="/supported-crypto">Supported Crypto</Link></li>
              <li><Link to="/vault">How to Use the Vault</Link></li>
              <li><Link to="/bet-with">How Much to Bet With</Link></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h3 className="footer-column-title">How-to Guides</h3>
            <ul className="footer-links">
              <li><Link to="/how-to-guides">How-to Guides</Link></li>
              <li><Link to="/online-casino-guide">Online Casino Guide</Link></li>
              <li><Link to="/sports-betting-guide">Sports Betting Guide</Link></li>
              <li><Link to="/live-stream-guide">How to Live Stream Sports</Link></li>
              <li><Link to="/stake-vip-guide">Stake VIP Guide</Link></li>
              <li><Link to="/house-edge-guide">House Edge Guide</Link></li>
            </ul>
          </div>
        </div>

        {/* Cryptocurrencies */}
        <div className="crypto-container">
          {['litecoin', 'bitcoin', 'ethereum', 'tron', 'dogecoin', 'bitcoincash', 'tether'].map((crypto) => (
            <div key={crypto} className="crypto-icon">
              <div className="crypto-logo"></div>
            </div>
          ))}
        </div>

        {/* Partners section */}
        <div className="partners-container">
          <div className="partners-row responsible-gaming">
            {['hub88', 'responsible-gambling', 'betblocker', '18plus'].map((partner) => (
              <div key={partner} className="partner-logo-container small">
                <div className="partner-logo"></div>
              </div>
            ))}
          </div>

          <div className="partners-row sponsors">
            {['crypto-foundation', 'stake-team', 'everton', 'ufc'].map((partner) => (
              <div key={partner} className="partner-logo-container large">
                <div className="partner-logo"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Gambling support */}
        <div className="gambling-support">
          <p>Stake is committed to responsible gambling, for more information visit <a href="https://www.gamblingtherapy.org" className="support-link">Gamblingtherapy.org</a></p>
        </div>

        {/* Company information */}
        <div className="company-info">
          <p>Stake is owned and operated by Medium Rare N.V. (Reg no. 145353, Dr. M.J. Hugenholtzweg Z/N UTS Gebouw, Curacao). Contact us at support@stake.com. Payment agent company is Medium Rare Limited with address: 7 Coe Avenue, 1087 Nicosia, Cyprus and Registration number: HE 410775</p>
        </div>

        {/* Support links at bottom */}
        <div className="support-links">
          <div className="support-item">Support <a href="mailto:support@stake.com">support@stake.com</a></div>
          <div className="support-item">Partners <a href="mailto:partners@stake.com">partners@stake.com</a></div>
          <div className="support-item">Press <a href="mailto:press@stake.com">press@stake.com</a></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

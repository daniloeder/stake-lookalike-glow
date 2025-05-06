
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-800 bg-[#0F1923] px-4 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Logo and copyright */}
        <div className="mb-8 flex flex-col items-center">
          <img 
            src="public/lovable-uploads/f5e5c414-4cd6-431f-a438-5ecffedb9217.png"
            alt="Stake"
            className="mb-2 h-10"
          />
          <p className="text-sm text-gray-400">© {currentYear} Stake.com | All Rights Reserved.</p>
        </div>

        {/* Social media icons */}
        <div className="mb-8 flex justify-center space-x-4">
          {['linkedin', 'discord', 'facebook', 'twitter', 'instagram', 'youtube', 'twitch', 'tiktok'].map((platform) => (
            <Link 
              key={platform} 
              to="#" 
              className="rounded-full bg-[#17242D] p-2 text-white transition-transform hover:scale-110 hover:bg-[#1A2C38]"
            >
              <div className="h-5 w-5"></div>
            </Link>
          ))}
        </div>

        {/* Footer links */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-medium">Casino</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/casino" className="hover:text-[#1A9AEF]">Casino Games</Link></li>
              <li><Link to="/slots" className="hover:text-[#1A9AEF]">Slots</Link></li>
              <li><Link to="/live-casino" className="hover:text-[#1A9AEF]">Live Casino</Link></li>
              <li><Link to="/roulette" className="hover:text-[#1A9AEF]">Roulette</Link></li>
              <li><Link to="/blackjack" className="hover:text-[#1A9AEF]">Blackjack</Link></li>
              <li><Link to="/poker" className="hover:text-[#1A9AEF]">Poker</Link></li>
              <li><Link to="/providers" className="hover:text-[#1A9AEF]">Providers</Link></li>
              <li>
                <Link to="/promos" className="flex items-center hover:text-[#1A9AEF]">
                  Promos & Competitions
                </Link>
              </li>
              <li>
                <Link to="/stake-engine" className="flex items-center hover:text-[#1A9AEF]">
                  Stake Engine <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Sports</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/sportbook" className="hover:text-[#1A9AEF]">Sportsbook</Link></li>
              <li><Link to="/live-sports" className="hover:text-[#1A9AEF]">Live Sports</Link></li>
              <li><Link to="/soccer" className="hover:text-[#1A9AEF]">Soccer</Link></li>
              <li><Link to="/basketball" className="hover:text-[#1A9AEF]">Basketball</Link></li>
              <li><Link to="/tennis" className="hover:text-[#1A9AEF]">Tennis</Link></li>
              <li><Link to="/esports" className="hover:text-[#1A9AEF]">eSports</Link></li>
              <li><Link to="/bet-bonuses" className="hover:text-[#1A9AEF]">Bet Bonuses</Link></li>
              <li><Link to="/sports-rules" className="hover:text-[#1A9AEF]">Sports Rules</Link></li>
              <li><Link to="/racing-rules" className="hover:text-[#1A9AEF]">Racing Rules</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/help-center" className="flex items-center hover:text-[#1A9AEF]">
                  Help Center <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li><Link to="/fairness" className="hover:text-[#1A9AEF]">Fairness</Link></li>
              <li>
                <Link to="/gambling-helpline" className="flex items-center hover:text-[#1A9AEF]">
                  Gambling Helpline <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li><Link to="/live-support" className="hover:text-[#1A9AEF]">Live Support</Link></li>
              <li><Link to="/self-exclusion" className="hover:text-[#1A9AEF]">Self Exclusion</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">About Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/vip-club" className="hover:text-[#1A9AEF]">VIP Club</Link></li>
              <li><Link to="/affiliate" className="hover:text-[#1A9AEF]">Affiliate</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#1A9AEF]">Privacy Policy</Link></li>
              <li><Link to="/aml-policy" className="hover:text-[#1A9AEF]">AML Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-[#1A9AEF]">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Payment Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/deposit-withdrawals" className="hover:text-[#1A9AEF]">Deposit & Withdrawals</Link></li>
              <li><Link to="/currency-guide" className="hover:text-[#1A9AEF]">Currency Guide</Link></li>
              <li><Link to="/crypto-guide" className="hover:text-[#1A9AEF]">Crypto Guide</Link></li>
              <li><Link to="/supported-crypto" className="hover:text-[#1A9AEF]">Supported Crypto</Link></li>
              <li><Link to="/vault" className="hover:text-[#1A9AEF]">How to Use the Vault</Link></li>
              <li><Link to="/bet-with" className="hover:text-[#1A9AEF]">How Much to Bet With</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">How-to Guides</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/how-to-guides" className="hover:text-[#1A9AEF]">How-to Guides</Link></li>
              <li><Link to="/online-casino-guide" className="hover:text-[#1A9AEF]">Online Casino Guide</Link></li>
              <li><Link to="/sports-betting-guide" className="hover:text-[#1A9AEF]">Sports Betting Guide</Link></li>
              <li><Link to="/live-stream-guide" className="hover:text-[#1A9AEF]">How to Live Stream Sports</Link></li>
              <li><Link to="/stake-vip-guide" className="hover:text-[#1A9AEF]">Stake VIP Guide</Link></li>
              <li><Link to="/house-edge-guide" className="hover:text-[#1A9AEF]">House Edge Guide</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment methods */}
        <div className="mb-8">
          <div className="mb-8 flex flex-wrap justify-center gap-6">
            {['litecoin', 'bitcoin', 'ethereum', 'tron', 'dogecoin', 'bitcoincash', 'tether'].map((crypto) => (
              <div key={crypto} className="opacity-50 hover:opacity-100">
                <div className="h-6 w-24 rounded bg-gray-700"></div>
              </div>
            ))}
          </div>
          
          <div className="mb-8 flex flex-wrap justify-center gap-12">
            {['hub88', 'responsible-gambling', 'betblocker', '18plus'].map((partner) => (
              <div key={partner} className="opacity-50 hover:opacity-100">
                <div className="h-6 w-24 rounded bg-gray-700"></div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            {['crypto-foundation', 'stake-team', 'everton', 'ufc'].map((partner) => (
              <div key={partner} className="opacity-50 hover:opacity-100">
                <div className="h-12 w-32 rounded bg-gray-700"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-gray-500">
          <p className="mb-4">Stake is committed to responsible gambling, for more information visit <a href="https://www.gamblingtherapy.org" className="text-[#1A9AEF] hover:underline">Gamblingtherapy.org</a></p>
          <p>Stake is owned and operated by Medium Rare N.V. (Reg no. 145353, Dr. M.J. Hugenholtzweg Z/N UTS Gebouw, Curacao). Contact us at support@stake.com. Payment agent company is Medium Rare Limited with address: 7 Coe Avenue, 1087 Nicosia, Cyprus and Registration number: HE 410775</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

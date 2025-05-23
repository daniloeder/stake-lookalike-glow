import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import '../styles/AuthModal.css';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "register";
}

interface SocialButtonProps {
  provider: "google" | "facebook" | "twitter";
}

const AuthModal = ({ isOpen, onClose, initialMode = "login" }: AuthModalProps) => {
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <div className="auth-modal-header">
          <h2 className="auth-modal-title">{mode === "login" ? "Login" : "Register"}</h2>
          <button className="auth-modal-close" onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="auth-modal-content">
          <div className="auth-tabs">
            <button
              className={`auth-tab ${mode === "login" ? "active" : ""}`}
              onClick={() => setMode("login")}
            >
              Login
            </button>
            <button
              className={`auth-tab ${mode === "register" ? "active" : ""}`}
              onClick={() => setMode("register")}
            >
              Register
            </button>
          </div>

          <form className="auth-form">
            {mode === "register" && (
              <div className="form-group">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-input"
                  placeholder="Enter your username"
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="form-input"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>
            {mode === "register" && (
              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <div className="password-input-container">
                  <input
                    type="password"
                    id="confirmPassword"
                    className="form-input"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            )}
            {mode === "login" && (
              <div className="form-group">
                <div className="form-checkbox-group">
                  <input type="checkbox" id="remember" className="form-checkbox" />
                  <label htmlFor="remember" className="checkbox-label">
                    Remember me
                  </label>
                </div>
              </div>
            )}
            <button type="submit" className="auth-submit-button">
              {mode === "login" ? "Login" : "Register"}
            </button>
          </form>

          {mode === "login" && (
            <>
              <div className="auth-divider">Or</div>
              <div className="social-auth-buttons">
                <button className="social-auth-button">
                  <img src="src/assets/icons/google.svg" alt="Google" />
                  Continue with Google
                </button>
                <button className="social-auth-button">
                  <img src="src/assets/icons/facebook.svg" alt="Facebook" />
                  Continue with Facebook
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

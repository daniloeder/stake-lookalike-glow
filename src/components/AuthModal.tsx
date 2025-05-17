
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login'
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    dateOfBirth: '',
    phone: '',
    code: '',
    language: 'English',
  });

  // Update mode when initialMode changes
  useEffect(() => {
    setMode(initialMode);
    setStep(1);
  }, [initialMode]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const nextStep = () => {
    if (mode === 'register') {
      if (step < 3) {
        setStep(step + 1);
      }
    }
  };

  const prevStep = () => {
    if (mode === 'register') {
      if (step > 1) {
        setStep(step - 1);
      }
    }
  };

  const switchToRegister = () => {
    setMode('register');
    setStep(1);
  };

  const switchToLogin = () => {
    setMode('login');
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === 'register' && step < 3) {
      nextStep();
    } else {
      console.log('Submitting form with:', formData);
      // API call would go here
    }
  };

  // Render login form
  const renderLoginForm = () => (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email or Username <span className="required">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="text"
          placeholder="Enter your email or username"
          value={formData.email}
          onChange={handleInputChange}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password <span className="required">*</span>
        </label>
        <div className="password-input-container">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-input"
            required
          />
          <button
            type="button"
            onClick={handleTogglePasswordVisibility}
            className="password-toggle"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="submit-button"
      >
        Sign in
      </button>

      <div className="divider">
        <span className="divider-text">OR</span>
      </div>

      <div className="auth-footer">
        <button
          type="button"
          className="link-button"
          onClick={() => console.log("Forgot password")}
        >
          Forgot Password
        </button>
      </div>

      <div className="auth-footer">
        Don't have an account?{" "}
        <button
          type="button"
          className="link-button"
          onClick={switchToRegister}
        >
          Register an Account
        </button>
      </div>
    </form>
  );

  // Render the registration form based on current step
  const renderRegisterForm = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-container">
            <p className="info-text">
              Stake is available in several languages. Feel free to personalise your language
              across our site from the options below.
            </p>
            <div className="form-group">
              <select
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="language-select"
              >
                <option value="English">English</option>
                <option value="Spanish">Español</option>
                <option value="Japanese">日本語</option>
                <option value="Chinese">中文</option>
                <option value="Portuguese">Português</option>
              </select>
            </div>

            <button
              type="button"
              onClick={nextStep}
              className="submit-button"
            >
              Confirm
            </button>

            <div className="auth-footer">
              Already have an account? <button type="button" className="link-button" onClick={switchToLogin}>Sign in</button>
            </div>
          </div>
        );
      case 2:
        return (
          <form onSubmit={handleSubmit} className="form-container scrollable-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email <span className="required">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="username" className="form-label">
                Username <span className="required">*</span>
              </label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Choose a username"
                value={formData.username}
                onChange={handleInputChange}
                className="form-input"
                required
              />
              <p className="help-text">Your username must be 3-14 characters long</p>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password <span className="required">*</span>
              </label>
              <div className="password-input-container">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <button
                  type="button"
                  onClick={handleTogglePasswordVisibility}
                  className="password-toggle"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="dateOfBirth" className="form-label">
                Date of Birth <span className="required">*</span>
              </label>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <div className="checkbox-container">
                <input
                  id="phone-checkbox"
                  type="checkbox"
                  className="checkbox-input"
                />
                <label htmlFor="phone-checkbox" className="checkbox-label">
                  Phone <span className="optional">(Optional)</span>
                </label>
              </div>
              {formData.phone && (
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              )}
            </div>

            <div className="form-group">
              <div className="checkbox-container">
                <input
                  id="code-checkbox"
                  type="checkbox"
                  className="checkbox-input"
                />
                <label htmlFor="code-checkbox" className="checkbox-label">
                  Code <span className="optional">(Optional)</span>
                </label>
              </div>
              {formData.code && (
                <Input
                  id="code"
                  name="code"
                  type="text"
                  placeholder="Enter a referral code"
                  value={formData.code}
                  onChange={handleInputChange}
                  className="form-input"
                />
              )}
            </div>

            <button
              type="button"
              onClick={nextStep}
              className="submit-button"
            >
              Continue
            </button>

          </form>
        );
      case 3:
        return (
          <div className="form-container">
            <div className="terms-container">
              <h3 className="terms-heading">1. STAKE.COM</h3>
              <p className="terms-text">
                1.1 Stake.com is owned and operated by Medium Rare, N.V. (hereinafter "Stake", "We" or
                "Us"), a company with head office at Seru Loraweg 17, B, Curaçao. Medium Rare NV is
                authorised to offer it's services in accordance with the Certificate of Operation (Application
                no. OGL/20214145/1090418) issued by the Curacao Gaming Control Board. Some credit card
                payment processing are handled by its wholly owned subsidiary, Medium Rare Limited.
              </p>

              <h3 className="terms-heading">2. IMPORTANT NOTICE</h3>
              <p className="terms-text">
                2.1 By registering on www.stake.com (the "Website"), you enter into a contract with Medium
                Rare N.V., and agree to be bound by (i) these Terms and Conditions, (ii) our Privacy Policy,
                (iii) our Cookies Policy and (iv) the rules applicable to our betting or gaming products as
                further referenced in these Terms and Conditions ("Terms and Conditions" or "Agreement"),
                and the betting and/or gaming contracts specific rules, and we deemed to have accepted and
                understood all the Terms.
              </p>

              <p className="terms-text">
                2.2 If there is any inconsistency between any of the documents referenced in clause 2.1
                here above, the terms and conditions of the document first listed shall prevail. If any of these
                Terms and Conditions conflict with the terms and conditions specific to a Stake product or
                service, the specific Stake product or service terms and conditions shall prevail.
              </p>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className="checkbox-input"
              />
              <label htmlFor="terms" className="checkbox-label">
                I have read and agree to the terms and conditions
              </label>
            </div>

            <button
              type="button"
              disabled={!termsAccepted}
              onClick={handleSubmit}
              className={`submit-button ${!termsAccepted ? 'disabled-button' : ''}`}
            >
              Create an Account
            </button>

            <div className="auth-footer">
              Already have an account? <button type="button" className="link-button" onClick={switchToLogin}>Sign in</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Header title based on mode and step
  const getModalTitle = () => {
    if (mode === 'login') return "Sign In";
    if (mode === 'register') {
      if (step === 1) return "Select Your Preferred Language";
      if (step === 2) return "Create an Account";
      return "Terms and Conditions";
    }
    return "";
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="dialog-content">
        <div className="auth-modal">
          {/* Custom modal header with logo and exit button */}
          <div className="modal-header">
            <div className="logo-container">
              <img src="src/assets/images/logo.png" alt="Stake" className="logo" />
            </div>
            <button onClick={onClose} className="exit-button">
              Exit
            </button>
          </div>

          {/* Progress bar for registration */}
          {mode === 'register' && (
            <div className="progress-container">
              <div className={`progress-bar ${step >= 1 ? 'active' : ''}`}></div>
              <div className={`progress-bar ${step >= 2 ? 'active' : ''}`}></div>
              <div className={`progress-bar ${step >= 3 ? 'active' : ''}`}></div>
            </div>
          )}

          {/* Navigation for registration */}
          {mode === 'register' && step > 1 && (
            <div className="navigation-bar">
              <div className="back-button-container">
                <button onClick={prevStep} className="back-button">
                  <ArrowLeft size={18} />
                  <span>Back</span>
                </button>
              </div>

              <div className="step-counter">
                <span>Step {step} / 3</span>
              </div>
            </div>
          )}

          {/* Login header */}
          {mode === 'login' && (
            <div className="login-header">
              <h2 className="login-title">Sign In</h2>
            </div>
          )}

          {/* Modal content */}
          <div className="modal-body">
            {mode === 'register' && (
              <h2 className="section-title">{getModalTitle()}</h2>
            )}
            {mode === 'login' ? renderLoginForm() : renderRegisterForm()}

            <div className="divider">
              <span className="divider-text">OR</span>
            </div>

            <div className="social-buttons">
              <button
                type="button"
                className="social-button"
              >
                <img src="src/assets/icons/facebook.svg" alt="Facebook" className="social-icon" />
              </button>
              <button
                type="button"
                className="social-button"
              >
                <img src="src/assets/icons/google.svg" alt="Google" className="social-icon" />
              </button>
              <button
                type="button"
                className="social-button"
              >
                <img src="src/assets/icons/line.svg" alt="Line" className="social-icon" />
              </button>
              <button
                type="button"
                className="social-button"
              >
                <img src="src/assets/icons/twitch.svg" alt="Twitch" className="social-icon" />
              </button>
            </div>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// CSS styles
const styles = `
.dialog-content {
  max-width: 500px;
  padding: 0 !important;
  border: none !important;
  background-color: #152836 !important;
  color: white !important;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3) !important;
  border-radius: 8px !important;
  overflow: hidden !important;
}

/* Hide the default X button from the Dialog component */
.dialog-content [data-radix-collection-item] {
  display: none !important;
}

.auth-modal {
  width: 100%;
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #263c49;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 32px;
}

.exit-button {
  background: none;
  padding: 1rem;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  top: 0rem;
  right: 0;
  background-color: #152836;
  z-index: 1000;
}

.progress-container {
  display: flex;
  width: 100%;
  height: 4px;
}

.progress-bar {
  flex: 1;
  height: 100%;
  background-color: #263c49;
  transition: background-color 0.3s ease;
}

.progress-bar.active {
  background-color: #00E701;
}

.navigation-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  border-bottom: 1px solid #263c49;
}

.back-button-container {
  display: flex;
  align-items: center;
}

.back-button {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  gap: 8px;
  font-size: 12px;
}

.step-counter {
  color: white;
  font-size: 12px;
}

.login-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #263c49;
}

.login-title {
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin: 0;
}

.modal-body {
  padding: 24px;
}

.section-title {
  font-size: 20px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 24px;
  color: white;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.scrollable-form {
  max-height: 380px;
  overflow-y: auto;
  // Style scrollbar
  scrollbar-width: thin;
  scrollbar-color: #263c49 #0c1720;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 14px;
  font-weight: 500;
  color: white;
}

.form-input {
  background-color: #0c1720 !important;
  border: 1px solid #263c49 !important;
  color: white !important;
  padding: 10px !important;
  border-radius: 4px !important;
  font-size: 14px !important;
}

.password-input-container {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
}

.required {
  color: #dc2626;
}

.optional {
  color: #6b7280;
  font-size: 12px;
}

.submit-button {
  background-color: #1A6ED8;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: #1864c6;
}

.disabled-button {
  background-color: #1a3d71 !important;
  cursor: not-allowed !important;
  opacity: 0.7;
}

.divider {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
}

.divider:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  border-top: 1px solid #263c49;
}

.divider-text {
  position: relative;
  padding: 0 12px;
  background-color: #152836;
  color: #6b7280;
  font-size: 14px;
}

.social-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0c1720;
  border: 1px solid #263c49;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.social-button:hover {
  background-color: #1a2936;
}

.social-icon {
  width: 24px;
  height: 24px;
}

.auth-footer {
  text-align: center;
  font-size: 14px;
  color: #6b7280;
}

.link-button {
  color: #1A6ED8;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-size: inherit;
  padding: 0;
}

.link-button:hover {
  text-decoration: underline;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.checkbox-input {
  height: 16px;
  width: 16px;
  background-color: #0c1720;
  border: 1px solid #263c49;
  border-radius: 4px;
  cursor: pointer;
}

.checkbox-label {
  font-size: 14px;
  color: white;
}

.info-text {
  color: #d1d5db;
  font-size: 14px;
  margin-bottom: 24px;
}

.help-text {
  color: #6b7280;
  font-size: 12px;
  margin: 4px 0 0 0;
}

.language-select {
  width: 100%;
  padding: 10px;
  background-color: #0c1720;
  color: white;
  border: 1px solid #263c49;
  border-radius: 4px;
  appearance: none;
  position: relative;
}

.language-select:after {
  content: '';
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid white;
  pointer-events: none;
}

.terms-container {
  height: 240px;
  overflow-y: auto;
  padding-right: 8px;
  margin-bottom: 16px;
  border: 1px solid #263c49;
  border-radius: 4px;
  padding: 16px;
  background-color: #0c1720;
}

.terms-heading {
  font-size: 16px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
}

.terms-text {
  font-size: 14px;
  color: #d1d5db;
  margin-bottom: 16px;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .dialog-content {
    max-width: 100%;
    border-radius: 0;
  }
}
`;

// Inject CSS
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = styles;
  document.head.appendChild(styleEl);
}

export default AuthModal;

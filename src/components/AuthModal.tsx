
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import "../styles/AuthModal.css";

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

export default AuthModal;

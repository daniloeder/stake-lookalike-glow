
import React, { useState } from 'react';
import AuthModal from './AuthModal';

interface AuthButtonsProps {
  className?: string;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'login' | 'register'>('login');

  const openLoginModal = () => {
    setModalMode('login');
    setIsModalOpen(true);
  };

  const openRegisterModal = () => {
    setModalMode('register');
    setIsModalOpen(true);
  };

  return (
    <div className={`auth-buttons ${className}`}>
      <button
        className="login-button"
        onClick={openLoginModal}
      >
        Login
      </button>

      <button
        className="register-button"
        onClick={openRegisterModal}
      >
        Register
      </button>

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialMode={modalMode}
      />
    </div>
  );
};

// CSS styles
const styles = `
.login-button {
  color: white;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s;
  margin-right: 1.5rem;
}

.login-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.register-button {
  background-color: #1060B7;
  color: white;
  font-weight: 500;
  padding: 0 1.25rem;
  transition: transform 0.2s, background-color 0.2s;
  border-radius: 4px;
}

.register-button:hover {
  background-color: #1060B7;
}
`;

// Inject CSS
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = styles;
  document.head.appendChild(styleEl);
}

export default AuthButtons;


import React, { useState } from 'react';
import AuthModal from './AuthModal';
import "./AuthButtons.css";

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

export default AuthButtons;

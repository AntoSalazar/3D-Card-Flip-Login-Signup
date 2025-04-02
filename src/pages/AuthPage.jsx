import React, { useState } from 'react';
import TabNavigation from '../components/Navigation/TabNavigation';
import ToggleSwitch from '../components/UI/ToggleSwitch/ToggleSwitch';
import FlipCard from '../components/UI/FlipCard/FlipCard';
import LoginForm from '../components/Login/LoginForm';
import SignupForm from '../components/Signup/SignupForm';

const AuthPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-900">
      {/* Top Navigation */}
      <div className="mb-8">
        <TabNavigation isFlipped={isFlipped} />
      </div>

      {/* Toggle Switch */}
      <div className="mb-8">
        <ToggleSwitch isFlipped={isFlipped} onToggle={handleFlip} />
      </div>

      {/* Flip Card */}
      <FlipCard
        isFlipped={isFlipped}
        frontContent={<LoginForm />}
        backContent={<SignupForm />}
      />
    </div>
  );
};

export default AuthPage;
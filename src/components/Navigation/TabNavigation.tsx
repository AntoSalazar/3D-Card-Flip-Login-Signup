import React from 'react';

const TabNavigation = ({ isFlipped }) => {
  return (
    <div className="flex justify-center gap-8">
      <button 
        className={`text-yellow-300 font-semibold text-lg ${isFlipped ? 'opacity-50' : 'opacity-100'}`}
      >
        Log In
      </button>
      <button 
        className={`text-yellow-300 font-semibold text-lg ${!isFlipped ? 'opacity-50' : 'opacity-100'}`}
      >
        Sign Up
      </button>
    </div>
  );
};

export default TabNavigation;
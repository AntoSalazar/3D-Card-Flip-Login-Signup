import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ToggleSwitch = ({ isFlipped, onToggle }) => {
  return (
    <button 
      onClick={onToggle}
      className="flex items-center justify-center bg-yellow-300 w-32 h-10 rounded-full relative cursor-pointer overflow-hidden"
    >
      {/* Black Circle that's centered vertically */}
      <div 
        className="absolute w-8 h-8 bg-black rounded-full transition-all duration-300"
        style={{ 
          left: isFlipped ? 'calc(100% - 32px)' : '4px', 
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      ></div>
      
      {/* Left-aligned content */}
      <div className="absolute inset-0 flex items-center px-3">
        {isFlipped ? (
          <ArrowLeft className="text-black w-4 h-4 z-10" />
        ) : (
          <span className="text-black font-medium ml-8">Log In</span>
        )}
      </div>
      
      {/* Right-aligned content */}
      <div className="absolute inset-0 flex items-center justify-end px-3">
        {isFlipped ? (
          <span className="text-black font-medium mr-8">Sign Up</span>
        ) : (
          <ArrowRight className="text-black w-4 h-4 z-10" />
        )}
      </div>
    </button>
  );
};

export default ToggleSwitch;

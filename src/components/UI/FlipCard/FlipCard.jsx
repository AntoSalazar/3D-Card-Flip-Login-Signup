import React from 'react';

const FlipCard = ({ isFlipped, frontContent, backContent }) => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square" style={{ perspective: '1000px' }}>
      {/* Card Inner */}
      <div 
        className="relative w-full h-full"
        style={{ 
          transformStyle: 'preserve-3d',
          transition: 'transform 0.8s',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front of Card (not flipped) */}
        <div 
           className="absolute w-full h-full bg-gray-800 border border-yellow-300/30 rounded-xl p-4 sm:p-8 flex flex-col items-center"
          style={{ 
            backfaceVisibility: 'hidden',
            boxShadow: '0 0 15px rgba(255, 215, 0, 0.1)',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          {frontContent}
        </div>
        
        {/* Back of Card (flipped) */}
        <div 
            className="absolute w-full h-full bg-gray-800 border border-yellow-300/30 rounded-xl p-4 sm:p-8 flex flex-col items-center"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            boxShadow: '0 0 15px rgba(255, 215, 0, 0.1)'
          }}
        >
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
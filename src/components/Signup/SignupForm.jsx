import React from 'react';
import { User, Phone, Mail, Lock } from 'lucide-react';

const SignupForm = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-yellow-300 text-2xl font-bold mb-8">Sign Up</h2>
      
      <div className="w-full space-y-4">
        <div className="flex items-center bg-gray-900 rounded-md p-3">
          <User className="text-yellow-300 mr-2" size={20} />
          <input 
            type="text" 
            placeholder="Username" 
            className="bg-transparent text-gray-300 outline-none w-full" 
          />
        </div>
        <div className="flex items-center bg-gray-900 rounded-md p-3">
          <Phone className="text-yellow-300 mr-2" size={20} />
          <input 
            type="tel" 
            placeholder="Phone" 
            className="bg-transparent text-gray-300 outline-none w-full" 
          />
        </div>
        <div className="flex items-center bg-gray-900 rounded-md p-3">
          <Mail className="text-yellow-300 mr-2" size={20} />
          <input 
            type="email" 
            placeholder="Email" 
            className="bg-transparent text-gray-300 outline-none w-full" 
          />
        </div>
        <div className="flex items-center bg-gray-900 rounded-md p-3">
          <Lock className="text-yellow-300 mr-2" size={20} />
          <input 
            type="password" 
            placeholder="••••••" 
            className="bg-transparent text-gray-300 outline-none w-full" 
          />
        </div>
      </div>
      
      <button className="mt-8 bg-yellow-300 text-gray-900 py-2 px-6 rounded-md font-semibold hover:bg-yellow-400 transition-colors">
        REGISTER
      </button>
    </div>
  );
};

export default SignupForm;
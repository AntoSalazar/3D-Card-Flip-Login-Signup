import React from 'react';
import { Mail, Lock } from 'lucide-react';
import SocialLoginButtons from './SocialLoginButtons';

const LoginForm = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-yellow-300 text-2xl font-bold mb-8">Log In</h2>
      
      <div className="w-full space-y-4">
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
            placeholder="Password" 
            className="bg-transparent text-gray-300 outline-none w-full" 
          />
        </div>
      </div>
      
      <button className="mt-8 bg-yellow-300 text-gray-900 py-2 px-6 rounded-md font-semibold hover:bg-yellow-400 transition-colors">
        LOGIN
      </button>
      
      <div className="mt-4 text-gray-400 text-center">
        Or
      </div>
      
      <div className="mt-4">
        <SocialLoginButtons />
      </div>
      
      <div className="mt-4 text-yellow-300 text-sm">
        Forgot your password?
      </div>
    </div>
  );
};

export default LoginForm;

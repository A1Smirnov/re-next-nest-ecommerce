// frontend/src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-gray-800 text-white text-center">
      <p>&copy; {new Date().getFullYear()} REMarket. All rights reserved.</p>
      <div className="mt-2">
        <a href="/" className="text-blue-400 hover:underline">Terms</a> | 
        <a href="/" className="ml-2 text-blue-400 hover:underline">Privacy</a>
      </div>
    </footer>
  );
};

export default Footer;

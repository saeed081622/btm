import React from 'react';

const Footer = () => (
  <footer className="bg-gray-200 py-4">
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold">Best Taxi Meter</h3>
    
      <p className="mt-2 text-sm text-gray-500">&copy; {new Date().getFullYear()} Best Taxi Meter. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Activity, Menu, Route, X, ChevronDown } from 'lucide-react'; // Import ChevronDown icon

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [showProfileMenu, setShowProfileMenu] = useState(false); // Track profile menu visibility

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check login state from localStorage when the component mounts
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login status to false
    localStorage.setItem('isLoggedIn', 'false'); // Update localStorage
    console.log('User logged out');    // Redirect to login page
    window.location.href = '/'; // Redirect to home page
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Workouts', href: '#features' },
    { name: 'Nutrition', href: '#feature-nutrition' },
    { name: 'Refreshing Sessions', href: '#feature-refreshing-session' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-10',
        scrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center space-x-2 text-wellness-600 font-semibold text-xl"
        >
          <Activity className="h-6 w-6 animate-pulse-soft" />
          <span>KeepMeFit</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-wellness-600 hover-underline font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center text-wellness-600 font-medium hover:text-wellness-700"
              >
                Profile <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    View Profile
                  </a>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <a
              href="/login"
              className="text-wellness-600 font-medium hover:text-wellness-700"
              onClick={() => localStorage.setItem('isLoggedIn', 'false')} // Ensure state is reset
            >
              Sign In
            </a>
          )}
          {!isLoggedIn && (
            <a
              href="/signup"
              className="bg-wellness-500 hover:bg-wellness-600 text-white py-2 px-4 rounded-full font-medium transition-all shadow-sm hover:shadow"
            >
              Get Started
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-wellness-600"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'absolute top-full left-0 right-0 bg-white shadow-lg md:hidden transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 py-4 space-y-3 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-wellness-600 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col space-y-3">
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="text-wellness-600 font-medium hover:text-wellness-700 py-2"
              >
                Logout
              </button>
            ) : (
              <a
                href="/login"
                className="text-wellness-600 font-medium hover:text-wellness-700 py-2"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </a>
            )}
            {!isLoggedIn && (
              <a
                href="#"
                className="bg-wellness-500 hover:bg-wellness-600 text-white py-3 px-4 rounded-lg font-medium text-center"
              >
                Get Started
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
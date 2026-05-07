import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Policies', path: '/policies' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 top-0 left-0 border-b border-primary-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-secondary-dark" />
              <span className="font-serif font-bold text-xl text-primary-800">Kalida Corner</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-secondary-dark font-bold'
                    : 'text-primary-600 hover:text-secondary-dark'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-secondary-dark hover:bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 shadow-md"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-600 hover:text-secondary-dark focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-primary-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-secondary-dark bg-primary-50'
                      : 'text-primary-600 hover:text-secondary-dark hover:bg-primary-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

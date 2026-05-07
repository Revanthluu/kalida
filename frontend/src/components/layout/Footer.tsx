import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-primary-100 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-bold mb-2">Kalida Corner</h3>
            <p className="text-primary-300 max-w-xs">
              Professional tutoring focusing on reading, writing, grammar, and ELA support.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <Link to="/about" className="hover:text-accent transition-colors">About Me</Link>
              <Link to="/policies" className="hover:text-accent transition-colors">Policies</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-800 text-center text-primary-400 text-sm">
          &copy; {new Date().getFullYear()} Kalida Corner. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

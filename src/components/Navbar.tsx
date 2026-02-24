import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '#home' },
    { name: '关于我们', href: '#about' },
    { name: '核心产品', href: '#products' },
    { name: '解决方案', href: '#solutions' },
    { name: '案例展示', href: '#cases' },
    { name: '新闻动态', href: '#news' },
    { name: '联系我们', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            G
          </div>
          <div className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            贵旅数网
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
            商务合作
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className={scrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 md:hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 font-medium hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-50 flex justify-between items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <ChevronRight size={16} />
                </a>
              ))}
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium mt-2">
                商务合作
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

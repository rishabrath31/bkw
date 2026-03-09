import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Helmets', href: '#helmets' },
  { name: 'Riding Jackets', href: '#jackets' },
  { name: 'Spare Parts', href: '#parts' },
  { name: 'Accessories', href: '#accessories' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold tracking-tighter text-carbon-black group-hover:text-racing-red transition-colors">
              BKW<span className="text-racing-red">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`relative text-sm font-medium transition-colors hover:text-racing-red ${
                  activeLink === link.name ? 'text-racing-red' : 'text-carbon-black'
                }`}
              >
                {link.name}
                {activeLink === link.name && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-racing-red rounded-full"
                  />
                )}
              </a>
            ))}
            
            <button className="flex items-center gap-2 bg-carbon-black text-white px-5 py-2 rounded-full hover:bg-racing-red transition-colors text-sm font-medium shadow-md">
              <ShoppingCart size={16} />
              <span>Shop</span>
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-carbon-black hover:text-racing-red transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-carbon-black/20 backdrop-blur-sm z-50"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-50 flex flex-col pt-20 px-8"
            >
              <button
                className="absolute top-6 right-6 text-carbon-black hover:text-racing-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>

              <nav className="flex flex-col gap-6 text-lg mt-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`font-semibold border-b border-gray-100 pb-3 transition-colors ${
                      activeLink === link.name ? 'text-racing-red' : 'text-carbon-black hover:text-racing-red'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-auto mb-10">
                <button className="w-full flex justify-center items-center gap-2 bg-racing-red text-white py-4 rounded-xl font-semibold shadow-lg shadow-racing-red/20">
                  <ShoppingCart size={20} />
                  <span>Start Shopping</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

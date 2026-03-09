import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Helmets', href: '/helmets' },
  { name: 'Riding Jackets', href: '/jackets' },
  { name: 'Spare Parts', href: '/spare-parts' },
  { name: 'Accessories', href: '/accessories' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold tracking-tighter text-carbon-black group-hover:text-racing-red transition-colors">
              BKW<span className="text-racing-red">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-sm font-medium transition-colors hover:text-racing-red ${
                    isActive ? 'text-racing-red' : 'text-carbon-black'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-racing-red rounded-full"
                    />
                  )}
                </Link>
              );
            })}

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

              <nav className="flex flex-col gap-1 mt-8">
                {NAV_LINKS.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`font-semibold border-b border-gray-100 py-4 transition-colors flex items-center gap-3 ${
                        isActive ? 'text-racing-red' : 'text-carbon-black hover:text-racing-red'
                      }`}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-racing-red" />}
                      {link.name}
                    </Link>
                  );
                })}
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

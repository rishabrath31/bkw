import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const IMAGES = [
  'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558981420-55e1c25143a5?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1609630875171-b132137746f3?q=80&w=1920&auto=format&fit=crop',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-light-grey flex items-center justify-center pt-24">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIndex}
            src={IMAGES[currentIndex]}
            alt="Premium Helmet Background"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Subtle white gradient overlay for 'Light Modern' contrast */}
        <div className="absolute inset-0 bg-white/40 md:bg-white/30 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center md:items-start text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel p-8 md:p-12 rounded-3xl max-w-2xl border-white/60 shadow-xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-racing-red/10 text-racing-red font-semibold text-sm mb-6 uppercase tracking-wider">
            Premium Brands
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-carbon-black leading-tight mb-4 hidden md:block">
            Odisha's Oldest <br /> Helmet Gallery
          </h1>
          <h1 className="text-4xl font-extrabold text-carbon-black leading-tight mb-4 md:hidden">
            Odisha's Oldest Helmet Gallery
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8 font-medium">
            Explore the finest selection of Axor, LS2, Steelbird, and riding accessories designed to keep you safe and stylish.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="flex items-center justify-center gap-2 bg-racing-red text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-rose-700 transition-all shadow-lg hover:shadow-racing-red/30 hover:-translate-y-1">
              Shop Collections
              <ArrowRight size={20} />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-carbon-black px-8 py-3.5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-md border-2 border-transparent hover:border-gray-200">
              Explore Brands
            </button>
          </div>
        </motion.div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-8 bg-racing-red' : 'w-2.5 bg-carbon-black/30 hover:bg-carbon-black/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

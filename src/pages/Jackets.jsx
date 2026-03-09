import { motion } from 'framer-motion';
import { Eye, ShoppingBag, Star, SlidersHorizontal, Shield } from 'lucide-react';
import { useState } from 'react';

const JACKETS = [
  { id: 1, name: 'Royal Enfield Streetwind Jacket', brand: 'Royal Enfield', price: '₹8,999', rating: 4.8, reviews: 87, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop', badge: 'New', category: 'Textile' },
  { id: 2, name: 'Rynox Tornado Pro 3', brand: 'Rynox', price: '₹12,500', originalPrice: '₹14,000', rating: 4.9, reviews: 203, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop', badge: 'Bestseller', category: 'Textile' },
  { id: 3, name: 'Cramster Convoy', brand: 'Cramster', price: '₹6,500', rating: 4.6, reviews: 145, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop', category: 'Leather' },
  { id: 4, name: 'Axor Moto Jacket', brand: 'Axor', price: '₹9,800', rating: 4.7, reviews: 62, image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=800&auto=format&fit=crop', category: 'Leather' },
  { id: 5, name: 'Rynox Stealth Evo', brand: 'Rynox', price: '₹7,200', rating: 4.8, reviews: 119, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop', category: 'Mesh' },
  { id: 6, name: 'Wunderlich Rallye Jacket', brand: 'Wunderlich', price: '₹22,000', rating: 4.9, reviews: 31, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop', badge: 'Premium', category: 'Textile' },
  { id: 7, name: 'Cramster Ranger', brand: 'Cramster', price: '₹5,999', rating: 4.5, reviews: 78, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop', category: 'Mesh' },
  { id: 8, name: 'BKW Classic Leather', brand: 'BKW', price: '₹11,500', rating: 4.7, reviews: 44, image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=800&auto=format&fit=crop', badge: 'Exclusive', category: 'Leather' },
];

const CATEGORIES = ['All', 'Textile', 'Leather', 'Mesh'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map(s => (
        <Star key={s} size={12} className={s <= Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200 fill-gray-200'} />
      ))}
      <span className="text-xs text-gray-500 ml-1">{rating}</span>
    </div>
  );
}

export default function Jackets() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? JACKETS : JACKETS.filter(j => j.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="bg-light-grey py-16 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-bold text-racing-red tracking-widest uppercase mb-2">Ride Protected</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-carbon-black mb-4">Riding Jackets</h1>
            <p className="text-gray-500 text-lg max-w-xl">CE-rated protective jackets for every riding style — touring, street, and adventure. Stay safe, look great.</p>
            <div className="flex items-center gap-2 mt-6 text-sm text-carbon-black font-semibold">
              <Shield size={16} className="text-racing-red" /> CE Level 1 & Level 2 Certified
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <div className="flex items-center gap-2 text-carbon-black font-semibold mr-2">
            <SlidersHorizontal size={18} className="text-racing-red" />
            <span>Filter:</span>
          </div>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${activeCategory === cat ? 'bg-racing-red text-white border-racing-red shadow-lg shadow-racing-red/20' : 'bg-white text-carbon-black border-gray-200 hover:border-racing-red hover:text-racing-red'}`}>
              {cat}
            </button>
          ))}
          <span className="ml-auto text-sm text-gray-400 font-medium">{filtered.length} products</span>
        </div>

        <motion.div key={activeCategory} variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map(product => (
            <motion.div key={product.id} variants={itemVariants}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-light-grey">
                {product.badge && (
                  <div className={`absolute top-4 left-4 z-10 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${product.badge === 'Bestseller' ? 'bg-amber-500' : product.badge === 'Premium' || product.badge === 'Exclusive' ? 'bg-purple-600' : 'bg-carbon-black'}`}>
                    {product.badge}
                  </div>
                )}
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="bg-racing-red text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all"><Eye size={20} /></button>
                  <button className="bg-carbon-black text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all"><ShoppingBag size={20} /></button>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">{product.brand} · {product.category}</p>
                <h3 className="text-base font-bold text-carbon-black mb-2 truncate">{product.name}</h3>
                <StarRating rating={product.rating} />
                <p className="text-xs text-gray-400 mb-3">{product.reviews} reviews</p>
                <div className="flex items-center gap-2">
                  <span className="text-racing-red font-bold text-lg">{product.price}</span>
                  {product.originalPrice && <span className="text-gray-400 text-sm line-through">{product.originalPrice}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Eye, ShoppingBag, Wrench, Star } from 'lucide-react';
import { useState } from 'react';

const PARTS = [
  { id: 1, name: 'Visor for LS2 FF353', brand: 'LS2', price: '₹699', rating: 4.6, reviews: 54, image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop', category: 'Visors' },
  { id: 2, name: 'Chin Strap Pad (Universal)', brand: 'Steelbird', price: '₹199', rating: 4.3, reviews: 120, image: 'https://images.unsplash.com/photo-1627616196590-f6c13def6509?q=80&w=800&auto=format&fit=crop', category: 'Pads & Liners' },
  { id: 3, name: 'Anti-Fog Visor Insert', brand: 'Axor', price: '₹399', rating: 4.7, reviews: 88, image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop', badge: 'Popular', category: 'Visors' },
  { id: 4, name: 'Cheek Pad Set – Axor', brand: 'Axor', price: '₹550', rating: 4.5, reviews: 43, image: 'https://images.unsplash.com/photo-1609630875171-b132137746f3?q=80&w=800&auto=format&fit=crop', category: 'Pads & Liners' },
  { id: 5, name: 'SMK Crown Liner', brand: 'SMK', price: '₹450', rating: 4.4, reviews: 37, image: 'https://images.unsplash.com/photo-1558191053-8edcb01e1da3?q=80&w=800&auto=format&fit=crop', category: 'Pads & Liners' },
  { id: 6, name: 'Motorcycle Mirror Set', brand: 'Generic', price: '₹299', rating: 4.2, reviews: 201, image: 'https://images.unsplash.com/photo-1558980394-0a37b3636894?q=80&w=800&auto=format&fit=crop', category: 'Mirrors' },
  { id: 7, name: 'Pinlock Lens 70 for LS2', brand: 'LS2', price: '₹849', rating: 4.8, reviews: 66, image: 'https://images.unsplash.com/photo-1590432851480-163a700fb470?q=80&w=800&auto=format&fit=crop', badge: 'New', category: 'Visors' },
  { id: 8, name: 'Visor Pivot Screw Kit', brand: 'Generic', price: '₹99', rating: 4.1, reviews: 95, image: 'https://images.unsplash.com/photo-1618151313441-bc79c11e50e0?q=80&w=800&auto=format&fit=crop', category: 'Hardware' },
];

const CATEGORIES = ['All', 'Visors', 'Pads & Liners', 'Mirrors', 'Hardware'];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const itemVariants = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map(s => <Star key={s} size={12} className={s <= Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200 fill-gray-200'} />)}
      <span className="text-xs text-gray-500 ml-1">{rating}</span>
    </div>
  );
}

export default function SpareParts() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? PARTS : PARTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="bg-light-grey py-16 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-bold text-racing-red tracking-widest uppercase mb-2">Keep Riding</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-carbon-black mb-4">Spare Parts</h1>
            <p className="text-gray-500 text-lg max-w-xl">Genuine and OEM-compatible spare parts for your helmet and riding gear. Visors, liners, pads, and more.</p>
            <div className="flex items-center gap-2 mt-6 text-sm text-carbon-black font-semibold">
              <Wrench size={16} className="text-racing-red" /> Genuine & Compatible Parts
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-wrap items-center gap-3 mb-10">
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
                {product.badge && <div className="absolute top-4 left-4 z-10 bg-carbon-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{product.badge}</div>}
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply" />
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
                <span className="text-racing-red font-bold text-lg">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Eye, ShoppingBag } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: 'Axor Apex Venomous',
    brand: 'Axor',
    price: '₹5,499',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop',
    badge: 'New',
  },
  {
    id: 2,
    name: 'LS2 FF353 Rapid',
    brand: 'LS2',
    price: '₹4,850',
    image: 'https://images.unsplash.com/photo-1590432851480-163a700fb470?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Steelbird SA-2',
    brand: 'Steelbird',
    price: '₹2,699',
    image: 'https://images.unsplash.com/photo-1627616196590-f6c13def6509?q=80&w=800&auto=format&fit=crop',
    badge: 'Bestseller',
  },
  {
    id: 4,
    name: 'Axor Street Batman',
    brand: 'Axor',
    price: '₹5,199',
    image: 'https://images.unsplash.com/photo-1618151313441-bc79c11e50e0?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'MT Thunder 3',
    brand: 'MT Helmets',
    price: '₹6,200',
    image: 'https://images.unsplash.com/photo-1558191053-8edcb01e1da3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Smk Typhoon',
    brand: 'SMK',
    price: '₹4,500',
    image: 'https://images.unsplash.com/photo-1558980394-0a37b3636894?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Vega Bolt Bunny',
    brand: 'Vega',
    price: '₹2,199',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Axor Retro',
    brand: 'Axor',
    price: '₹4,299',
    image: 'https://images.unsplash.com/photo-1609630875171-b132137746f3?q=80&w=800&auto=format&fit=crop',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function ProductGrid() {
  return (
    <section id="helmets" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-racing-red tracking-widest uppercase mb-2">Our Collection</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-carbon-black">New Arrivals</h3>
          <div className="w-24 h-1 bg-racing-red mx-auto mt-6 rounded-full" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-square overflow-hidden bg-light-grey">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-carbon-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {product.badge}
                  </div>
                )}
                
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 mix-blend-multiply"
                />

                {/* Quick View Button overlay */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="bg-racing-red text-white p-3 rounded-full shadow-lg hover:bg-rose-700 hover:scale-110 transition-all flex items-center justify-center">
                    <Eye size={20} />
                  </button>
                  <button className="bg-carbon-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 hover:scale-110 transition-all flex items-center justify-center">
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-400 font-medium mb-1">{product.brand}</p>
                <h4 className="text-lg font-bold text-carbon-black mb-2 truncate">{product.name}</h4>
                <p className="text-racing-red font-bold text-lg">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-16">
          <button className="px-8 py-3.5 border-2 border-carbon-black text-carbon-black rounded-full font-bold hover:bg-carbon-black hover:text-white transition-colors duration-300">
            View All Helmets
          </button>
        </div>
      </div>
    </section>
  );
}

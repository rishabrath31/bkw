import { motion } from 'framer-motion';
import { Award, Users, MapPin, Clock } from 'lucide-react';

const STATS = [
  { icon: Award, label: 'Years of Trust', value: '25+' },
  { icon: Users, label: 'Happy Riders', value: '50,000+' },
  { icon: MapPin, label: 'Flagship Store', value: 'Patia, Odisha' },
  { icon: Clock, label: 'Open Daily', value: '10AM – 9PM' },
];

const BRANDS = ['Axor', 'LS2', 'Steelbird', 'MT Helmets', 'SMK', 'Vega', 'Rynox', 'Cramster'];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Banner */}
      <div className="relative bg-carbon-black py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1920&auto=format&fit=crop" alt="About BKW" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative container mx-auto px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-racing-red font-bold tracking-widest uppercase text-sm mb-4">Our Story</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">Odisha's Oldest<br /><span className="text-racing-red">Helmet Gallery</span></h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">Since 1999, Banadurga Kinetic World has been Odisha's most trusted destination for premium riding gear. From Bhubaneswar's heart to every road in the state.</p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 py-12">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map(({ icon: Icon, label, value }) => (
              <motion.div key={label} variants={itemVariants} className="text-center group">
                <div className="w-14 h-14 bg-racing-red/10 text-racing-red rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-racing-red group-hover:text-white transition-colors duration-300">
                  <Icon size={26} />
                </div>
                <p className="text-3xl font-extrabold text-carbon-black mb-1">{value}</p>
                <p className="text-sm text-gray-500 font-medium">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-24 bg-light-grey">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-bold text-racing-red tracking-widest uppercase mb-3">Who We Are</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-carbon-black mb-6 leading-tight">More Than a Store. <br />A Riding Community.</h2>
            <p className="text-gray-600 text-lg mb-5 leading-relaxed">Banadurga Kinetic World (BKW) was established with a single vision: to make premium riding gear accessible to every rider in Odisha. From first-time bikers to seasoned tourers, we have something for everyone.</p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">Our expert staff are riders themselves — they understand your needs because they share your passion.</p>
            <a href="/helmets" className="inline-flex items-center gap-2 bg-racing-red text-white px-8 py-3.5 rounded-full font-bold hover:bg-rose-700 transition-all shadow-lg hover:shadow-racing-red/30 hover:-translate-y-1">
              Explore Products
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
              <img src="https://images.unsplash.com/photo-1558981420-55e1c25143a5?q=80&w=800&auto=format&fit=crop" alt="BKW Store" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-2xl shadow-xl">
              <p className="text-3xl font-extrabold text-carbon-black">25+</p>
              <p className="text-sm text-gray-500 font-medium">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brands we carry */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-racing-red tracking-widest uppercase mb-2">Trusted Partners</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-carbon-black">Brands We Carry</h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4">
            {BRANDS.map(brand => (
              <motion.div key={brand} variants={itemVariants}
                className="glass-panel px-8 py-4 rounded-2xl text-lg font-bold text-carbon-black hover:border-racing-red/40 hover:text-racing-red transition-colors duration-200 cursor-pointer">
                {brand}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

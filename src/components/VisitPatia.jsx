import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VisitPatia() {
  return (
    <section id="visit-us" className="py-24 bg-light-grey relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full opacity-50 blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-sm font-bold text-racing-red tracking-widest uppercase mb-2">Locate Us</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-carbon-black mb-6">Visit Our Gallery</h3>
          <p className="text-gray-600 max-w-2xl text-lg md:mx-0 mx-auto">
            Experience our premium collection of riding gear in person. Expert advice and fitting guidance available at our flagship store.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="glass-panel p-8 rounded-3xl group hover:border-racing-red/30 transition-colors">
              <div className="w-12 h-12 bg-racing-red/10 text-racing-red rounded-2xl flex items-center justify-center mb-6 group-hover:bg-racing-red group-hover:text-white transition-colors duration-300">
                <MapPin size={24} />
              </div>
              <h4 className="text-xl font-bold text-carbon-black mb-3">Patia Store</h4>
              <p className="text-gray-600 font-medium leading-relaxed">
                Banadurga Kinetic World<br />
                Patia Chowk, Infocity Ave<br />
                Bhubaneswar, Odisha
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl group hover:border-racing-red/30 transition-colors">
              <div className="w-12 h-12 bg-racing-red/10 text-racing-red rounded-2xl flex items-center justify-center mb-6 group-hover:bg-racing-red group-hover:text-white transition-colors duration-300">
                <Clock size={24} />
              </div>
              <h4 className="text-xl font-bold text-carbon-black mb-3">Opening Hours</h4>
              <p className="text-gray-600 font-medium leading-relaxed">
                Monday - Sunday<br />
                10:00 AM - 9:00 PM<br />
                <span className="text-racing-red font-semibold mt-2 inline-block">Open Every Day</span>
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl group hover:border-racing-red/30 transition-colors">
              <div className="w-12 h-12 bg-racing-red/10 text-racing-red rounded-2xl flex items-center justify-center mb-6 group-hover:bg-racing-red group-hover:text-white transition-colors duration-300">
                <Phone size={24} />
              </div>
              <h4 className="text-xl font-bold text-carbon-black mb-3">Contact</h4>
              <p className="text-gray-600 font-medium leading-relaxed">
                +91 98765 43210<br />
                +91 99887 76655
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl group hover:border-racing-red/30 transition-colors">
              <div className="w-12 h-12 bg-racing-red/10 text-racing-red rounded-2xl flex items-center justify-center mb-6 group-hover:bg-racing-red group-hover:text-white transition-colors duration-300">
                <Mail size={24} />
              </div>
              <h4 className="text-xl font-bold text-carbon-black mb-3">Email Us</h4>
              <p className="text-gray-600 font-medium leading-relaxed break-words">
                info@bkwgears.com<br />
                support@bkwgears.com
              </p>
            </div>
          </motion.div>

          {/* Map Glass Tile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[500px] w-full glass-tile p-2 relative shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] group"
          >
            <div className="absolute inset-0 border-[6px] border-white/50 rounded-[inherit] pointer-events-none z-10" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14962.836159981441!2d85.80806148309205!3d20.353683058867375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19091bf0285a73%3A0xe5f86e3f4e24ebde!2sPatia%20Square!5e0!3m2!1sen!2sin!4v1683262453662!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1rem', filter: 'grayscale(0.2) contrast(1.1) brightness(1.05)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

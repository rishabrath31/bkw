import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Helmets from './pages/Helmets';
import Jackets from './pages/Jackets';
import SpareParts from './pages/SpareParts';
import Accessories from './pages/Accessories';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-carbon-black bg-white min-h-screen selection:bg-racing-red selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/helmets" element={<Helmets />} />
            <Route path="/jackets" element={<Jackets />} />
            <Route path="/spare-parts" element={<SpareParts />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="bg-carbon-black text-gray-300 py-16 border-t border-gray-800">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <span className="text-2xl font-bold tracking-tighter text-white block mb-4">BKW<span className="text-racing-red">.</span></span>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">Odisha's oldest and most trusted helmet gallery. Premium riding gear for every road.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Shop</h4>
                <ul className="space-y-2">
                  {[['Helmets','/helmets'],['Riding Jackets','/jackets'],['Spare Parts','/spare-parts'],['Accessories','/accessories']].map(([label, href]) => (
                    <li key={label}><a href={href} className="text-gray-400 hover:text-racing-red transition-colors text-sm">{label}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Visit Us</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Patia Chowk, Infocity Ave<br />Bhubaneswar, Odisha<br /><br />Mon–Sun: 10AM – 9PM</p>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} Banadurga Kinetic World. All rights reserved.</p>
              <a href="/about" className="text-sm text-gray-400 hover:text-racing-red transition-colors">About Us →</a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

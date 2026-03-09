import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import VisitPatia from './components/VisitPatia';

function App() {
  return (
    <div className="font-sans text-carbon-black bg-white min-h-screen selection:bg-racing-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <VisitPatia />
      </main>
      
      <footer className="bg-carbon-black text-gray-300 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-white">
              BKW<span className="text-racing-red">.</span>
            </span>
          </div>
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} Banadurga Kinetic World. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

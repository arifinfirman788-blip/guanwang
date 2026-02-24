import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreProducts from './components/CoreProducts';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CoreProducts />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;

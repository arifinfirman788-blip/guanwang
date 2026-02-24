import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreProducts from './components/CoreProducts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CoreProducts />
      </main>
      <Footer />
    </div>
  );
}

export default App;

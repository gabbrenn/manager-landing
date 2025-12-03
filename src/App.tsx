import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Business from './components/Business';
import Products from './components/Products';
import Personal from './components/Personal';
import Testimonials from './components/Testimonials';
import Company from './components/Company';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <Business />
      <Products />
      <Personal />
      <Testimonials />
      <Company />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

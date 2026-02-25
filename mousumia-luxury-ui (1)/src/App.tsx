/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  Search, 
  User, 
  ShoppingBag, 
  Instagram, 
  Facebook, 
  Twitter, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the featured section is hitting the top of the viewport
        // or is already above it.
        setIsScrolled(!entry.isIntersecting && entry.boundingClientRect.top <= 0);
      },
      {
        threshold: [0],
        rootMargin: '-80px 0px 0px 0px' // Trigger slightly before it hits the very top
      }
    );

    const featuredSection = document.getElementById('featured-section');
    if (featuredSection) {
      observer.observe(featuredSection);
    }

    // Fallback scroll listener for more precise control if needed
    const handleScroll = () => {
      const featured = document.getElementById('featured-section');
      if (featured) {
        const rect = featured.getBoundingClientRect();
        // If the top of the featured section is at or above the header height
        setIsScrolled(rect.top <= 80);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-forest-luxury py-3 shadow-lg' : 'bg-forest-luxury py-6'}`}>
      <div className="max-w-[1800px] mx-auto px-4 md:px-12 flex items-center text-white">
        {/* Left: Menu */}
        <div className="flex-1 flex items-center justify-start">
          <div className="cursor-pointer group">
            <Menu size={20} className="hover:opacity-70 transition-opacity" />
          </div>
        </div>

        {/* Center: Logo */}
        <div className="flex-1 text-center">
          <h1 className="logo-font text-2xl md:text-3xl cursor-pointer text-gold-luxury inline-block">MOUSUMIA</h1>
        </div>

        {/* Right: Icons */}
        <div className="flex-1 flex items-center justify-end gap-4 md:gap-6">
          <Search size={20} className="cursor-pointer hover:opacity-70 transition-opacity" />
          <User size={20} className="cursor-pointer hover:opacity-70 transition-opacity hidden md:block" />
          <ShoppingBag size={20} className="cursor-pointer hover:opacity-70 transition-opacity" />
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="sticky top-0 h-screen w-full overflow-hidden bg-black z-10 transform-gpu will-change-transform">
      <div className="absolute inset-0 opacity-60">
        {/* Placeholder for autoplaying video */}
        <img 
          src="https://picsum.photos/seed/mousumia-hero/1920/1080?blur=2" 
          alt="Hero background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-7xl font-light tracking-[0.2em] mb-8"
        >
          THE NEW COLLECTION
        </motion.h2>
        
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="px-10 py-3 border border-white text-xs tracking-widest uppercase hover:bg-white hover:text-forest-luxury btn-hover-expand"
        >
          Shop Now
        </motion.button>
      </div>
    </section>
  );
};

const BrandStatementSection = () => {
  return (
    <section className="sticky top-0 min-h-screen bg-white z-20 m-0 p-0 transform-gpu will-change-transform">
      <div className="w-full flex flex-col group cursor-pointer h-screen">
        <div className="relative overflow-hidden flex-grow">
          <img 
            src="https://picsum.photos/seed/brand-statement/2400/1200" 
            alt="Brand Statement" 
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors duration-500"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 card-text-shift pointer-events-none">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-4 text-white opacity-90 drop-shadow-md">The Essence of Luxury</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] uppercase mb-8 text-white drop-shadow-lg">A Legacy Reimagined</h2>
            <button className="text-[10px] tracking-[0.2em] uppercase border-b border-white pb-1 text-white hover:opacity-70 transition-opacity btn-hover-expand pointer-events-auto">Explore the Story</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CuratedSection = () => {
  return (
    <section className="sticky top-0 h-screen w-full overflow-hidden z-30 mb-20 transform-gpu will-change-transform">
      <img 
        src="https://picsum.photos/seed/curated/1920/1080" 
        alt="Curated Lifestyle" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[16px] md:text-5xl font-light tracking-[0.1em] md:tracking-[0.2em] text-white mb-8 whitespace-nowrap">CURATED BY MOUSUMIA</h2>
          <button className="w-auto bg-forest-luxury text-white px-5 py-2.5 md:px-10 md:py-4 text-[10px] md:text-xs tracking-widest uppercase hover:bg-white hover:text-forest-luxury btn-hover-expand">
            Shop the Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const SeasonalSection = () => {
  return (
    <section className="sticky top-0 min-h-screen bg-white z-40 m-0 p-0 overflow-hidden flex items-center transform-gpu will-change-transform">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[80vh] overflow-hidden group"
        >
          <img src="https://picsum.photos/seed/lifestyle1/1000/1250" alt="Lifestyle 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[80vh] overflow-hidden group"
        >
          <img src="https://picsum.photos/seed/lifestyle2/1000/1250" alt="Lifestyle 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <h2 className="text-white text-2xl md:text-3xl font-light tracking-[0.3em] uppercase drop-shadow-lg text-center px-4">MOUSUMIA SPRING SUMMER 2026</h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


const ProductSeparator = () => {
  return (
    <div className="relative h-[200px] w-full bg-cream-luxury flex items-center justify-center z-[45]">
      <span className="text-[14px] tracking-[0.5em] uppercase text-gold-luxury font-editorial">
        CURATED SELECTIONS
      </span>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <section id="featured-section" className="sticky top-0 min-h-screen bg-[#F8F8F8] z-50 m-0 pt-12 transform-gpu will-change-transform">
      <div className="max-w-[1400px] mx-auto px-6 pb-24">
        <h2 className="text-center text-xl font-light tracking-[0.3em] mb-32 uppercase">FEATURED PRODUCTS</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-24 lg:gap-32">
          {/* Image 1 - Offset Up */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="w-full md:w-[38%] aspect-[3/4] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 md:-translate-y-16 group"
          >
             <img 
                src="https://picsum.photos/seed/editorial1/800/1067" 
                alt="Featured 1" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
          </motion.div>

          {/* Editorial Text Block */}
          <div className="w-full md:w-[20%] text-center px-4">
            <p className="font-editorial italic text-sm text-charcoal/80 leading-relaxed">
              “A curated selection of botanical rarities, designed for the modern sanctuary.”
            </p>
          </div>

          {/* Image 2 - Offset Down */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="w-full md:w-[38%] aspect-[3/4] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 md:translate-y-16 group"
          >
             <img 
                src="https://picsum.photos/seed/editorial2/800/1067" 
                alt="Featured 2" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
          </motion.div>
        </div>

        {/* Third Image - Different size and offset */}
        <div className="mt-48 md:mt-64 flex justify-center">
           <motion.div 
            whileHover={{ y: -10 }}
            className="w-full md:w-[60%] aspect-[16/9] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
          >
             <img 
                src="https://picsum.photos/seed/editorial3/1200/675" 
                alt="Featured 3" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { title: 'BOOK AN APPOINTMENT', desc: 'Experience personalized shopping with our experts.', img: 'https://picsum.photos/seed/service1/600/600' },
    { title: 'PERSONALISATION', desc: 'Make it uniquely yours with our bespoke services.', img: 'https://picsum.photos/seed/service2/600/600' },
    { title: 'COLLECT IN STORE', desc: 'Shop online and pick up at your convenience.', img: 'https://picsum.photos/seed/service3/600/600' },
  ];

  return (
    <section className="sticky top-0 min-h-screen bg-white border-t border-gray-100 z-[60] m-0 p-0 transform-gpu will-change-transform">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-3">
        {services.map((service, idx) => (
          <div key={idx} className="relative group cursor-pointer h-screen overflow-hidden">
            <img 
              src={service.img} 
              alt={service.title} 
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 flex flex-col items-center justify-center text-center p-12 text-white card-text-shift">
              <h4 className="text-sm font-semibold tracking-widest mb-4 uppercase">{service.title}</h4>
              <p className="text-xs opacity-80 leading-relaxed max-w-xs">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-forest-luxury text-white pt-20 pb-10 z-[70]">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-lg tracking-[0.2em] mb-6 uppercase">SIGN UP FOR MOUSUMIA UPDATES</h3>
            <p className="text-xs opacity-80 mb-8 leading-relaxed max-w-md">
              Be the first to know about our latest collections, exclusive events, and personalized news.
            </p>
            <div className="flex border-b border-white/30 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none text-xs w-full placeholder:text-white/50"
              />
              <button className="text-xs tracking-widest uppercase font-semibold hover:opacity-70 transition-opacity btn-hover-expand">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h4 className="text-[10px] tracking-[0.2em] font-bold mb-6 uppercase">MAY WE HELP YOU?</h4>
              <ul className="space-y-3 text-[10px] tracking-widest opacity-80">
                <li className="cursor-pointer hover:opacity-100 transition-opacity">Contact Us</li>
                <li className="cursor-pointer hover:opacity-100 transition-opacity">My Order</li>
                <li className="cursor-pointer hover:opacity-100 transition-opacity">FAQs</li>
                <li className="cursor-pointer hover:opacity-100 transition-opacity">Email Unsubscribe</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] tracking-[0.2em] font-bold mb-6 uppercase">THE COMPANY</h4>
              <ul className="space-y-3 text-[10px] tracking-widest opacity-80">
                <li className="cursor-pointer hover:opacity-100 transition-opacity">About Mousumia</li>
                <li className="cursor-pointer hover:opacity-100 transition-opacity">Careers</li>
                <li className="cursor-pointer hover:opacity-100 transition-opacity">Legal</li>
                <li className="cursor-pointer hover:opacity-100 transition-opacity">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] tracking-[0.2em] font-bold mb-6 uppercase">STORE LOCATOR</h4>
              <ul className="space-y-3 text-[10px] tracking-widest opacity-80">
                <li className="cursor-pointer hover:opacity-100 transition-opacity">Find a Store</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] tracking-[0.2em] font-bold mb-6 uppercase">LEGAL</h4>
              <ul className="space-y-3 text-[10px] tracking-widest opacity-80">
                <li className="cursor-pointer hover:opacity-100 transition-opacity">Cookie Policy</li>
                <li className="cursor-pointer hover:opacity-100 transition-opacity">Terms of Use</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/10 gap-8">
          <div className="flex items-center gap-6">
            <Instagram size={18} className="cursor-pointer hover:opacity-70 transition-opacity" />
            <Facebook size={18} className="cursor-pointer hover:opacity-70 transition-opacity" />
            <Twitter size={18} className="cursor-pointer hover:opacity-70 transition-opacity" />
          </div>
          
          <p className="text-[10px] tracking-widest opacity-60">
            © 2026 MOUSUMIA. All rights reserved.
          </p>
          
          <div className="logo-font text-xl tracking-[0.3em] font-bold">
            MOUSUMIA
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BrandStatementSection />
        <CuratedSection />
        <SeasonalSection />
        <ProductSeparator />
        <ProductGrid />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}

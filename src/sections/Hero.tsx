import { useEffect, useRef, useState } from 'react';
import { ChevronDown, MapPin, Calendar, Heart, Leaf, Users } from 'lucide-react';

const slideshowImages = [
  '/images/hero.jpg',
  '/images/img1.jpg',
  '/images/img2.jpg', // Added a placeholder for the third
];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Slideshow Logic with Ken Burns Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 6000); // 6 seconds for a slower, more majestic feel
    return () => clearInterval(interval);
  }, []);

  // Smooth Parallax
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const parallaxBg = heroRef.current.querySelector('.parallax-bg');
        if (parallaxBg) {
          (parallaxBg as HTMLElement).style.transform = `translateY(${scrollY * 0.3}px)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-neutral-900"
    >
      {/* Background Slideshow with Zoom Effect */}
      <div className="absolute inset-0 z-0 parallax-bg">
        {slideshowImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
            }`}
            style={{ transitionProperty: 'opacity, transform', transitionDuration: '2500ms' }}
          >
            <img
              src={img}
              alt="Nature and Conservation"
              className="w-full h-full object-cover brightness-[0.4]"
            />
          </div>
        ))}
        {/* Advanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-green-500/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-yellow-500/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
        
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-10 animate-fade-in-down shadow-2xl">
          <div className="flex -space-x-2">
            <Heart className="w-4 h-4 text-green-400 animate-pulse" />
          </div>
          <span className="text-white/80 text-xs md:text-sm font-semibold tracking-wider uppercase">
            Registered Non-Profit • Est. 2013
          </span>
        </div>

        {/* Title Reveal */}
        <div className="mb-8">
          <h1 className="flex flex-col items-center justify-center space-y-2">
            <span className="overflow-hidden block">
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none animate-reveal-up">
                BLOOM
              </span>
            </span>
            <span className="overflow-hidden block">
              <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-green-300 via-emerald-400 to-yellow-200 bg-clip-text text-transparent animate-reveal-up-delayed py-2">
                CHARITY TRUST
              </span>
            </span>
          </h1>
        </div>

        {/* Enhanced Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up-long">
          Conserving the majestic <span className="text-green-400 font-medium text-white/90">Nilgiris</span> ecosystem while 
          empowering tribal communities through education and awareness.
        </p>

        {/* Stats/Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-lg mx-auto mb-12 animate-fade-in-up-long delay-300">
          <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-default">
            <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Masinagudi</p>
              <p className="text-white/50 text-xs">The Nilgiris District</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-default">
            <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-400">
              <Leaf className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Conservation</p>
              <p className="text-white/50 text-xs">Protecting Heritage</p>
            </div>
          </div>
        </div>

        {/* Premium CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up-long delay-500">
          <a
            href="#contact"
            className="group relative px-10 py-5 bg-green-500 text-white rounded-full font-bold overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-green-500/50"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-2">
              Make an Impact <Heart className="w-4 h-4" />
            </span>
          </a>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-white/5 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all duration-300 hover:border-white/40 flex items-center gap-2"
          >
            Our Mission <Users className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Refined Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Discover</span>
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-white/40 hover:text-green-400 transition-all duration-500 animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>

      <style>{`
        @keyframes revealUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .animate-reveal-up {
          animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-reveal-up-delayed {
          animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-up-long {
          animation: fadeInUpLong 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        @keyframes fadeInUpLong {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .delay-300 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};

export default Hero;
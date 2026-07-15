import React, { useEffect, useRef, useState, useCallback } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight, MapPin, Sparkles, Heart, BookOpen } from 'lucide-react';

const eventImages = Object.values(
  import.meta.glob('/public/images/Event1/*.{jpg,jpeg,png,webp,avif}', {
    eager: true,
    query: '?url',
    import: 'default',
  }) as Record<string, string>
).sort((a, b) => a.localeCompare(b));

export default function Events() {
  const sectionRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImage((prev) => (prev + 1) % eventImages.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImage((prev) => (prev - 1 + eventImages.length) % eventImages.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  // Autoplay functionality
  useEffect(() => {
    if (isHovered) return;
    const timer = window.setInterval(goToNext, 5000);
    return () => window.clearInterval(timer);
  }, [isHovered, goToNext]);

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 lg:py-32 overflow-hidden bg-slate-50"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-green-200/30 blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[60%] rounded-full bg-amber-200/20 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-8">
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-green-200/50 shadow-sm mb-6">
                <div className="p-1 bg-green-100 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-green-600" />
                </div>
                <span className="text-sm font-semibold tracking-wide text-green-800 uppercase">
                  Completed Initiative
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6">
                A heartfelt mission in <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
                  Masinagudi
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                This special project was completed with compassion and care, bringing lasting support and a brighter future to the children and families of our community.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-2.5 rounded-2xl bg-white px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-transform hover:-translate-y-1 duration-300">
                  <CalendarDays className="w-5 h-5 text-green-500" />
                  <span className="font-medium text-slate-700">Successfully Completed</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-2xl bg-white px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-transform hover:-translate-y-1 duration-300">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  <span className="font-medium text-slate-700">Masinagudi Region</span>
                </div>
              </div>

              {/* Stats/Details Card */}
              <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 p-8 shadow-[0_20px_40px_-15px_rgba(22,163,74,0.1)]">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Heart className="w-24 h-24 text-green-600" />
                </div>
                <p className="text-slate-700 leading-relaxed text-lg mb-6 relative z-10">
                  We distributed essential learning materials and revitalized educational spaces, giving children a safe, encouraging environment to grow with confidence and dignity.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                  <div className="group rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50 p-5 border border-green-100 transition-all hover:shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-green-500 rounded-lg text-white group-hover:scale-110 transition-transform">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <p className="font-bold text-slate-900">School Bags</p>
                    </div>
                    <p className="text-sm text-slate-600">Equipping kids for their learning journey.</p>
                  </div>
                  <div className="group rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 p-5 border border-amber-100 transition-all hover:shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-amber-500 rounded-lg text-white group-hover:scale-110 transition-transform">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <p className="font-bold text-slate-900">Learning Rooms</p>
                    </div>
                    <p className="text-sm text-slate-600">Calm, focused spaces for education.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out">
            <div 
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Glowing Background Effect behind carousel */}
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
              
              <div className="relative rounded-[2rem] bg-white p-3 shadow-2xl border border-white/40">
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-slate-100">
                  {eventImages.map((image, index) => {
                    const isActive = index === currentImage;
                    return (
                      <div
                        key={image}
                        className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
                          isActive 
                            ? 'opacity-100 z-10 scale-100' 
                            : 'opacity-0 z-0 scale-110 pointer-events-none'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Masinagudi impact moment ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {/* Elegant Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                      </div>
                    );
                  })}

                  {/* Floating Label */}
                  <div className="absolute top-5 left-5 z-20">
                    <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-full px-4 py-1.5">
                      <span className="text-xs font-bold tracking-widest text-white uppercase shadow-sm">
                        Featured Gallery
                      </span>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 transform transition-transform duration-700 translate-y-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300 mb-2">
                      Community Impact
                    </p>
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">
                      A day of care, connection, and bright smiles.
                    </h3>
                  </div>
                </div>

                {/* Custom Controls Container */}
                <div className="flex items-center justify-between gap-4 px-4 py-5">
                  <button
                    onClick={goToPrevious}
                    className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-green-500 hover:text-white hover:shadow-lg transition-all duration-300 transform active:scale-95"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Animated Pagination Pill */}
                  <div className="flex gap-2">
                    {eventImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className="group py-2 px-1"
                        aria-label={`Go to slide ${index + 1}`}
                      >
                        <div 
                          className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                            index === currentImage 
                              ? 'w-10 bg-green-500' 
                              : 'w-2.5 bg-slate-200 group-hover:bg-green-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={goToNext}
                    className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-green-500 hover:text-white hover:shadow-lg transition-all duration-300 transform active:scale-95"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
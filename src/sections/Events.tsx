import { useEffect, useRef, useState } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight, MapPin, Sparkles } from 'lucide-react';

const eventImages = Object.values(
  import.meta.glob('/public/images/Event1/*.{jpg,jpeg,png,webp,avif}', {
    eager: true,
    query: '?url',
    import: 'default',
  }) as Record<string, string>
).sort((a, b) => a.localeCompare(b));

const Events = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-scale');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % eventImages.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev - 1 + eventImages.length) % eventImages.length);
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % eventImages.length);
  };

  return (
    <section
      id="events"
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-green-50 via-white to-amber-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-green-100 shadow-sm mb-5">
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-700">Completed Initiative</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              A heartfelt mission in <span className="gradient-text">Masinagudi</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-8">
              This special project was completed with compassion and care, bringing lasting support to the children and families of Masinagudi.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-gray-100">
                <CalendarDays className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Completed</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-gray-100">
                <MapPin className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Masinagudi</span>
              </div>
            </div>

            <div className="rounded-2xl border border-green-100 bg-white/80 p-6 shadow-sm">
              <p className="text-gray-700 leading-7">
                We distributed bags and created separate rooms for the kids to learn, giving them a safe, encouraging space to grow with confidence and dignity.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-green-50 p-4">
                  <p className="font-semibold text-gray-900">School bags shared</p>
                  <p className="text-sm text-gray-600 mt-1">Helping children begin their learning journey with pride.</p>
                </div>
                <div className="rounded-xl bg-amber-50 p-4">
                  <p className="font-semibold text-gray-900">Learning rooms created</p>
                  <p className="text-sm text-gray-600 mt-1">Providing a calm and focused space for education.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-scale">
            <div className="rounded-[28px] border border-green-100 bg-white p-3 shadow-[0_20px_80px_-20px_rgba(22,163,74,0.35)]">
              <div className="relative overflow-hidden rounded-[22px]">
                {eventImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Event highlight ${index + 1}`}
                    className={`absolute inset-0 h-[360px] sm:h-[430px] w-full object-cover transition-all duration-700 ease-in-out ${
                      index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-green-700">
                  Featured Event
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-green-100">Community Visit</p>
                    <h3 className="text-xl font-semibold text-white">A day of care and connection</h3>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 px-2 py-4">
                <button
                  onClick={goToPrevious}
                  className="rounded-full border border-gray-200 p-2 text-gray-700 transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2">
                  {eventImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === currentImage ? 'w-8 bg-green-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Show image ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  className="rounded-full border border-gray-200 p-2 text-gray-700 transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

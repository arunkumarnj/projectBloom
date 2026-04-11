import { useEffect, useRef } from 'react';
import { TreePine, Wind, Droplets, Mountain, Sprout, Recycle, Sun, Shield } from 'lucide-react';

const Environment = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const pollutionTypes = [
    {
      icon: Wind,
      title: 'Air Pollution',
      description: 'Contamination of air by toxic substances affecting respiratory health.',
      color: 'from-gray-400 to-gray-600',
    },
    {
      icon: Droplets,
      title: 'Water Pollution',
      description: 'Contamination of water bodies harming aquatic life and human health.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Mountain,
      title: 'Land Pollution',
      description: 'Soil degradation due to waste disposal and chemical contamination.',
      color: 'from-amber-600 to-amber-800',
    },
  ];

  const initiatives = [
    {
      icon: Sprout,
      title: 'Tree Plantation',
      description: 'Organizing tree plantation drives to increase green cover.',
    },
    {
      icon: Recycle,
      title: 'Waste Management',
      description: 'Promoting proper waste disposal and recycling practices.',
    },
    {
      icon: Sun,
      title: 'Renewable Energy',
      description: 'Encouraging use of solar and other renewable energy sources.',
    },
    {
      icon: Shield,
      title: 'Biodiversity Protection',
      description: 'Protecting local flora and fauna in the Nilgiris region.',
    },
  ];

  return (
    <section id="environment" ref={sectionRef} className="section-padding bg-gradient-to-b from-green-900 to-green-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-green-400 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-yellow-400 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-emerald-400 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Leaf pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c-5 10-15 15-15 25 0 8 7 15 15 15s15-7 15-15c0-10-10-15-15-25z' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal-scale inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <TreePine className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm font-medium">Save Nature Project</span>
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Conservation of <span className="text-green-400">Nature</span>
          </h2>
          <p className="reveal stagger-1 text-lg text-green-100 max-w-2xl mx-auto">
            Protecting our environment for future generations through awareness, 
            education, and direct action in the Nilgiris region.
          </p>
        </div>

        {/* Conserve Nature Banner */}
        <div className="reveal mb-16">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/images/img8.jpg"
              alt="Nature Conservation"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/70" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-12 max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Conserve Nature, Protect Future
                </h3>
                <p className="text-green-100 mb-6">
                  Our surrounding environment is becoming contaminated day by day. 
                  The air we breathe, the water we drink, and the place where we live 
                  are contaminated with toxic substances. Together, we can make a difference.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                    Air Quality
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                    Water Protection
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                    Forest Conservation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pollution Types Grid */}
        <div className="mb-16">
          <h3 className="reveal text-2xl font-bold text-white text-center mb-8">
            Environmental Challenges We Address
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pollutionTypes.map((type, index) => (
              <div
                key={type.title}
                className={`reveal-scale stagger-${index + 1} bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300`}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-5`}>
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{type.title}</h4>
                <p className="text-green-100 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Forest Info */}
          <div className="reveal-left">
            <h3 className="text-2xl font-bold text-white mb-6">
              Importance of Indian Forests
            </h3>
            <p className="text-green-100 mb-6 leading-relaxed">
              The Indian sub-continent presents the most varied physiographic and climatic 
              patterns anywhere in the world in an area of similar size. This ecological 
              diversity has resulted in aggregation of one of the richest floral species 
              in the world.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <TreePine className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">15,000+</p>
                  <p className="text-green-200 text-sm">Known Plant Species</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">6,700</p>
                  <p className="text-green-200 text-sm">Endemic Species in India</p>
                </div>
              </div>
            </div>
            <p className="text-green-100 text-sm">
              It has been estimated that more than 15,000 known total species are found 
              in 328 families of plants in India.
            </p>
          </div>

          {/* Right - Initiatives */}
          <div className="reveal-right">
            <h3 className="text-2xl font-bold text-white mb-6">
              Our Environmental Initiatives
            </h3>
            <div className="space-y-4">
              {initiatives.map((initiative, index) => (
                <div
                  key={initiative.title}
                  className={`reveal-right stagger-${index + 1} flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-colors duration-300`}
                >
                  <div className="w-10 h-10 bg-green-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <initiative.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{initiative.title}</h4>
                    <p className="text-green-200 text-sm">{initiative.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="reveal mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-bold text-white mb-1">Join Our Green Mission</h4>
              <p className="text-green-200 text-sm">Be part of the solution for a sustainable future</p>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-colors duration-300"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Environment;

import { useEffect, useRef } from 'react';
import { Target, BookOpen, Heart, TreePine, Users, Lightbulb, GraduationCap, Leaf } from 'lucide-react';

const Objectives = () => {
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

  const mainObjectives = [
    {
      icon: GraduationCap,
      title: 'Education Support',
      description: 'Providing free books, stationery, and educational materials to underprivileged tribal children.',
      color: 'bg-blue-500',
    },
    {
      icon: Heart,
      title: 'Social Welfare',
      description: 'Improving the living conditions and social status of tribal communities through various welfare programs.',
      color: 'bg-red-500',
    },
    {
      icon: TreePine,
      title: 'Nature Conservation',
      description: 'Protecting and preserving the natural environment through tree plantation and awareness programs.',
      color: 'bg-green-500',
    },
    {
      icon: Users,
      title: 'Community Development',
      description: 'Empowering communities through skill development and sustainable livelihood programs.',
      color: 'bg-purple-500',
    },
  ];

  const incidentalObjectives = [
    'To organize awareness programs on environmental protection',
    'To conduct health camps and medical support programs',
    'To provide vocational training for youth empowerment',
    'To promote sustainable agricultural practices',
    'To preserve tribal culture and heritage',
    'To create self-help groups for women empowerment',
  ];

  return (
    <section id="objectives" ref={sectionRef} className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal-scale inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-4">
            <Target className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm font-medium">Our Mission</span>
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trust <span className="gradient-text">Objectives</span>
          </h2>
          <p className="reveal stagger-1 text-lg text-gray-600 max-w-2xl mx-auto">
            Our objectives are focused on creating a positive impact in tribal communities 
            through education, social welfare, and environmental conservation.
          </p>
        </div>

        {/* Main Objectives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {mainObjectives.map((objective, index) => (
            <div
              key={objective.title}
              className={`reveal-scale stagger-${index + 1} group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 ${objective.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 ${objective.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <objective.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {objective.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {objective.description}
              </p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${objective.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <div className="reveal-left relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/img1.jpg"
                alt="Charity Work"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Education First</p>
                    <p className="text-white/80 text-sm">Supporting tribal children</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Incidental Objectives */}
          <div className="reveal-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Incidental Objects</h3>
                <p className="text-gray-500 text-sm">Ancillary to the main objectives</p>
              </div>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Other objects incidental or ancillary to the main objects include various 
              programs and initiatives that support our core mission of social welfare 
              and nature conservation.
            </p>

            <div className="space-y-4">
              {incidentalObjectives.map((objective, index) => (
                <div
                  key={index}
                  className={`reveal-right stagger-${index + 1} flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300`}
                >
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Leaf className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-700">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;

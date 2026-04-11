import { useEffect, useRef } from 'react';
import { Building2, Users, TreePine, BookOpen, Award, Globe, Heart, Calendar } from 'lucide-react';

const About = () => {
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

  const stats = [
    { icon: Calendar, value: '2013', label: 'Established' },
    { icon: Users, value: '1000+', label: 'Lives Impacted' },
    { icon: BookOpen, value: '500+', label: 'Students Supported' },
    { icon: TreePine, value: '50+', label: 'Tree Plantation Drives' },
  ];

  const features = [
    {
      icon: Building2,
      title: 'Registered Organization',
      description: 'Registered on July 2nd, 2013 under Tamil Nadu Society Registration Act.',
    },
    {
      icon: Globe,
      title: 'All India Jurisdiction',
      description: 'The jurisdiction of the trust extends throughout India.',
    },
    {
      icon: Award,
      title: 'Legal Status',
      description: 'Bloom Charity - Social welfare and conservation of nature.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal-scale inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-4">
            <Building2 className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm font-medium">About Us</span>
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Organization's <span className="gradient-text">Background</span>
          </h2>
          <p className="reveal stagger-1 text-lg text-gray-600 max-w-2xl mx-auto">
            Bloom Charity Trust is dedicated to social welfare and nature conservation 
            in the Nilgiris region of Tamil Nadu, India.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <div className="reveal-left relative">
            <div className="relative">
              <img
                src="/images/logo.jpg"
                alt="Bloom Charity Team"
                className="rounded-2xl shadow-2xl w-full"
              />
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">10+ Years</p>
                    <p className="text-sm text-gray-500">Of Service</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200 rounded-full opacity-50 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-200 rounded-full opacity-50 -z-10" />
          </div>

          {/* Content Side */}
          <div className="reveal-right">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Making a Difference in <span className="text-green-600">Tribal Communities</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The Registered office of the trust is located at 7/249 A, Kurmbarpadi, 
              Masinagudi (PO), Nilgiri District, Tamil Nadu, India. Since our establishment 
              in 2013, we have been working tirelessly to improve the lives of tribal 
              communities in the region.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our work focuses on two primary areas: social welfare through education 
              support for children, and conservation of nature through environmental 
              awareness programs and tree plantation drives.
            </p>

            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`reveal-right stagger-${index + 1} flex items-start gap-4 p-4 rounded-xl hover:bg-green-50 transition-colors duration-300`}
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`reveal-scale stagger-${index + 1} text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl hover-lift`}
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

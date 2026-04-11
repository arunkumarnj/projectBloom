import { useEffect, useRef, useState } from 'react';
import { Images, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-scale');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Gallery images
  const galleryImages = [
    { src: '/images/img1.jpg', title: 'Providing Educational Materials' },
    { src: '/images/img2.jpg', title: 'Community Support Program' },
    { src: '/images/img3.jpg', title: 'Tribal Children Education' },
    { src: '/images/img4.jpg', title: 'Stationery Distribution' },
    { src: '/images/img5.jpg', title: 'Books for Children' },
    { src: '/images/img6.jpg', title: 'Community Gathering' },
    { src: '/images/img7.jpg', title: 'Educational Support' },
    { src: '/images/img8.jpg', title: 'Tribal Welfare Program' },
    { src: '/images/img9.jpg', title: 'Children with Books' },
    { src: '/images/img11.jpg', title: 'Stationery Distribution Event' },
    { src: '/images/img12.jpg', title: 'Community Outreach' },
    { src: '/images/img13.jpg', title: 'Education Initiative' },
    { src: '/images/img14.jpg', title: 'Supporting Tribal Youth' },
    { src: '/images/img15.jpg', title: 'Learning Materials' },
    { src: '/images/img16.jpg', title: 'Charity Distribution' },
    { src: '/images/img17.jpg', title: 'Community Support' },
    { src: '/images/img18.jpg', title: 'Educational Aid' },
    { src: '/images/img19.jpg', title: 'Tribal Development' },
  ];

  const openLightbox = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex].src);
  };

  const goToNext = () => {
    const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex].src);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <section id="gallery" ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-green-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal-scale inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-4">
            <Images className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm font-medium">Our Gallery</span>
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Moments of <span className="gradient-text">Impact</span>
          </h2>
          <p className="reveal stagger-1 text-lg text-gray-600 max-w-2xl mx-auto">
            Capturing the smiles and moments that define our journey of making a difference 
            in tribal communities.
          </p>
        </div>

        {/* Featured Image */}
        <div className="reveal mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" onClick={() => openLightbox('/images/logo.jpg', -1)}>
            <img
              src="/images/logo.jpg"
              alt="Bloom Charity Team"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/80 text-sm mb-2">Featured</p>
              <h3 className="text-white text-2xl font-bold">The Life of Tribal Communities</h3>
              <p className="text-white/80 mt-2">Working together for a brighter future</p>
            </div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Images className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`reveal-scale stagger-${(index % 6) + 1} group relative rounded-xl overflow-hidden shadow-lg cursor-pointer aspect-square`}
              onClick={() => openLightbox(image.src, index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[80vh] px-16">
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            {currentIndex >= 0 && (
              <p className="text-white text-center mt-4 text-lg">
                {galleryImages[currentIndex]?.title}
              </p>
            )}
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {currentIndex >= 0 ? `${currentIndex + 1} / ${galleryImages.length}` : 'Featured Image'}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

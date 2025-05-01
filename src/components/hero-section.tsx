
import React, { useState, useEffect } from 'react';
import CustomButton from './custom-button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading of resources
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-presence-800/40 z-10"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147503015/images/46503c6-0f2-8b-e688-03817786e8fe_797f4363-1381-4005-b709-4798e580d8b6.jpg"
        >
          <source
            src="https://embed-ssl.wistia.com/deliveries/a9f27597561468232cd3f0a053c0f1f37370606f/op9ge2ha84.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10 pt-16 md:pt-0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div 
            className={`text-white transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Path of Awakening
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              Join Leonard Jacobson on a transformative journey into presence. 
              Discover practical guidance for spiritual awakening in everyday life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CustomButton 
                size="xl" 
                className="rounded-full font-semibold"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </CustomButton>
            </div>
          </div>
          <div 
            className={`hidden md:block transition-all duration-700 delay-300 ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-60'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
              <img 
                src="/lovable-uploads/8c19c80d-9f1f-4a4e-b0bb-432830a485e2.png" 
                alt="Leonard Jacobson" 
                className="w-full rounded-lg object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

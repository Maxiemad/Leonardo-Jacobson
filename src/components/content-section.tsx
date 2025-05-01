
import React from 'react';
import AnimatedSection from './animated-section';
import CustomButton from './custom-button';
import { ArrowRight } from 'lucide-react';

interface ContentSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  reversed?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  imageSrc,
  alt,
  reversed = false,
}) => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
          <AnimatedSection animation={reversed ? 'right' : 'left'} className="mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-presence-400 to-nature-400 opacity-30 blur rounded-xl"></div>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={imageSrc}
                  alt={alt}
                  className="w-full h-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation={reversed ? 'left' : 'right'}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-presence-800">{title}</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{description}</p>
            <CustomButton 
              size="lg"
              className="rounded-full"
            >
              Enroll Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </CustomButton>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;

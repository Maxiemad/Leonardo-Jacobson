import React from 'react';
import AnimatedSection from './animated-section';
import CustomButton from './custom-button';
import { ArrowRight, Book, Calendar, Gift, Youtube } from 'lucide-react';

interface OfferingCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: '100' | '200' | '300' | '400';
}

const OfferingCard: React.FC<OfferingCardProps> = ({ title, description, icon, delay }) => {
  return (
    <AnimatedSection delay={delay} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-presence-100 text-presence-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-presence-800 mb-3">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
      </div>
      <CustomButton 
        variant="ghost" 
        className="flex items-center group text-white"
      >
        Explore More
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </CustomButton>
    </AnimatedSection>
  );
};

const Offerings = () => {
  const offerings = [
    {
      title: "Books",
      description: "Discover Leonard's collection of books on spiritual awakening and presence.",
      icon: <Book className="h-6 w-6" />,
      delay: "100" as const
    },
    {
      title: "Events",
      description: "Join Leonard for live events, retreats, and workshops around the world.",
      icon: <Calendar className="h-6 w-6" />,
      delay: "200" as const
    },
    {
      title: "Video Library",
      description: "Access Leonard's extensive library of teachings and guidance videos.",
      icon: <Youtube className="h-6 w-6" />,
      delay: "300" as const
    },
    {
      title: "Special Offerings",
      description: "Explore special programs and packages designed for your spiritual journey.",
      icon: <Gift className="h-6 w-6" />,
      delay: "400" as const
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-presence-800">Offerings</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Resources to support your journey of awakening and presence.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {offerings.map((offering, index) => (
            <OfferingCard 
              key={index} 
              title={offering.title} 
              description={offering.description} 
              icon={offering.icon} 
              delay={offering.delay} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;

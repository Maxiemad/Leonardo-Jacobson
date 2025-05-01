
import React from 'react';
import AnimatedSection from './animated-section';
import { Star } from 'lucide-react';
import CustomButton from './custom-button';

interface TestimonialCardProps {
  name: string;
  location: string;
  content: string;
  delay: '100' | '200' | '300' | '400';
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, location, content, delay }) => {
  return (
    <AnimatedSection delay={delay} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="flex-1">
          <div className="flex items-center mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <h3 className="font-medium text-presence-800">{name}</h3>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">{content}</p>
    </AnimatedSection>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "K",
      location: "Denmark",
      content: "Leonard is truly a Master Healer all through Presence. Watching him directly, honestly yet tenderly address the \"wounded child\" in us all was absolutely surgical in its approach. Attending his retreat brought greater depth and experience for my journey into and residing in Presence.",
      delay: "100" as const
    },
    {
      name: "HM",
      location: "Santa Cruz",
      content: "We're just back from yet another amazing retreat at Mt. Madonna with Leonard, a true teacher. The love, the breakthroughs, the laughs, the cries, the openness, the trust, the ah-hah's, all facilitated by Leonard's deep Presence and his masterful way of finding what will bring each of us into This Moment. Thank you Leonard!",
      delay: "200" as const
    },
    {
      name: "Kathy",
      location: "Cincinnati",
      content: "Leonard, there really are no words to express my gratitude for your wisdom! You speak the truth in a way that takes me to a very deep space.",
      delay: "300" as const
    },
    {
      name: "Yuki",
      location: "Tokyo, Japan",
      content: "Dear Leonard and Mary, I love watching your webcast in front of my computer. Thank you so much for your profound teaching and your simple and warm presence. I feel content, full and peaceful.",
      delay: "400" as const
    }
  ];

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-presence-800">What People Are Saying</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hear from those who have experienced the transformative power of Leonard's teachings.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              name={testimonial.name} 
              location={testimonial.location} 
              content={testimonial.content} 
              delay={testimonial.delay} 
            />
          ))}
        </div>
        
        <div className="flex justify-center">
          <CustomButton size="xl" className="rounded-full">
            Enroll Now
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

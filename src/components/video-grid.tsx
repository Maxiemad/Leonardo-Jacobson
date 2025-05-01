
import React from 'react';
import AnimatedSection from './animated-section';
import CustomButton from './custom-button';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  price: string;
  delay: '100' | '200' | '300' | '400' | '500';
}

const VideoCard: React.FC<VideoCardProps> = ({ thumbnail, title, price, delay }) => {
  return (
    <AnimatedSection delay={delay} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative overflow-hidden group">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-presence-700 ml-1">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm py-1 px-3 rounded-full text-presence-700 font-medium text-sm">
          {price}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-medium text-lg mb-3 text-presence-800">{title}</h3>
        <CustomButton variant="default" className="w-full">Purchase</CustomButton>
      </div>
    </AnimatedSection>
  );
};

const VideoGrid = () => {
  const videos = [
    {
      thumbnail:"https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2150603101/settings_images/NXdy7RmQTwuSkJCQvaIv_file.jpg",
      title: "The Journey of Awakening",
      price: "$10",
      delay: "100" as const
    },
    {
      thumbnail: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2150603101/settings_images/NXdy7RmQTwuSkJCQvaIv_file.jpg",
      title: "Present Moment Awareness",
      price: "$10",
      delay: "200" as const
    },
    {
      thumbnail: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2150603101/settings_images/NXdy7RmQTwuSkJCQvaIv_file.jpg",
      title: "Awakening to Presence",
      price: "$10",
      delay: "300" as const
    },
    {
      thumbnail:"https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2150603101/settings_images/NXdy7RmQTwuSkJCQvaIv_file.jpg",
      title: "Living from Presence",
      price: "$10",
      delay: "100" as const
    },
    {
      thumbnail: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2150603101/settings_images/NXdy7RmQTwuSkJCQvaIv_file.jpg",
      title: "Deepening into Now",
      price: "$10",
      delay: "200" as const
    },
    {
      thumbnail:"https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2150603101/settings_images/NXdy7RmQTwuSkJCQvaIv_file.jpg",
      title: "The Simplicity of Presence",
      price: "$10",
      delay: "300" as const
    },
    {
      thumbnail: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2150603101/settings_images/NXdy7RmQTwuSkJCQvaIv_file.jpg",
      title: "Beyond the Mind",
      price: "$10",
      delay: "100" as const
    },
    {
      thumbnail:"https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2150603101/settings_images/NXdy7RmQTwuSkJCQvaIv_file.jpg",
      title: "The Two Steps to Freedom",
      price: "$10",
      delay: "200" as const
    },
    {
      thumbnail: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2150603101/settings_images/NXdy7RmQTwuSkJCQvaIv_file.jpg",
      title: "Transformational Retreat",
      price: "$10",
      delay: "300" as const
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-presence-800">Teaching Videos</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore Leonard's video teachings and programs designed to guide you on your journey of awakening.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <VideoCard 
              key={index} 
              thumbnail={video.thumbnail} 
              title={video.title} 
              price={video.price} 
              delay={video.delay} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;

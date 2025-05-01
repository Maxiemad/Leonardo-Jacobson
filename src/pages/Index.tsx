
import React, { useEffect } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ContentSection from '@/components/content-section';
import VideoGrid from '@/components/video-grid';
import Testimonials from '@/components/testimonials';
import Offerings from '@/components/offerings';
import FAQSection from '@/components/faq-section';
import Newsletter from '@/components/newsletter';
import Footer from '@/components/footer';

const Index = () => {
  // Initialize IntersectionObserver for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      
      <ContentSection
        title="Global Teacher of Presence"
        description="Leonard Jacobson is an awakened spiritual teacher, mystic and author who is deeply committed to helping others awaken to the present moment. His teachings and presence transmit a profound wisdom that is simple, direct and liberating."
        imageSrc="/lovable-uploads/d37af543-f414-43cd-a7e5-bac5a098a503.png"
        alt="Leonard Jacobson teaching"
      />
      
      <ContentSection
        title="Fear of Nothingness"
        description="Leonard offers clear guidance on the path to awakening. His approach is practical and grounded in the direct experience of presence, allowing you to discover the peace, fulfillment and joy that emerge naturally when you are fully present."
        imageSrc="/lovable-uploads/7487b9c9-c0d6-49af-8ea5-44bb42d76c1f.png"
        alt="Ocean waves representing presence"
        reversed={true}
      />
      
      <ContentSection
        title="Transformative Retreats"
        description="Experience the depth and power of Leonard's teachings through his in-person retreats. These gatherings provide a unique opportunity to deepen your practice of presence in a supportive community of like-minded individuals."
        imageSrc="/lovable-uploads/d37af543-f414-43cd-a7e5-bac5a098a503.png"
        alt="Peaceful retreat setting"
      />
      
      <ContentSection
        title="Awakening to the Present Moment"
        description="Through Leonard's teachings, you will learn to quiet the mind and open your heart, allowing you to experience the profound simplicity and beauty of this moment. This is the essence of spiritual awakening."
        imageSrc="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2150603101/settings_images/b1c182-d8d6-570d-0b3-c811dfba07_Screen_Shot_2024-11-02_at_10.59.07_AM.png"
        alt="Present moment meditation"
        reversed={true}
      />
      
      <VideoGrid />
      
      <Testimonials />
      
      <Offerings />
      
      <FAQSection />
      
      <Newsletter />
      
      <Footer />
    </div>
  );
};

export default Index;

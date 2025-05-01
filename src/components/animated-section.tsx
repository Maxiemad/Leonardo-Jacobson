
import React, { useEffect, useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'left' | 'right';
  delay?: 'none' | '100' | '200' | '300' | '400' | '500';
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade', 
  delay = 'none' 
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case 'left':
        return 'reveal-left';
      case 'right':
        return 'reveal-right';
      case 'fade':
      default:
        return 'reveal';
    }
  };

  const getDelayClass = () => {
    if (delay === 'none') return '';
    return `delay-${delay}`;
  };

  return (
    <div 
      ref={sectionRef} 
      className={`${getAnimationClass()} ${getDelayClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

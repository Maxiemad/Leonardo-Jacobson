
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import CustomButton from './custom-button';
import AnimatedSection from './animated-section';
import { Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email",
        description: "Email is required to subscribe to our newsletter.",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally submit to your backend
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive \"The Simplicity of Presence\" video shortly.",
    });

    // Reset form
    setEmail('');
    setName('');
    setCity('');
    setState('');
    setCountry('');
  };

  return (
    <section className="py-20 bg-presence-700 text-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection animation="left">
              <div className="text-white space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Sign Up for Our Newsletter and Receive the Video</h2>
                <h3 className="text-2xl md:text-3xl font-bold text-nature-200">"The Simplicity of Presence,"</h3>
                <p className="text-xl">as Our Gift to You.</p>
                <div className="mt-6">
                  <img 
                    src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2150603101/settings_images/CRobBOFkR3yZoaKCuX1T_About_Leonard_Jacobson.png" 
                    alt="Leonard Jacobson"
                    className="rounded-lg shadow-lg max-w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="right" className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-2">City</label>
                  <Input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Your city"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium mb-2">State</label>
                  <Input
                    id="state"
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Your state"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium mb-2">Country</label>
                  <select
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full rounded-md border bg-white/5 border-white/20 text-white placeholder:text-white/50 px-3 py-2"
                  >
                    <option value="" disabled>Select your country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="JP">Japan</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="DK">Denmark</option>
                    {/* Add more countries as needed */}
                  </select>
                </div>
                <CustomButton 
                  type="submit" 
                  size="lg" 
                  className="w-full mt-6 bg-presence-800 text-white hover:bg-presence-900"
                >
                  Submit
                </CustomButton>
              </form>
              <p className="text-xs text-center mt-4 text-white/70">
                We won't send spam or share your information. Unsubscribe at any time.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

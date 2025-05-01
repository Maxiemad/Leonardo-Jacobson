import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-10">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/c743e49b-b243-442c-9dc9-a51904a225c9.png" 
              alt="Leonard Jacobson" 
              className="h-11 mb-4"
            />
            <p className="text-gray-600 mb-6 max-w-md">
              Leonard Jacobson is an awakened spiritual teacher, mystic and author who is deeply committed to helping others awaken to the fully present moment.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/leonard.jacobson.teachings" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-presence-100 text-presence-600 hover:bg-presence-200 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/leonardjacobsonteachings/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-presence-100 text-presence-600 hover:bg-presence-200 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/c/LeonardJacobsonTeachingsOnAwakening" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-presence-100 text-presence-600 hover:bg-presence-200 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-presence-800">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-presence-600">Home</a></li>
              <li><a href="https://www.leonardjacobson.com/teachings/Q-and-A" className="text-gray-600 hover:text-presence-600">Q&A</a></li>
              <li><a href="https://www.amazon.com/Leonard-Jacobson/e/B00OW24G16" className="text-gray-600 hover:text-presence-600">Books</a></li>
              <li><a href="https://www.leonardjacobson.com/events" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-presence-600">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-presence-800">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">Email: info@leonardjacobson.com</li>
              <li><a href="https://www.leonardjacobson.com/contactleonard" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-presence-600">Contact Form</a></li>
              <li><a href="https://www.leonardjacobson.com/askleonard" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-presence-600">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Leonard Jacobson. All Rights Reserved. Website designed by GoTo Retreat.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-presence-600 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-presence-600 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-presence-600 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

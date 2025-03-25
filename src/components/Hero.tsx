
import React from 'react';
import { Play, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-wellness-100 blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-accent blur-3xl opacity-40"></div>
      </div>

      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 space-y-8 mb-12 lg:mb-0 text-center lg:text-left">
            <div className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-wellness-50 border border-wellness-200 text-wellness-700 text-sm font-medium">
                Your Journey to Wellness
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              Transform Your Life <br className="hidden md:block" />
              <span className="text-wellness-600">One Habit at a Time</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              Personalized fitness, nutrition, and meditation plans tailored to your goals. Join our community for a holistic approach to health and well-being.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start animate-fade-in opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              <a 
                href="#dashboard" 
                className="wellness-gradient text-white font-medium rounded-full px-8 py-3.5 shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto text-center"
              >
                Start Your Journey
              </a>
              
              <a 
                href="#" 
                className="flex items-center justify-center space-x-2 text-wellness-700 hover:text-wellness-800 w-full sm:w-auto"
              >
                <div className="flex items-center justify-center bg-wellness-50 p-2 rounded-full">
                  <Play className="h-4 w-4" />
                </div>
                <span className="font-medium">Watch How It Works</span>
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-fade-in opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl transform transition-all hover:scale-[1.02] duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Wellness journey" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 glass-card rounded-lg shadow-lg p-4 z-20 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Daily Goal Completed</p>
                    <p className="text-green-600 text-xs font-semibold">+120 Points</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-6 glass-card rounded-lg shadow-lg p-4 z-20 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-3">
                  <div className="bg-wellness-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-wellness-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Workout Streak</p>
                    <p className="text-wellness-600 text-xs font-semibold">7 Days 🔥</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="flex justify-center mt-12 lg:mt-16 animate-bounce">
          <a href="#dashboard" className="text-gray-400 hover:text-wellness-600 transition-colors">
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

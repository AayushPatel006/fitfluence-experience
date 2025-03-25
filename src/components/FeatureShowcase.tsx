
import React from 'react';
import { Calendar, Users, Award, BarChart3 } from 'lucide-react';

const FeatureShowcase = () => {
  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-wellness-600" />,
      title: "Personalized Wellness Plans",
      description: "AI-driven recommendations for workouts, diet, and mindfulness practices tailored just for you.",
      delay: "0.1s"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-wellness-600" />,
      title: "Health Tracking & Insights",
      description: "Monitor your progress with detailed analytics and receive actionable feedback to improve.",
      delay: "0.3s"
    },
    {
      icon: <Users className="h-6 w-6 text-wellness-600" />,
      title: "Live & On-Demand Sessions",
      description: "Join virtual classes for yoga, fitness training, and guided meditation with expert instructors.",
      delay: "0.5s"
    },
    {
      icon: <Award className="h-6 w-6 text-wellness-600" />,
      title: "Gamified Learning",
      description: "Earn rewards, complete challenges, and build streaks to make your wellness journey fun and engaging.",
      delay: "0.7s"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
            The Complete Wellness Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Everything you need to transform your life through fitness, nutrition, and mindfulness in one seamless platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in opacity-0" 
              style={{ animationDelay: feature.delay, animationFillMode: 'forwards' }}
            >
              <div className="bg-wellness-50 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Sessions Preview */}
        <div className="mt-16 md:mt-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 animate-slide-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Discover Live & On-Demand Sessions</h3>
              <p className="text-gray-600 mb-6">
                Access hundreds of expert-led sessions for yoga, fitness, meditation, and nutrition guidance. Join live classes or practice on your own schedule.
              </p>
              <ul className="space-y-3 mb-6">
                {['Personalized recommendations', 'HD video quality', 'Expert instructors', 'Progress tracking'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-wellness-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#" 
                className="wellness-gradient text-white font-medium rounded-full px-6 py-3 inline-flex items-center shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                Browse All Sessions
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            <div className="w-full md:w-1/2 animate-slide-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Session Card 1 */}
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                      alt="Yoga session" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-wellness-500 text-white text-xs font-medium px-2 py-1 rounded">
                      LIVE
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">Morning Yoga Flow</h4>
                    <p className="text-gray-500 text-sm mb-3">Emma • 30 min • Beginner</p>
                    <div className="flex justify-between items-center">
                      <span className="text-wellness-600 font-medium text-sm">10:00 AM Today</span>
                      <button className="bg-wellness-50 text-wellness-600 p-2 rounded-full hover:bg-wellness-100">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Session Card 2 */}
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                      alt="Meditation session" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-purple-500 text-white text-xs font-medium px-2 py-1 rounded">
                      ON-DEMAND
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">Stress Relief Meditation</h4>
                    <p className="text-gray-500 text-sm mb-3">Michael • 15 min • All Levels</p>
                    <div className="flex justify-between items-center">
                      <span className="text-wellness-600 font-medium text-sm">Watch Anytime</span>
                      <button className="bg-wellness-50 text-wellness-600 p-2 rounded-full hover:bg-wellness-100">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Session Card 3 */}
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                      alt="HIIT session" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-wellness-500 text-white text-xs font-medium px-2 py-1 rounded">
                      TOMORROW
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">HIIT Cardio Blast</h4>
                    <p className="text-gray-500 text-sm mb-3">James • 45 min • Intermediate</p>
                    <div className="flex justify-between items-center">
                      <span className="text-wellness-600 font-medium text-sm">5:00 PM Tomorrow</span>
                      <button className="bg-wellness-50 text-wellness-600 p-2 rounded-full hover:bg-wellness-100">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Session Card 4 */}
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                      alt="Nutrition session" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-purple-500 text-white text-xs font-medium px-2 py-1 rounded">
                      ON-DEMAND
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">Healthy Meal Prep Basics</h4>
                    <p className="text-gray-500 text-sm mb-3">Sophia • 60 min • All Levels</p>
                    <div className="flex justify-between items-center">
                      <span className="text-wellness-600 font-medium text-sm">Watch Anytime</span>
                      <button className="bg-wellness-50 text-wellness-600 p-2 rounded-full hover:bg-wellness-100">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;

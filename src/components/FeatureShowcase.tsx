
import React, { useState } from 'react';
import { Calendar, Users, Award, BarChart3 } from 'lucide-react';

const FeatureShowcase = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false); // State to track video visibility
  const [videoUrl, setVideoUrl] = useState(''); // State to track the video URL

  const handlePlayVideo = (url: string) => {
    setVideoUrl(url); // Set the video URL
    setIsVideoOpen(true); // Show the video
  };

  const features = [
    {
      image: "https://cdn.pixabay.com/photo/2016/11/18/15/05/beach-1835213_640.jpg", // Replace with your image URL
      title: "Morning Yoga",
      description: "Start your day with a refreshing yoga session to boost your energy and focus.",
      delay: "0.1s"
    },
    {
      image: "https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg", // Replace with your image URL
      title: "Gym & Fitness",
      description: "Join our gym and fitness classes to achieve your health goals with expert guidance.",
      delay: "0.3s"
    },
    {
      image: "https://www.crossfit.com/wp-content/uploads/2023/11/13131232/crossfit-coach-led-fitness-training-adapted-for-you-handstand-hold.jpg", // Replace with your image URL
      title: "Calisthenics",
      description: "Join our calisthenics classes to build strength and flexibility using your body weight.",
      delay: "0.5s"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVmdOm-wtKMSmbj6dB6m950hKl7DmA_N3_w&s", // Replace with your image URL
      title: "Cross Fit",
      description: "Challenge yourself with our CrossFit sessions designed to push your limits.",
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
              <div className=" h-25 mb-4">
                <img src={feature.image} alt={feature.title} className="rounded-lg object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              {/* Button to start the type of workout */} 
              <div className="flex justify-start mt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center bg-blue-500 text-white font-medium rounded-full px-4 py-2 shadow-md hover:bg-black transition-all"
                >
                  <span>Start</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <hr className="my-8 border-t border-gray-200" />  
        
          {/* Nurtitions Preview */}
        <div id="feature-nutrition" className="mt-16 md:mt-24">
          <div className="flex flex-col md:flex-row items-center">
            
            <div className="w-full md:w-1/2 animate-slide-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Session Card 1 */}
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src="https://t3.ftcdn.net/jpg/02/93/22/02/360_F_293220207_aSKIua6mTAymZDbIJOSOApeJ7vNoD6Zd.jpg" 
                      alt="Yoga session" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-wellness-500 text-white text-xs font-medium px-2 py-1 rounded">
                      LIVE
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">Fresh Green salads</h4>
                    <p className="text-gray-500 text-sm mb-3">George • 30 min</p>
                    <div className="flex justify-between items-center">
                      <span className="text-wellness-600 font-medium text-sm">7:00 PM Today</span>
                      <button
                        onClick={() => handlePlayVideo("https://www.youtube.com/embed/U_-7UWZGD4o")} // Play video on button click
                        className="bg-wellness-50 text-wellness-600 p-2 rounded-full hover:bg-wellness-100"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Session Card 2 */}
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src="https://static.toiimg.com/photo/92829677.cms" 
                      alt="Meditation session" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-purple-500 text-white text-xs font-medium px-2 py-1 rounded">
                      ON-DEMAND
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">Healthy Junk Food</h4>
                    <p className="text-gray-500 text-sm mb-3">Michael • 45 min</p>
                    <div className="flex justify-between items-center">
                      <span className="text-wellness-600 font-medium text-sm">Watch Anytime</span>
                      <button
                        onClick={() => handlePlayVideo("https://www.youtube.com/embed/U_-7UWZGD4o")} // Play video on button click
                        className="bg-wellness-50 text-wellness-600 p-2 rounded-full hover:bg-wellness-100"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Session Card 3 */}
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src="https://previews.123rf.com/images/xamnesiacx/xamnesiacx1506/xamnesiacx150600039/41510424-%E6%9C%A8%E6%9D%90%E3%81%AE%E8%83%8C%E6%99%AF%E3%81%AB%E3%82%B0%E3%83%AB%E3%83%86%E3%83%B3-%E3%83%95%E3%83%AA%E3%83%BC%E3%81%AE%E3%83%91%E3%83%B3.jpg" 
                      alt="HIIT session" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-wellness-500 text-white text-xs font-medium px-2 py-1 rounded">
                      TOMORROW
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">Gluten Free Meals</h4>
                    <p className="text-gray-500 text-sm mb-3">James • 45 min</p>
                    <div className="flex justify-between items-center">
                      <span className="text-wellness-600 font-medium text-sm">6:00 PM Tomorrow</span>
                      <button
                        onClick={() => handlePlayVideo("https://www.youtube.com/embed/U_-7UWZGD4o")} // Play video on button click
                        className="bg-wellness-50 text-wellness-600 p-2 rounded-full hover:bg-wellness-100"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Session Card 4 */}
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="relative">
                    <img
                      src="https://familyapp.com/wp-content/uploads/2021/07/untitled_design_-_2021-02-15t132803983.jpg" 
                      alt="Nutrition session" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-purple-500 text-white text-xs font-medium px-2 py-1 rounded">
                      ON-DEMAND
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">Beat your sugar cravings</h4>
                    <p className="text-gray-500 text-sm mb-3">Sophia • 10 min</p>
                    <div className="flex justify-between items-center">
                      <span className="text-wellness-600 font-medium text-sm">Watch Anytime</span>
                      <button
                        onClick={() => handlePlayVideo("https://www.youtube.com/embed/U_-7UWZGD4o")} // Play video on button click
                        className="bg-wellness-50 text-wellness-600 p-2 rounded-full hover:bg-wellness-100"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-left m-20 w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 animate-slide-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Eat Healthy, Stay Fit</h3>
              <p className="text-gray-600 mb-6">
                Access hundreds of expert-led live kitchen classes for healthy and nutritious life. Join live classes or practice on your own schedule.
              </p>
              <ul className="space-y-3 mb-6 text-left">
                {['Personalized recipies', 'Ingingredients List', 'Healthy Nutritious Meal', 'Progress tracking'].map((item, i) => (
                  <li key={i} className="flex items-left">
                    <span>{item}</span>
                    <svg className="w-5 h-5 text-wellness-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </li>
                ))}
              </ul>
              {/* {/* <a 
                href="#" 
                className="wellness-gradient text-white font-medium rounded-full px-6 py-3 inline-flex items-center shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                Browse All Sessions
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a> */} 
            </div>
          </div>
        </div>

        <hr className="my-8 border-t border-gray-200" />  

        {/* Interactive Sessions Preview */}
        <div id="feature-refreshing-session" className="mt-16 md:mt-24">
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
              {/* {/* <a 
                href="#" 
                className="wellness-gradient text-white font-medium rounded-full px-6 py-3 inline-flex items-center shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                Browse All Sessions
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a> */}
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
                      <button
                        onClick={() => handlePlayVideo("https://www.youtube.com/embed/bSnNQaAr5l8")} // Play video on button click
                        className="bg-wellness-50 text-wellness-600 p-2 rounded-full hover:bg-wellness-100"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
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
                      <button
                        onClick={() => handlePlayVideo("https://www.youtube.com/embed/bSnNQaAr5l8")} // Play video on button click
                        className="bg-wellness-50 text-wellness-600 p-2 rounded-full hover:bg-wellness-100"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
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
                      <button
                        onClick={() => handlePlayVideo("https://www.youtube.com/embed/bSnNQaAr5l8")} // Play video on button click
                        className="bg-wellness-50 text-wellness-600 p-2 rounded-full hover:bg-wellness-100"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
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
                      <button
                        onClick={() => handlePlayVideo("https://www.youtube.com/embed/bSnNQaAr5l8")} // Play video on button click
                        className="bg-wellness-50 text-wellness-600 p-2 rounded-full hover:bg-wellness-100"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
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
      {/* Video Modal */}
      {isVideoOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-full max-w-3xl">
              <button
                onClick={() => setIsVideoOpen(false)} // Close the video
                className="absolute top-2 right-2 text-white text-2xl"
              >
                &times;
              </button>
              <iframe
                className="w-full h-64 md:h-96 rounded-lg"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
    </section>
  );
};

export default FeatureShowcase;

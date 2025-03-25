
import React from 'react';
import { Trophy, Users, MessageSquare } from 'lucide-react';

const Community = () => {
  // Fake leaderboard data
  const leaderboardData = [
    { rank: 1, name: 'Alex J.', points: 2840, avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { rank: 2, name: 'Sarah M.', points: 2720, avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { rank: 3, name: 'David L.', points: 2615, avatar: 'https://randomuser.me/api/portraits/men/86.jpg' },
    { rank: 4, name: 'Emily R.', points: 2590, avatar: 'https://randomuser.me/api/portraits/women/17.jpg' },
    { rank: 5, name: 'Michael T.', points: 2480, avatar: 'https://randomuser.me/api/portraits/men/55.jpg' },
  ];

  // Fake community posts
  const communityPosts = [
    {
      id: 1,
      user: 'Jessica K.',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      time: '2 hours ago',
      content: 'Just completed my first 5K run! Thanks to everyone in the running group for the motivation 🏃‍♀️',
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      user: 'Robert N.',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      time: '5 hours ago',
      content: 'Anyone trying the new plant-based meal plan? Looking for recipe ideas and tips!',
      likes: 17,
      comments: 12,
    },
  ];

  return (
    <section id="community" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
            Join Our Wellness Community
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Connect with like-minded individuals, share your journey, celebrate achievements, and motivate each other.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Leaderboard */}
          <div className="glass-card rounded-xl overflow-hidden border border-gray-100 shadow-lg animate-slide-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="text-xl font-semibold">Weekly Leaderboard</h3>
                </div>
                <div className="bg-wellness-50 text-wellness-600 text-sm font-medium px-3 py-1 rounded-full">
                  This Week
                </div>
              </div>

              <div className="space-y-4">
                {leaderboardData.map((user) => (
                  <div 
                    key={user.rank} 
                    className={`flex items-center p-3 rounded-lg ${user.rank <= 3 ? 'bg-gradient-to-r from-wellness-50 to-transparent' : ''}`}
                  >
                    <div className="w-8 text-center font-semibold text-gray-500">
                      {user.rank}
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden ml-2">
                      <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="font-medium">{user.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{user.points}</p>
                      <p className="text-xs text-gray-500">points</p>
                    </div>
                    {user.rank <= 3 && (
                      <div className="ml-3">
                        {user.rank === 1 && <span className="text-xl">🥇</span>}
                        {user.rank === 2 && <span className="text-xl">🥈</span>}
                        {user.rank === 3 && <span className="text-xl">🥉</span>}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <a 
                  href="#" 
                  className="text-wellness-600 font-medium hover:text-wellness-700 inline-flex items-center"
                >
                  View Full Leaderboard
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Community Feed */}
          <div className="flex flex-col animate-slide-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="glass-card rounded-xl overflow-hidden border border-gray-100 shadow-lg mb-6 flex-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-wellness-600 mr-2" />
                    <h3 className="text-xl font-semibold">Community Feed</h3>
                  </div>
                  <button className="text-wellness-600 hover:text-wellness-700">
                    <MessageSquare className="h-5 w-5" />
                  </button>
                </div>

                {/* Posts */}
                <div className="space-y-6">
                  {communityPosts.map((post) => (
                    <div key={post.id} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img 
                            src={post.avatar} 
                            alt={post.user} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{post.user}</p>
                            <p className="text-xs text-gray-500">{post.time}</p>
                          </div>
                          <p className="text-gray-700 mt-2">{post.content}</p>
                          <div className="flex mt-3 text-sm">
                            <button className="flex items-center text-gray-500 hover:text-wellness-600 mr-4">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                              {post.likes}
                            </button>
                            <button className="flex items-center text-gray-500 hover:text-wellness-600">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                              {post.comments}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card rounded-xl overflow-hidden border border-gray-100 shadow-lg p-6">
                <div className="flex items-center">
                  <div className="bg-wellness-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-wellness-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-500 text-sm">Active Members</p>
                    <p className="text-2xl font-semibold">12.8k</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-xl overflow-hidden border border-gray-100 shadow-lg p-6">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-500 text-sm">Daily Posts</p>
                    <p className="text-2xl font-semibold">458</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="wellness-gradient text-white font-medium rounded-full px-8 py-3.5 shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center"
          >
            Join Our Community Today
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;

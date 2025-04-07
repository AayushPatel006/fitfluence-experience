import React, { useState } from 'react';
import { Activity, Calendar, Heart, Timer, TrendingUp, Zap } from 'lucide-react';

const Dashboard = () => {
  const [isDeviceConnected, setIsDeviceConnected] = useState(false);
  const [deviceData, setDeviceData] = useState<{ name: string; steps: number; heartRate: number; calories: number; mindfulMinutes: number } | null>(null);
  const [userData, setUserData] = useState({
    name: 'Aayush',
    streakDays: 7,
    completedWorkouts: 24,
    caloriesBurned: 1240,
    mindfulMinutes: 45,
    progress: 68,
    nextSession: '10:00 AM',
    todayDate: new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
  });

  const connectWearableDevice = () => {
    alert('Connecting to your wearable device...');
    setTimeout(() => {
      const newDeviceData = {
        name: 'FitBand Pro X',
        steps: 10234,
        heartRate: 72,
        calories: 300,
        mindfulMinutes: 15,
      };
      setIsDeviceConnected(true);
      setDeviceData(newDeviceData);

      // Simulate updating user data with a transition
      setTimeout(() => {
        setUserData((prevData) => ({
          ...prevData,
          caloriesBurned: prevData.caloriesBurned + newDeviceData.calories,
          mindfulMinutes: prevData.mindfulMinutes + newDeviceData.mindfulMinutes,
          progress: Math.min(prevData.progress + 5, 100), // Increment progress by 5% (capped at 100%)
        }));
      }, 1000);

      alert('Device connected successfully!');
    }, 2000);
  };

  return (
    <section id="dashboard" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
            Your Personal Wellness Dashboard
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Track your progress, see your achievements, and stay motivated with your personalized wellness journey.
          </p>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden border border-gray-100 shadow-lg animate-scale-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <p className="text-gray-500 text-sm">{userData.todayDate}</p>
                <h3 className="text-2xl font-semibold mt-1">
                  Welcome back, {userData.name}!
                </h3>
              </div>
              <div className="mt-4 md:mt-0 flex items-center bg-wellness-50 rounded-full px-4 py-2 text-wellness-700">
                <Zap className="h-4 w-4 mr-2" />
                <span className="font-medium">{userData.streakDays} Day Streak 🔥</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Stat Card 1 */}
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Completed Workouts</p>
                    <p className="text-2xl font-semibold mt-1">{userData.completedWorkouts}</p>
                  </div>
                  <div className="bg-wellness-100 p-2 rounded-lg">
                    <Activity className="h-5 w-5 text-wellness-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-green-600 text-sm">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>12% increase</span>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Calories Burned</p>
                    <p className="text-2xl font-semibold mt-1 transition-all duration-500">
                      {userData.caloriesBurned}
                    </p>
                  </div>
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-orange-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-green-600 text-sm">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>8% increase</span>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Mindful Minutes</p>
                    <p className="text-2xl font-semibold mt-1 transition-all duration-500">
                      {userData.mindfulMinutes}
                    </p>
                  </div>
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Heart className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-green-600 text-sm">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>15% increase</span>
                </div>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Next Session</p>
                    <p className="text-2xl font-semibold mt-1">{userData.nextSession}</p>
                  </div>
                  <div className="bg-wellness-100 p-2 rounded-lg">
                    <Calendar className="h-5 w-5 text-wellness-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-gray-500 text-sm">
                  <Timer className="h-4 w-4 mr-1" />
                  <span>Yoga with Emma</span>
                </div>
              </div>
            </div>

            {/* Progress Section */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h4 className="text-lg font-medium mb-4">Weekly Progress</h4>
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                {/* Progress bar */}
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-500">Wellness Score</span>
                    <span className="text-sm font-medium">{userData.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-wellness-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${userData.progress}%` }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-7 mt-2">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                      <div key={index} className="text-xs text-center text-gray-500">
                        {day}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="md:w-1/3 bg-wellness-50 rounded-lg p-4">
                  <h5 className="font-medium text-wellness-800 mb-2">Today's Recommendation</h5>
                  <p className="text-sm text-gray-600 mb-3">
                    Based on your progress, we recommend focusing on mindfulness today.
                  </p>
                  <a 
                    href="#" 
                    className="text-sm text-wellness-600 font-medium hover:text-wellness-700 inline-flex items-center"
                  >
                    View suggestion
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Connect Wearable Device Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Connect Your Wearable Device</h2>
              {!isDeviceConnected ? (
                <button
                  onClick={connectWearableDevice}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
                >
                  Connect Device
                </button>
              ) : (
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h4 className="text-lg font-medium mb-4">Device Details</h4>
                  <p className="text-gray-600 mb-2">
                    <strong>Device Name:</strong> {deviceData?.name}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Steps Today:</strong> {deviceData?.steps}
                  </p>
                  <p className="text-gray-600">
                    <strong>Current Heart Rate:</strong> {deviceData?.heartRate} bpm
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

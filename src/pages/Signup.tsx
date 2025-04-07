import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate(); // Add navigation hook
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    targetWeight: '', // New field for target weight
    fitnessGoal: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup Data:', formData);
    // Add your signup logic here (e.g., API call)
    try {
        const response = await fetch('http://127.0.0.1:8000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            age: parseInt(formData.age),
            gender: formData.gender,
            height: parseFloat(formData.height),
            weight: parseFloat(formData.weight),
            target_weight: parseFloat(formData.targetWeight), // Match FastAPI field name
            fitness_goal: formData.fitnessGoal, // Match FastAPI field name
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Signup successful:', data);
          alert('Signup successful!');
        // Optionally redirect to login or home page
        localStorage.setItem('isLoggedIn', 'true'); // Set login state in localStorage
        window.location.href = '/'; // Redirect to home page
        } else {
          const errorData = await response.json();
          console.error('Signup failed:', errorData);
          alert('Signup failed: ' + errorData.detail);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <button
          onClick={() => navigate('/')} // Navigate to home on click
          className="mb-4 text-wellness-600 hover:text-wellness-700 font-medium"
        >
          &larr; Back to Home
        </button>
        <h2 className="text-2xl font-bold text-center text-wellness-600 mb-6">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-wellness-500 focus:border-wellness-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-wellness-500 focus:border-wellness-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-wellness-500 focus:border-wellness-500"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-wellness-500 focus:border-wellness-500"
              placeholder="Your Age"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-wellness-500 focus:border-wellness-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">
              Height (in cm)
            </label>
            <input
              type="number"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-wellness-500 focus:border-wellness-500"
              placeholder="Your Height"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
              Weight (in kg)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-wellness-500 focus:border-wellness-500"
              placeholder="Your Weight"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fitnessGoal" className="block text-sm font-medium text-gray-700">
              Fitness Goal
            </label>
            <select
              id="fitnessGoal"
              name="fitnessGoal"
              value={formData.fitnessGoal}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-wellness-500 focus:border-wellness-500"
              required
            >
                
              <option value="">Select Your Goal</option>
              <option value="weight_loss">Weight Loss</option>
              <option value="muscle_gain">Muscle Gain</option>
              <option value="maintain_fitness">Maintain Fitness</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="targetWeight" className="block text-sm font-medium text-gray-700">
              Target Weight (in kg)
            </label>
            <input
              type="number"
              id="targetWeight"
              name="targetWeight"
              value={formData.targetWeight}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-wellness-500 focus:border-wellness-500"
              placeholder="Your Target Weight"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-wellness-500 hover:bg-wellness-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-wellness-600 hover:text-wellness-700 font-medium">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
import React from 'react'

 const Home=()=> {
  return (
    <div className="mt-35 flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
          src="/naruto.jpg"
          alt="home page welcoming image"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600">UserManager</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            This is your dashboard. You can manage users, update profiles, and customize your app settings here.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home
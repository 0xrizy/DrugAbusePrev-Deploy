import React from "react";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <main className="bg flex flex-col items-center justify-center min-h-screen p-8 bg-opacity-20">
      <div className="mb-12 text-center">
        <h3 className="mb-6 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl hover:drop-shadow-2xl">
          Drug Abuse Reporting and Prevention
        </h3>
        <p className="text-lg text-gray-600">
          Empowering communities through awareness and action
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-8 rounded-lg shadow-lg bg-white">
          <h2 className="text-gray-800 text-2xl font-semibold mb-4">
            Recognizing Drug Abuse
          </h2>
          <p className="text-gray-700">
            Learn about the signs and symptoms of drug abuse. Understanding the
            early indicators can help in prevention and intervention.
          </p>
        </div>
        <div className="p-8 rounded-lg shadow-lg bg-white">
          <h2 className="text-gray-800 text-2xl font-semibold mb-4">
            Prevention Strategies
          </h2>
          <p className="text-gray-700">
            Discover effective prevention strategies, educational programs, and
            community initiatives that can help prevent drug abuse among
            individuals and communities.
          </p>
        </div>
        <div className="p-8 rounded-lg shadow-lg bg-white">
          <h2 className="text-gray-800 text-2xl font-semibold mb-4">
            Report Us (Anonymously)!
          </h2>
          <p className="text-gray-700">
            Reporting drug abuse is a powerful stand against the destruction of
            lives and dreams. Be the voice that speaks out, the hand that
            reaches out, and the heart that cares.
          </p>
        </div>
        <div className="p-8 rounded-lg shadow-lg bg-white">
          <h2 className="text-gray-800 text-2xl font-semibold mb-4">
            Share your stories/Ask for help Anonymously
          </h2>
          <p className="text-gray-700">
            Breaking Chains, a safe space where you can share your stories and
            seek support anonymously. If you're struggling with drug abuse or
            addiction, you can ask for help without revealing your identity.
            Share your journey, inspire others.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12 space-y-6">
        <Link to="/reportform">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 text-xl transition duration-300">
            Report Anonymously
          </button>
        </Link>
        <Link to="/helpdesk">
          <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 text-xl transition duration-300">
            Share your story/Ask for help
          </button>
        </Link>
        <Link to="/help">
          <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 text-xl transition duration-300">
            Need Counseling? Click here
          </button>
        </Link>
        <a href="https://jfsqz8ngjex2lcpfmpbjce.streamlit.app/" target="_blank" rel="noopener noreferrer">
          <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 text-xl transition duration-300">
            Tweet Classification
          </button>
        </a>
      </div>
    </main>
  );
};

export default MainSection;

import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UserDashboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const [weekday, setWeekday] = useState("");

  useEffect(() => {
    setToken(Cookies.get("token"));
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date().getDay();
    setWeekday(days[today]);
  }, []);

  useEffect(() => {
    if (token) {
      fetchUserName(token); // Call fetchUserName when token changes
    }
  }, [token]); // Add token as a dependency to rerun the effect when token changes

  const fetchUserName = async (token) => {
    try {
      const response = await axios.get(
        "https://drugabuseprev-deploy.onrender.com/api/getUserName",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setUserName(response.data.name);
      } else {
        console.error("Failed to fetch user name");
      }
    } catch (error) {
      console.error("Error fetching user name:", error);
    }
  };

  return (
    <>
      {token ? (
        <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-teal-50 to-teal-200">
          <div className="flex flex-col justify-center items-center p-8 w-full md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-gray-700">
              Hello,{" "}
              <span
                className={`text-${
                  userName.length > 10 ? "4xl md:text-5xl" : "4xl md:text-6xl"
                } text-teal-500`}
              >
                {userName}
              </span>
            </h1>
            <h2 className="text-3xl md:text-5xl text-center mb-8 text-gray-700">
              Happy{" "}
              <span className="text-4xl md:text-6xl text-indigo-400">
                {weekday}
              </span>
            </h2>
            <Link
              to="/bookSession"
              className="text-center bg-gradient-to-r from-teal-500 to-teal-300 hover:from-teal-400 hover:to-teal-300 text-white font-bold py-2 px-4 rounded-full w-1/4 max-w-md"
            >
              Book a session with us
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center space-y-8 p-8 w-full md:w-1/2">
            <Link
              to="/anxietytestdashboard"
              className="w-full max-w-md h-24 md:h-56 bg-gradient-to-t from-teal-500 to-teal-300 rounded-md shadow-md cursor-pointer transform transition duration-300 hover:scale-105 flex items-center justify-center text-white text-lg md:text-xl font-semibold"
            >
              Anxiety Test
            </Link>
            <Link
              to="/userQuiz"
              className="w-full max-w-md h-24 md:h-56 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-md shadow-md cursor-pointer transform transition duration-300 hover:scale-105 flex items-center justify-center text-white text-lg md:text-xl font-semibold"
            >
              Daily Wellness Quiz
            </Link>
            <Link
              to="/userReports"
              className="w-full max-w-md h-24 md:h-56 bg-gradient-to-t from-teal-500 to-teal-300 rounded-md shadow-md cursor-pointer transform transition duration-300 hover:scale-105 flex items-center justify-center text-white text-lg md:text-xl font-semibold"
            >
              Get Reports
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-teal-50 to-teal-200">
          <h1 className="text-3xl md:text-5xl mb-8 font-semibold text-gray-700">
            Welcome to Your Dashboard
          </h1>
          <p className="text-lg md:text-xl mb-12 text-gray-700">
            Please login to access this page
          </p>
          <Link
            to="/userlogin"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg md:text-xl shadow-md transition duration-300"
          >
            Login
          </Link>
        </div>
      )}
    </>
  );
}

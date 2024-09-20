"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function PasswordProtectScreen() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!password) {
      setError("Please enter a password.");
      return;
    }

    if (password === process.env.NEXT_PUBLIC_PASSWORD_PROTECT) {
      // Set the password in a cookie
      Cookies.set("session", password);

      // Optionally, redirect or perform another action here
      router.push("/"); // Redirect to the home page or any other page
    } else {
      setError("Password is not correct!");
      return;
    }
  };

  return (
    <div className="absolute w-full h-full bg-black flex items-center justify-center z-999">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full mx-4 transform transition-all hover:scale-105"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800 dark:text-white">
          Login
        </h2>
        {error && (
          <p className="text-red-500 mb-4 text-center bg-red-100 dark:bg-red-900 p-3 rounded-lg">
            {error}
          </p>
        )}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600  bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition duration-200 ease-in-out"
              placeholder="Enter your password"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}

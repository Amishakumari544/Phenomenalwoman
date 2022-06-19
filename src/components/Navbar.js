import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../auth/Login";
import LogoutButton from "../auth/Logout";
import Profile from "../auth/Profile";

import { useAuth0 } from "@auth0/auth0-react";
function Navbar() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <nav class="bg-gray-50 text-2xl border-gray-200 px-2 sm:px-4 py-2.5  backdrop-blur-lg">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://github.com/Amishakumari544" class="flex items-center">
            {/* <img src="/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"> */}
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              Phenomenal Women
            </span>
          </a>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul class="flex text-lg text-black flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <Link to="/org">Organizations</Link>
              <Link to="/platforms">Coding platforms</Link>
              <Link to="/jobs">Internships</Link>
              <Link to="/dev">Articles</Link>
              {isAuthenticated === true ? <Profile /> : <LoginButton />}
              {isAuthenticated === true ? <LogoutButton /> : ""}
              {/* <li><a class="github-button"
              href="https://github.com/amishakumari544/github-buttons"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star amishakumari544/github-buttons on GitHub">Star</a></li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

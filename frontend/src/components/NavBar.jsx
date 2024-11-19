import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faHouse,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-gray-700 sm:top-0 sm:left-0 sm:h-screen sm:w-20 z-10">
      <ul className="flex flex-row justify-around sm:flex-col sm:mt-16">
        <NavLink
          to="/"
          className="cursor-pointer hover:bg-gray-800 text-center p-4 transition-colors text-white"
        >
          <span className="flex flex-col items-center">
            <FontAwesomeIcon icon={faHouse} className="text-2xl" />
          </span>
          {"Home"}
        </NavLink>
        <NavLink
          to="/search"
          className="cursor-pointer hover:bg-gray-800 text-center p-4 transition-colors text-white"
        >
          <span className="flex flex-col items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl" />
          </span>
          {"Search"}
        </NavLink>
        <NavLink
          to="/books"
          className="cursor-pointer hover:bg-gray-800 text-center p-4 transition-colors text-white"
        >
          <span className="flex flex-col items-center">
            <FontAwesomeIcon icon={faBookOpen} className="text-2xl" />
          </span>
          {"Books"}
        </NavLink>
        <NavLink
          to="/profile"
          className="cursor-pointer hover:bg-gray-800 text-center p-4 transition-colors text-white"
        >
          <span className="flex flex-col items-center">
            <FontAwesomeIcon icon={faUser} className="text-2xl" />
          </span>
          {"Profile"}
        </NavLink>
      </ul>
    </nav>
  );
};

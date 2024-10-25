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
    <nav className="fixed left-0 top-0 h-screen w-20 bg-gray-600">
      <ul className="flex flex-col mt-16">
        <NavLink
          to="/"
          className="cursor-pointer hover:bg-gray-800 text-center p-4 transition-colors"
        >
          <span className="flex flex-col ">
            <FontAwesomeIcon icon={faHouse} className="text-2xl" />
          </span>
          {"Home"}
        </NavLink>
        <NavLink
          to="/search"
          className="cursor-pointer hover:bg-gray-800 text-center p-4 transition-colors"
        >
          <span className="flex flex-col ">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl" />
          </span>
          {" Search"}
        </NavLink>
        <NavLink
          to="/library"
          className="cursor-pointer hover:bg-gray-800 text-center p-4 transition-colors"
        >
          <span className="flex flex-col ">
            <FontAwesomeIcon icon={faBookOpen} className="text-2xl" />
          </span>
          {"Library"}
        </NavLink>
        <NavLink
          to="/profile"
          className="cursor-pointer hover:bg-gray-800 text-center p-4 transition-colors"
        >
          <span className="flex flex-col ">
            <FontAwesomeIcon icon={faUser} className="text-2xl" />
          </span>
          {"Profile"}
        </NavLink>
      </ul>
    </nav>
  );
};

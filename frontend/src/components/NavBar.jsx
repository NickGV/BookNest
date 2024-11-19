import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faHouse,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { LogoutButton } from "./LogoutButton";

export const NavBar = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav className="fixed bottom-0 w-full bg-gray-700 sm:top-0 sm:left-0 sm:h-screen sm:w-20 z-10">
      <ul className="flex flex-row justify-between sm:flex-col h-full sm:pt-16">
        <div className="flex flex-row sm:flex-col">
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
            to="/protected"
            className="cursor-pointer hover:bg-gray-800 text-center p-4 transition-colors text-white"
          >
            <span className="flex flex-col items-center">
              <FontAwesomeIcon icon={faBookOpen} className="text-2xl" />
            </span>
            {"Books"}
          </NavLink>
        </div>

        <div className="flex flex-row justify-around sm:flex-col ">
          {isAuthenticated ? (
            <>
              <LogoutButton />
              <NavLink
                to="/profile"
                className="cursor-pointer hover:bg-gray-800 text-center p-4 transition-colors text-white"
              >
                <span className="flex flex-col items-center">
                  <FontAwesomeIcon icon={faUser} className="text-2xl" />
                </span>
                {"Profile"}
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/login"
              className="cursor-pointer hover:bg-gray-800 text-center p-4 transition-colors text-white"
            >
              <span className="flex flex-col items-center">
                <FontAwesomeIcon icon={faUser} className="text-2xl" />
              </span>
              {"Login"}
            </NavLink>
          )}
        </div>
      </ul>
    </nav>
  );
};

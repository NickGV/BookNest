import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faHouse,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
  return (
    <nav className="fixed left-0 top-0 h-screen w-20 bg-gray-600">
      <ul className="flex flex-col mt-16">
        <li className="cursor-pointer hover:bg-gray-800 text-center p-4 transition-colors">
          <span className="flex flex-col ">
            <FontAwesomeIcon icon={faHouse} className="text-2xl" />
          </span>
          {"Home"}
        </li>
        <li className="cursor-pointer hover:bg-gray-800 text-center p-4 transition-colors">
          <span className="flex flex-col ">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl" />
          </span>
          {" Search"}
        </li>
        <li className="cursor-pointer hover:bg-gray-800 text-center p-4 transition-colors">
          <span className="flex flex-col ">
            <FontAwesomeIcon icon={faBookOpen} className="text-2xl" />
          </span>
          {"Library"}
        </li>
        <li className="cursor-pointer hover:bg-gray-800 text-center p-4 transition-colors">
          <span className="flex flex-col ">
            <FontAwesomeIcon icon={faUser} className="text-2xl" />
          </span>
          {"Profile"}
        </li>
      </ul>
    </nav>
  );
};

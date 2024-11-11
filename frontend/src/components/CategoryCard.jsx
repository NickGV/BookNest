import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CategoryCard = ({ icon, name }) => {
  return (
    <li className="flex flex-col text-lg items-center justify-center w-32 h-24 sm:w-44 sm:h-28 bg-gray-600 rounded hover:scale-105 transition-transform cursor-pointer shadow-sm shadow-slate-400">
      <FontAwesomeIcon icon={icon} className="text-2xl sm:text-3xl" />
      <span className="text-sm sm:text-lg">{name}</span>
    </li>
  );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CategoryCard = ({ icon, name }) => {
  return (
    <li className="flex flex-col text-lg items-center justify-center w-44 h-28 bg-gray-600 rounded hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-slate-200">
      <FontAwesomeIcon icon={icon} />
      <span>{name}</span>
    </li>
  );
};

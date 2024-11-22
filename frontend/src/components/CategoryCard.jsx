import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CategoryCard = ({ icon, name }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gray-700 transition-all duration-300">
      <FontAwesomeIcon icon={icon} className="text-2xl mb-2" />
      <span className="text-lg font-bold">{name}</span>
    </div>
  );
};

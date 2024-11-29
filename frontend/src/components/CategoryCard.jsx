import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export const CategoryCard = ({ icon, name }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/search", { state: { category: name } });
  };
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-gray-700 transition-all duration-300" onClick={handleClick}>
      <FontAwesomeIcon icon={icon} className="text-2xl mb-2" />
      <span className="text-lg font-bold">{name}</span>
    </div>
  );
};

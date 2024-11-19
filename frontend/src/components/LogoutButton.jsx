import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const LogoutButton = () => {
  const { logout } = useContext(AuthContext);

  return (
    <button onClick={logout} className="bg-red-500 text-white p-2 rounded">
      Logout
    </button>
  );
};

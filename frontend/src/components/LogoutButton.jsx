import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "sonner";

export const LogoutButton = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    toast.success("Logout successful");
    logout();
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white p-2 rounded"
    >
      Logout
    </button>
  );
};

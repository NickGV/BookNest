import { NavBar } from "./NavBar";

export const Layout = ({ children }) => {
  return (
    <div className="flex">
      <NavBar />
      <main className="flex-1 ml-20 p-4 h-screen">{children}</main>
    </div>
  );
};

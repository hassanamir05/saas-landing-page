import { Navbar } from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Links = [
  {
    name: "Why Project",
    destination: "why-project",
  },
  {
    name: "Solutions",
    destination: "solution",
  },
  {
    name: "Pricing",
    destination: "pricing",
  },
  {
    name: "Resources",
    destination: "resources",
  },
];

const AppLayout = () => {
  return (
    <div className="w-full  flex flex-col justify-center items-center gap-y-[40px]">
      <Navbar links={Links} />
      <Outlet />
    </div>
  );
};

export { AppLayout };

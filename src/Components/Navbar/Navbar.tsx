import { NavLink } from "react-router-dom";
import Logo from "../../assets/Images/logo.png";
import { Button } from "../Button";

interface LinksProps {
  name: string;
  destination: string;
}

interface NavbarProps {
  links: LinksProps[];
}

const Navbar = ({ links }: NavbarProps) => {
  return (
    <nav className="flex flex-row justify-between w-full max-w-[1136px] items-center p-5  ">
      {/* Logo */}
      <div>
        <img src={Logo} alt="logo" className="w-full max-w-[100px]" />
      </div>

      {/* Links */}
      <div className="hidden tablet:flex laptop:flex desktop:flex wide-desktop:flex flex-row justify-evenly w-full max-w-[500px]">
        {links.map((link, index) => (
          <NavLink
            to={link.destination}
            key={index}
            className={({ isActive }) =>
              `text-[16px]
         font-poppins leading-[20px] min-w-[70px] mx-2
         hover:cursor-pointer
         ${isActive ? "text-primary" : "text-dark"}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Buttons */}
      <div className="w-auto flex ">
        {/* <Button
          name="Login"
          customClass=" bg-transparent text-dark p-0 border border-grey-800 tablet:hidden"
          onClick={() => {
            alert("you have clicked login button");
          }}
        /> */}

        <Button
          name="Try now for free"
          customClass=""
          onClick={() => {
            alert("you have clicked the button");
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;

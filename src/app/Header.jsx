import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="h-[10vh] flex justify-between items-center px-8 shadow-lg">
      <img src="/vite.svg" alt="vite" />
      <nav className="flex gap-7">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/sign-in"}>Sign in</NavLink>{" "}
      </nav>
    </header>
  );
};

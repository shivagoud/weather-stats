import { Link, Outlet, useLocation } from "@tanstack/react-router";
import classes from "./Header.module.scss";
import { HEADER_LINKS } from "../lib/constants";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <div className={classes.root}>
        {Object.entries(HEADER_LINKS).map(([path, name]) => (
          <Link key={path} to={path}>
            {name}
          </Link>
        ))}
      </div>
      <hr />
      <h3>{HEADER_LINKS[location.pathname]}</h3>
      <Outlet />
    </>
  );
};

export default Header;

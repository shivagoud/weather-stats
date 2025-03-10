import { Link, Outlet, useLocation } from "@tanstack/react-router";
import classes from "./Header.module.scss";

const links: Record<string, string> = {
  "/": "Dashboard",
  "/history": "History",
  "/upload": "Upload",
};

const Header = () => {
  const location = useLocation();

  return (
    <>
      <div className={classes.root}>
        {Object.entries(links).map(([path, name]) => (
          <Link key={path} to={path}>
            {name}
          </Link>
        ))}
      </div>
      <hr />
      <h3>{links[location.pathname]}</h3>
      <Outlet />
    </>
  );
};

export default Header;

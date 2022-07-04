import Link from "next/link";

const AppBar = () => {
    
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-main-900"
          >
            <li>
              <Link href={"/"}>
                <a className="active:bg-main-500">Home</a>
              </Link>
            </li>
            <li>
              <Link href={"/recipes"}>
                <a className="active:bg-main-500">Recipes</a>
              </Link>
            </li>
            <li>
              <Link href={"/recipes/category"}>
                <a className="active:bg-main-500">Categories</a>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <a className="active:bg-main-500">About</a>
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-main-900">WokAWish</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-main-900">
          <li>
            <Link href={"/"}>
              <a className="active:bg-main-500">Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/recipes"}>
              <a className="active:bg-main-500">Recipes</a>
            </Link>
          </li>
          <li>
            <Link href={"/recipes/category"}>
              <a className="active:bg-main-500">Categories</a>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <a className="active:bg-main-500">About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppBar;

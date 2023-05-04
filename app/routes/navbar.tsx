import { Link } from "@remix-run/react";

export default function NavBar() {
    return (
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={'/'} className="self-center text-2xl font-semibold whitespace-nowrap">Ana Edwards</Link>
         
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link to={'/about'} className="font-semibold block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:text-blue-700 ">About</Link>
              </li>
              <li>
                <Link to={'/portfolio'} className="font-semibold block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:text-blue-700 ">Portfolio</Link>
              </li>    
              <li>
                <Link to={'/contact'} className="font-semibold block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:text-blue-700 ">Contact</Link>
              </li>         
            </ul>
          </div>
        </div>
      </nav>    
    );
};
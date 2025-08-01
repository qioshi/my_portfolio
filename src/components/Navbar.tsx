import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Portfolio</span>
        </Link>
        <div className="flex md:order-2">
          <button 
            type="button" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Contact
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 border-gray-700">
            <li>
              <Link href="#about" className="block py-2 pl-3 pr-4 text-white hover:text-blue-500 rounded">About</Link>
            </li>
            <li>
              <Link href="#projects" className="block py-2 pl-3 pr-4 text-white hover:text-blue-500 rounded">Projects</Link>
            </li>
            <li>
              <Link href="#skills" className="block py-2 pl-3 pr-4 text-white hover:text-blue-500 rounded">Skills</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

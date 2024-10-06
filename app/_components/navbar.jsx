import MobileMenu from "./mobile-menu";
import Navigatons from "./navigations";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex space-x-4 items-center">
            <Logo />

            <Navigatons className="hidden md:flex items-center space-x-1 text-gray-900 dark:text-gray-100 flex-wrap" />
          </div>

          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

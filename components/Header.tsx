import { DarkThemeToggler } from "./DarkThemeToggler";
import { MobileNav } from "./MobileNav";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-2">
      <h1>Abhishek Singh</h1>
      <MobileNav />
      <DarkThemeToggler />
    </header>
  );
};

export default Header;

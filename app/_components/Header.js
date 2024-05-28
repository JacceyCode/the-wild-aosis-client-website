import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="border-b border-primary-900 md:px-8 px-4 py-5">
      <div className="flex flex-col gap-5 md:flex-row justify-between md:items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;

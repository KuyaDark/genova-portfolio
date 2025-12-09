import Logo from "./logo";
import Nav from "./navLink";

const Navbar = () => {
  return (
<header className="sticky top-0 flex-wrap z-20 mx-auto flex w-full items-center justify-between p-8">
  <Logo />
  <Nav />
</header>
  );
};

export default Navbar;

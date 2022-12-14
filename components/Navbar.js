import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1 className="text-5xl">Ninjas</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/lists">Ninja Listing</Link>
    </nav>
  );
};

export default Navbar;

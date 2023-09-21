import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-neutral/5 backdrop-blur-sm shadow-lg">
      <div className="max-w-2xl mx-auto flex justify-between items-center px-6 py-4">
        <Link
          href="/"
          className="font-light font-mono tracking-widest text-neutral text-xl"
        >
          SAMCoding
        </Link>
        <Link
          href="/add-topic"
          className="btn min-h-fit h-10 text-secondary bg-neutral/10"
        >
          Add Topic
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

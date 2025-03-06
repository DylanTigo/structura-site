import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-16 px-3 sm:px-16 font-medium font-chakra">
      <Link href="/" className="uppercase">
        Structura
      </Link>
      <button type="button" className="flex items-center gap-1.5 uppercase">
        <span className="size-2 rounded-full dark:bg-amber-100 bg-amber-950"></span>{" "}
        <span>Menu</span>{" "}
      </button>
    </div>
  );
};

export default Header;

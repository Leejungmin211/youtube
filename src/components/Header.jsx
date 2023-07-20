import { Link } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import Search from "./Search";

export default function Header() {
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <Search />
    </header>
  );
}

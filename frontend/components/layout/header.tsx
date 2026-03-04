import Link from "next/link";
import { Search, User, ShoppingCart } from "lucide-react";

const navLinks = [
  { name: "Board", href: "/board" },
  { name: "Bindings", href: "/bindings" },
  { name: "Boots", href: "/boots" },
  { name: "Gear", href: "/gear" },
  { name: "Sale", href: "/sale" },
];

export default function Header() {
  return (
    <header
      className="h-20 my-8 
    border-2 rounded-xl  bg-header/75 border-border-clr 
     top-4 sticky bg-blur backdrop-blur-md z-50 max-w-360 w-full mx-auto"
    >
      <nav className="px-8 justify-between items-center h-full flex">
        <div>
          <Link href="/" className="text-2xl text-primary-clr">
            SnowShop
          </Link>
        </div>
        <ul className="flex gap-8">
          {navLinks.map((link) => {
            return (
              <li
                key={link.href}
                className="hover:text-txt-hover transition  ease-in-out duration-300"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-8 *:hover:text-txt-hover transition  ease-in-out duration-300">
          <Search />
          <Link href="/user-profile">
            <User />
          </Link>
          <Link href="/shopping-cart">
            <ShoppingCart />
          </Link>
        </div>
      </nav>
    </header>
  );
}

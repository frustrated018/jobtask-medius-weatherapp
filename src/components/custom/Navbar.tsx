import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "../theme-toggle";
import { Input } from "@/components/ui/input";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-5 px-2.5 flex justify-between items-center w-full border-b-2">
      <Link href={"/"} className="text-lg xl:text-2xl font-bold">
        Medius Weather
      </Link>

      <div className="flex items-center gap-2">
        <Link href={"/"} className={buttonVariants({ variant: "link" })}>
          Home
        </Link>
        <Link href={"/about"} className={buttonVariants({ variant: "link" })}>
          About
        </Link>
        <Link
          href={"/services"}
          className={buttonVariants({ variant: "link" })}
        >
          Services
        </Link>
        <Link href={"/contact"} className={buttonVariants({ variant: "link" })}>
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="City" />
          <Button type="submit">Search</Button>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

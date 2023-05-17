import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="w-full bg-slate-600 flex justify-between items-center">
      <Link href="/" className="pl-7">
        <p className="text-white text-3xl font-extrabold">
          <span className="text-red-500">Waldo</span>? WYA
        </p>
      </Link>
      <Image
        src="/assets/images/waldo-png.png"
        alt="logo"
        width={100}
        height={100}
        className="flex-end relative"
      />
    </nav>
  );
};

export default Nav;

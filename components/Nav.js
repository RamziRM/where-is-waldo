import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/hola-waldo.png"
          alt="logo"
          width={100}
          height={100}
        />
        <p>Where is Waldo</p>
      </Link>
    </nav>
  );
};

export default Nav;

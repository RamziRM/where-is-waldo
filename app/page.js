// homepage of the app
import React from "react";
import Link from "next/link";

import { Card } from "../components/ui/card";

const Home = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <h3 className="text-5xl font-extrabold text-slate-600">
        Select an option and get started!
      </h3>
      <div className="flex justify-center items-center">
        <Link href="/upload">
          <Card />
        </Link>
        <Link href="/search">
          <Card />
        </Link>
      </div>
    </section>
  );
};

export default Home;

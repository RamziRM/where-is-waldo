// homepage of the app
import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const Home = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center gap-5 bg-white">
      <h3 className="text-3xl font-extrabold text-slate-600 mt-4">
        Select an option to play
      </h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <Link href="/beach">
          <Card>
            <CardHeader>
              <CardTitle>The beach</CardTitle>
              <CardDescription>
                Waldo and company, at a crowded beach
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/assets/images/wallwaldo2.jpg"
                width={300}
                height={300}
              />
            </CardContent>
            <CardFooter>
              <p>Click to get started!</p>
            </CardFooter>
          </Card>
        </Link>
        <Link href="/space">
          <Card>
            <CardHeader>
              <CardTitle>Interplanetary civilization</CardTitle>
              <CardDescription>Waldo and company, on the moon?</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/assets/images/wallwaldo1.jpg"
                width={300}
                height={300}
              />
            </CardContent>
            <CardFooter>
              <p>Click to get started!</p>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </section>
  );
};

export default Home;

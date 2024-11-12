import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const GetStarted = () => {
  return (
    <section id="get-started" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get Started
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Start using our Next.js GitHub OAuth Template in your project
              today. Its easy to set up and customize.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Button className="w-full" size="lg">
              <Link href="https://github.com/hamdan-khan/nextjs-github-oauth">
                Clone Repository
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

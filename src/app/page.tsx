import Hero from "@/components/Hero";
import Features from "@/components/Features";
import GetStarted from "@/components/GetStarted";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <GetStarted />
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ChevronDown, ExternalLink ,MountainIcon, SquareIcon, HandCoinsIcon, WrenchIcon, ActivityIcon} from "lucide-react";
import Link from "next/link";

function CaroloomLandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 justify-center items-center">
      <header className="flex justify-center items-center px-4 lg:px-6 h-14">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Caroloom</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#approach"
          >
            Approach
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col justify-center items-center text-center">
        {/* Centered Welcome Section */}
        <section className="w-full py-12 md:py-16 lg:py-24 xl:py-32 flex flex-col justify-center items-center text-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Caroloom
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Where Creation Happens.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Centered About Section */}
        <section
          id="about"
          className="w-full py-8 md:py-16 lg:py-20 bg-white dark:bg-gray-800 text-center"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Us
            </h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mx-auto">
              At Caroloom, we are an AI-first company based in Copenhagen, Denmark. We are dedicated to buying,
              building, and operating cutting-edge software businesses. Our
              mission is to transform industries by leveraging the power of
              artificial intelligence and technology innovation.
            </p>
          </div>
        </section>

        {/* Centered Approach Section */}
        <section
          id="approach"
          className="w-full py-8 md:py-16 lg:py-20 text-center"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Approach
            </h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mx-auto">
              We strategically invest in and develop high-potential software
              businesses, focusing on AI solutions that address complex
              challenges. Our expertise spans a wide range of industries,
              enabling us to accelerate growth and unlock new opportunities for
              the businesses in our portfolio.
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <HandCoinsIcon className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Acquire</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  We identify and invest in promising software ventures with
                  innovative AI solutions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <WrenchIcon className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Build</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  We help scale these businesses, providing the technical,
                  financial, and operational resources needed to thrive.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ActivityIcon className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Operate</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  With hands-on involvement, we optimize performance, ensuring
                  sustained growth and long-term success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Centered Portfolio Section */}
        <section
          id="portfolio"
          className="w-full py-8 md:py-16 lg:py-20 bg-gray-100 dark:bg-gray-800 text-center"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Our Portfolio
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <PortfolioCard
                title="English Theory Prep"
                description="AI-assisted danish theory driving preparation for english speakers in denmark."
                link="https://englishtheoryprep.dk"
              />
              <PortfolioCard
                title="Nesty "
                description="Find Rental Homes in Denmark Easily with AI-Powered Search."
                link="https://www.Nesty.dk"               
              />
              <PortfolioCard
                title="Nordic Beauty"
                description="Denmarks most popular aesthetics podcast"
                link="https://open.spotify.com/show/1DOxGFuSVE4QFJwya1Kckr"
              />
              <PortfolioCard
                title="TeoriGPT"
                description="AI-driven theory preparation for learning drivers in Denmark."
                link="https://www.teorigpt.dk"
              />
              <PortfolioCard
                title="BoligGPT"
                description="AI solutions for the real estate market in Denmark."
                link="https://www.boliggpt.dk"
              />              
              <PortfolioCard
                title="FitGig"
                description="Fitgig is the platform where fitness instructors find better gigs, and studios find the right talent — fast, flexible, and without the friction."
                link="https://www.fitgig.dk"
              />
              <PortfolioCard
                title="Creator Rewards Program"
                description="Our Creator rewards program for Nordic content creators."
                link="https://special-sparrow-218.notion.site/Caroloom-Creator-Rewards-Program-14f89ac9382f80d4b431cfb47a618426?pvs=4"
              />
            </div>
          </div>
        </section>

        {/* Centered Contact Section */}
      <section
        id="contact"
        className="w-full py-8 md:py-16 lg:py-20 bg-gray-900 text-gray-50 text-center"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                For any inquiries, feel free to contact us at
                <a 
                  href="mailto:Support@caroloom.com" 
                  className="text-gray-100 font-medium underline ml-1 hover:text-gray-200">
                  Support@caroloom.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>
      <footer className="flex flex-col sm:flex-row justify-center items-center py-6 w-full px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Caroloom. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

type PortfolioCardProps = {
  title: string;
  description: string;
  link: string;
}

function PortfolioCard({ title, description, link }: PortfolioCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </div>
      <div className="p-6 pt-0">
        <a
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

// function ArrowRightIcon(props) {
//   /* Define icon paths */
// }
// function BrainCircuitIcon(props) {
//   /* Define icon paths */
// }
// function BuildingIcon(props) {
//   /* Define icon paths */
// }
// function CircleIcon(props) {
//   /* Define icon paths */
// }
// function MountainIcon(props) {
//   /* Define icon paths */
// }
// function SquareIcon(props) {
//   /* Define icon paths */
// }
// function TrendingUpIcon(props) {
//   /* Define icon paths */
// }
// function TriangleIcon(props) {
//   /* Define icon paths */
// }

export default CaroloomLandingPageComponent;

"use client";

import { ExternalLink, HandCoins, Wrench, Activity, Sparkles } from "lucide-react";
import Link from "next/link";

function CaroloomLandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-violet-100 via-pink-50 to-sky-100 animate-gradient -z-10" />
      
      {/* Floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-delayed" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow" />
      </div>

      <header className="sticky top-0 z-50 glass">
        <div className="flex justify-between items-center px-6 lg:px-12 h-16 max-w-7xl mx-auto w-full">
          <Link className="flex items-center justify-center font-bold text-2xl tracking-tight" href="#">
            <span className="gradient-text">Caroloom</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#about">
              About
            </Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#approach">
              Approach
            </Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#portfolio">
              Portfolio
            </Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 py-20">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 text-sm text-gray-600 mb-8">
              <Sparkles className="w-4 h-4 text-violet-500" />
              AI-First Company from Copenhagen
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 animate-fade-in-up delay-100">
            <span className="gradient-text">Caroloom</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl animate-fade-in-up delay-200">
            Where Creation Happens.
          </p>
          <p className="mt-4 text-gray-500 max-w-xl animate-fade-in-up delay-300">
            We buy, build, and operate cutting-edge software businesses powered by artificial intelligence.
          </p>
          <div className="mt-10 animate-fade-in-up delay-400">
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
            >
              View Our Portfolio
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              About <span className="gradient-text">Us</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              At Caroloom, we are an AI-first company based in Copenhagen, Denmark. 
              We are dedicated to buying, building, and operating cutting-edge software businesses. 
              Our mission is to transform industries by leveraging the power of artificial intelligence 
              and technology innovation.
            </p>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Our <span className="gradient-text">Approach</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We strategically invest in and develop high-potential software businesses, 
                focusing on AI solutions that address complex challenges.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass rounded-2xl p-8 card-hover text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <HandCoins className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Acquire</h3>
                <p className="text-gray-600">
                  We identify and invest in promising software ventures with innovative AI solutions.
                </p>
              </div>
              <div className="glass rounded-2xl p-8 card-hover text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Build</h3>
                <p className="text-gray-600">
                  We scale businesses with technical, financial, and operational resources needed to thrive.
                </p>
              </div>
              <div className="glass rounded-2xl p-8 card-hover text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Operate</h3>
                <p className="text-gray-600">
                  With hands-on involvement, we optimize performance for sustained growth and success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 md:py-32 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Our Portfolio
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Innovative products that leverage AI to solve real problems.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <PortfolioCard
                title="KørApp"
                description="AI-powered driving theory test for both Danish and English learners. Available on iOS."
                link="https://apps.apple.com/dk/app/k%C3%B8rapp/id6758728183"
                tag="iOS App"
                tagColor="bg-blue-500"
              />
              <PortfolioCard
                title="Nordic Beauty"
                description="Denmark's most popular aesthetics podcast."
                link="https://open.spotify.com/show/1DOxGFuSVE4QFJwya1Kckr"
                tag="Podcast"
                tagColor="bg-green-500"
              />
              <PortfolioCard
                title="Aivo"
                description="Voice-to-text keyboard for Nordic languages with AI-powered text processing."
                link="https://aivolabs.eu/"
                tag="iOS App"
                tagColor="bg-blue-500"
              />
              <PortfolioCard
                title="FitGig"
                description="The platform where fitness instructors find better gigs, and studios find the right talent — fast, flexible, and without the friction."
                link="https://www.fitgig.dk"
                tag="Platform"
                tagColor="bg-purple-500"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Interested in partnering with us or learning more about our portfolio?
            </p>
            <a
              href="mailto:Support@caroloom.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
            >
              Support@caroloom.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Caroloom. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Built with AI in Copenhagen 🇩🇰
          </p>
        </div>
      </footer>
    </div>
  );
}

type PortfolioCardProps = {
  title: string;
  description: string;
  link: string;
  tag: string;
  tagColor: string;
};

function PortfolioCard({ title, description, link, tag, tagColor }: PortfolioCardProps) {
  return (
    <div className="glass-dark rounded-2xl p-8 card-hover group">
      <div className="flex items-start justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${tagColor}`}>
          {tag}
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-violet-300 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
      <a
        className="inline-flex items-center gap-2 text-white font-medium hover:text-violet-300 transition-colors"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Website
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}

export default CaroloomLandingPageComponent;

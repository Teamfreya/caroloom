"use client";

import { useState } from "react";
import { ExternalLink, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const portfolio = [
  {
    title: "KørApp",
    description:
      "AI-powered driving theory test app for Danish and English learners. Thousands of practice questions with intelligent feedback.",
    link: "https://apps.apple.com/dk/app/k%C3%B8rapp/id6758728183",
    tag: "iOS App",
    domain: "Education",
  },
  {
    title: "Aivo",
    description:
      "Voice-to-text keyboard built for Nordic languages. Dictate in Danish, Norwegian, Swedish, or Finnish with AI-powered text processing.",
    link: "https://aivolabs.eu/",
    tag: "iOS App",
    domain: "Productivity",
  },
  {
    title: "FitGig",
    description:
      "The marketplace where fitness instructors find better gigs and studios find the right talent — fast, flexible, and without the friction.",
    link: "https://www.fitgig.dk",
    tag: "Platform",
    domain: "Fitness",
  },
  {
    title: "NN Media",
    description:
      "The first AI end-to-end newsroom serving Nordic news in English. Fully automated pipeline from sourcing to production.",
    link: "https://www.tiktok.com/@nordicnewshq",
    tag: "Newsroom",
    domain: "Media",
  },
  {
    title: "Nordic Beauty",
    description:
      "Denmark's leading aesthetics podcast. Conversations with top practitioners about treatments, trends, and the science behind beauty.",
    link: "https://open.spotify.com/show/1DOxGFuSVE4QFJwya1Kckr",
    tag: "Podcast",
    domain: "Media",
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="flex justify-between items-center px-6 lg:px-12 h-16 max-w-7xl mx-auto w-full">
          <Link href="#" className="font-semibold text-xl tracking-tight">
            <span className="gradient-text">Caroloom</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t border-gray-100 bg-white">
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-24 pb-20 md:pt-40 md:pb-32 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-medium text-violet-600 mb-6 tracking-wide">
              Copenhagen · AI-First
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.08]">
              We build the future of{" "}
              <span className="gradient-text">Nordic software.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-12 leading-relaxed">
              Caroloom acquires, builds, and operates AI-powered software
              companies across Scandinavia.
            </p>
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <div className="text-3xl md:text-4xl font-bold tracking-tight">5</div>
              <div className="text-sm text-gray-500 mt-1">Products</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold tracking-tight">3</div>
              <div className="text-sm text-gray-500 mt-1">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold tracking-tight">AI</div>
              <div className="text-sm text-gray-500 mt-1">First approach</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold tracking-tight">CPH</div>
              <div className="text-sm text-gray-500 mt-1">Headquartered</div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 md:py-32">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  An AI holding company{" "}
                  <span className="text-gray-400">from Copenhagen.</span>
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-gray-500 leading-relaxed">
                  We identify high-potential software opportunities in the
                  Nordic market — then acquire or build them from the ground up
                  and scale them into sustainable businesses.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Every company in our portfolio uses artificial intelligence
                  not as a feature, but as the foundation. From voice
                  recognition to intelligent education, we back products where
                  AI creates a genuine advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="py-24 md:py-32 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden">
              {[
                {
                  num: "01",
                  title: "Acquire",
                  text: "We find promising software products with strong fundamentals and untapped potential in the Nordic market.",
                },
                {
                  num: "02",
                  title: "Build",
                  text: "We invest in product, engineering, and go-to-market — giving each company the resources to reach its potential.",
                },
                {
                  num: "03",
                  title: "Operate",
                  text: "We stay hands-on. Our team works alongside each company to optimise performance and drive sustained growth.",
                },
              ].map((item) => (
                <div key={item.num} className="bg-white p-8 md:p-10">
                  <div className="text-4xl font-bold text-violet-200 mb-6">
                    {item.num}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-24 md:py-32 bg-gray-950 text-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Portfolio
                </h2>
                <p className="text-gray-400 max-w-lg">
                  Products that use AI to solve real problems for real people
                  across the Nordics.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {portfolio.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-gray-400 px-2.5 py-1 rounded-full border border-white/10">
                      {item.tag}
                    </span>
                    <span className="text-xs text-gray-500">{item.domain}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-500 group-hover:text-violet-300 transition-colors">
                    Visit
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Let&apos;s talk.
            </h2>
            <p className="text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">
              Looking to sell your software business, explore a partnership, or
              just want to learn more about what we do?
            </p>
            <a
              href="mailto:support@caroloom.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              support@caroloom.com
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="font-semibold text-sm gradient-text">Caroloom</span>
            <span className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} All rights reserved.
            </span>
          </div>
          <span className="text-xs text-gray-400">Copenhagen, Denmark</span>
        </div>
      </footer>
    </div>
  );
}

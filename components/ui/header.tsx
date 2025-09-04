"use client";

import {
  ArrowRight,
  Instagram,
  Twitter,
  Send,
  MessageCircle,
  House,
  Info,
  Briefcase,
  MessageCircleQuestion,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 flex items-center justify-between px-6 py-6 lg:px-12">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25">
          <div className="w-5 h-5 bg-white rounded-full" />
        </div>
        <span className="text-2xl font-bold tracking-tight">Staff360</span>

        {/* Desktop Nav */}
        <nav className="bg-white/5 backdrop-blur-2xl py-4 px-8 rounded-full hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="flex items-center space-x-2 text-purple-300 hover:text-white transition-all duration-300 group"
          >
            <House className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Home</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group"
          >
            <Info className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">About Us</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group"
          >
            <Briefcase className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Open Roles</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group"
          >
            <MessageCircleQuestion className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Why Us?</span>
          </a>
        </nav>
      </div>
      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Desktop social icons */}
        <div className="hidden md:flex items-center space-x-3">
          <Instagram className="w-10 h-10 p-2 rounded-full bg-white/5 backdrop-blur-2xl text-neutral-100 hover:text-purple-400 cursor-pointer transition-all duration-300 hover:scale-110" />
          <Twitter className="w-10 h-10 p-2 rounded-full text-neutral-100 bg-white/5 backdrop-blur-2xl hover:text-purple-400 cursor-pointer transition-all duration-300 hover:scale-110" />
          <Send className="w-10 h-10 p-2 rounded-full text-neutral-100  bg-white/5 backdrop-blur-2xl hover:text-purple-400 cursor-pointer transition-all duration-300 hover:scale-110" />
        </div>

        {/* CTA button (hidden on small, visible on md+) */}
        <Button className="hidden md:flex bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-full items-center space-x-2 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 font-semibold">
          <span>Get started with us</span>
          <ArrowRight className="w-5 h-5" />
        </Button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="z-50 absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg flex flex-col items-start space-y-4 px-6 py-6 md:hidden">
          <a href="#" className="flex items-center space-x-2 text-white">
            <House className="w-5 h-5" />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-white">
            <Info className="w-5 h-5" />
            <span>About Us</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-white">
            <Briefcase className="w-5 h-5" />
            <span>Open Roles</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-white">
            <MessageCircleQuestion className="w-5 h-s5" />
            <span>Why Us?</span>
          </a>
          <Button className="w-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-full mt-4 flex items-center justify-center space-x-2">
            <span>Get started with us</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </header>
  );
}

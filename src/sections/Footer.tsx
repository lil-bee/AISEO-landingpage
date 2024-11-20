import LogoIcon from "@/assets/logo.svg";
import InstagramIcon from "@/assets/social-instagram.svg";
import XIcon from "@/assets/social-x.svg";
import YoutubeIcon from "@/assets/social-youtube.svg";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
        <div className="flex items-center gap-2 lg:flex-1">
          <LogoIcon className="h-6 w-6" />
          <p>AI Startup Landing Page</p>
        </div>
        <nav className="flex flex-col lg:flex-row gap-5 text-xs md:text-sm ">
          <a href="#" className="text-white/70 hover:text-white transition">
            Feature
          </a>
          <a href="#" className="text-white/70 hover:text-white transition">
            Developers
          </a>
          <a href="#" className="text-white/70 hover:text-white transition">
            Pricing
          </a>
          <a href="#" className="text-white/70 hover:text-white transition">
            Changelog
          </a>
        </nav>
        <div className="flex items-center gap-5 lg:flex-1 lg:justify-end">
          <XIcon className="w-6 h-6 text-white/40 hover:text-white transition " />
          <InstagramIcon className="w-6 h-6 text-white/40 hover:text-white transition " />
          <YoutubeIcon className="w-6 h-6 text-white/40 hover:text-white transition " />
        </div>
      </div>
    </footer>
  );
};

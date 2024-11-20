import MenuIcon from "@/assets/icon-menu.svg";
import LogoIcon from "@/assets/logo.svg";
import { Button } from "@/components/Button";
export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden "></div>
      <div className="containter">
        <div className="flex justify-between items-center px-5 md:p-2.5 rounded-2xl md:border max-w-2xl mx-auto border-white/15 relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block "></div>
          <div>
            <div className="border rounded-lg h-10 w-10 inline-flex justify-center items-center border-white/20">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a
                href="#features"
                className="text-white/70 hover:text-white transition"
              >
                Feature
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Developers
              </a>
              <a
                href="#calltoaction"
                className="text-white/70 hover:text-white transition"
              >
                Pricing
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Changelog
              </a>
            </nav>
          </div>

          <div className="flex justify-between items-center gap-4">
            <Button>Join waitlist</Button>
            <MenuIcon className="h-8 w-8 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

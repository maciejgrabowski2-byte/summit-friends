import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground" fill="currentColor">
                <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-foreground">Hiking Buddies</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#events" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Events
            </a>
            <a href="#routes" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Routes
            </a>
            <a href="#community" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="primary" size="sm">
              Add event
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#events" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Events
              </a>
              <a href="#routes" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Routes
              </a>
              <a href="#community" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Community
              </a>
              <Button variant="primary" size="sm" className="w-fit">
                Add event
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

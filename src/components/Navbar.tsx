import { Search, Menu, X, User, LogOut, Globe, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation, Locale } from "@/hooks/useTranslation";
import CreateEventModal from "@/components/create-event/CreateEventModal";

const languageNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  it: "Italiano",
  es: "Español",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { locale, setLocale, t } = useTranslation();

  const navLinks = [
    { href: "/events", label: t('nav.events') },
    { href: "/routes", label: t('nav.routes') },
    { href: "#community", label: t('nav.community') },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground" fill="currentColor">
                <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-foreground italic">Hiking Buddies</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              onClick={() => setIsCreateEventOpen(true)}
              className="text-sm font-medium gap-2"
            >
              <Plus className="w-4 h-4" />
              {t('nav.createEvent')}
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Search className="w-5 h-5" />
            </Button>
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Globe className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-36 bg-background border border-border z-50">
                {(Object.keys(languageNames) as Locale[]).map((lang) => (
                  <DropdownMenuItem 
                    key={lang}
                    onClick={() => setLocale(lang)}
                    className={locale === lang ? "bg-muted font-medium" : ""}
                  >
                    {languageNames[lang]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="w-8 h-8 cursor-pointer">
                  <AvatarImage src="https://i.pravatar.cc/200?img=68" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-background border border-border z-50">
                <DropdownMenuItem onClick={() => navigate('/userprofile')}>
                  <User className="w-4 h-4 mr-2" />
                  {t('nav.userProfile')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => console.log('Log out clicked')}>
                  <LogOut className="w-4 h-4 mr-2" />
                  {t('nav.logOut')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith("#") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Button 
                onClick={() => {
                  setIsOpen(false);
                  setIsCreateEventOpen(true);
                }}
                className="text-sm font-medium w-fit gap-2"
              >
                <Plus className="w-4 h-4" />
                {t('nav.createEvent')}
              </Button>
              
              {/* Mobile Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm font-medium w-fit gap-2">
                    <Globe className="w-4 h-4" />
                    {languageNames[locale]}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-36 bg-background border border-border z-50">
                  {(Object.keys(languageNames) as Locale[]).map((lang) => (
                    <DropdownMenuItem 
                      key={lang}
                      onClick={() => setLocale(lang)}
                      className={locale === lang ? "bg-muted font-medium" : ""}
                    >
                      {languageNames[lang]}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )}
      </div>

      {/* Create Event Modal - only render when open */}
      {isCreateEventOpen && (
        <CreateEventModal 
          isOpen={isCreateEventOpen} 
          onClose={() => setIsCreateEventOpen(false)} 
        />
      )}
    </nav>
  );
};

export default Navbar;

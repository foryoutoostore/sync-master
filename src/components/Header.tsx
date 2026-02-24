import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "RECEITAS GRÁTIS", href: "/" },
    { name: "CREMOSO FORMIGUEIRO", href: "/receita/cremoso-formigueiro" },
    { name: "ABACAXI DOÇURA", href: "/receita/abacaxi-docura" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black py-4 shadow-md">
      <div className="container flex items-center justify-start">
        
        {/* Desktop Nav - Alinhado à esquerda */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-bold tracking-widest transition-colors uppercase",
                  location === link.href ? "text-[#ff7300]" : "text-white hover:text-[#ff7300]"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button - Alinhado à esquerda */}
        <div className="md:hidden w-full flex justify-start">
          <button
            className="text-white p-2 hover:text-[#ff7300] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-t border-[#333] p-4 md:hidden flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-bold tracking-widest py-3 border-b border-[#333] uppercase block w-full text-left",
                    location === link.href ? "text-[#ff7300]" : "text-white hover:text-[#ff7300]"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

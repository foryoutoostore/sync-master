import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 border-t border-[#333]">
      <div className="container flex items-center justify-between px-4">
        <div className="text-xs text-white/80 font-bold">
          © 2025 appRECEITA$
        </div>
        
        <div className="flex gap-4 text-xs font-bold tracking-wider uppercase">
          <Link href="/politica-privacidade">
            <a className="text-white hover:text-[#ff7300] transition-colors">POLÍTICAS / PRIVACIDADE</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

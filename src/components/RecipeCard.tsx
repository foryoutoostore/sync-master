import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface RecipeCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
  href: string;
  color: "primary" | "secondary";
}

export default function RecipeCard({ number, title, description, image, href, color }: RecipeCardProps) {
  return (
    <Link href={href}>
      <a className="group relative block w-full overflow-hidden rounded-2xl bg-card shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-white/5">
        {/* Image Container */}
        <div className="relative h-64 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Number Badge */}
          <div className={cn(
            "absolute top-4 left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold shadow-lg font-display",
            color === "primary" ? "bg-primary text-white" : "bg-secondary text-black"
          )}>
            {number}
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 z-20 -mt-12">
          <div className="rounded-xl bg-card/95 backdrop-blur p-6 shadow-lg border border-white/5">
            <h3 className={cn(
              "mb-2 font-display text-2xl font-bold uppercase tracking-wide",
              color === "primary" ? "text-primary" : "text-secondary"
            )}>
              {title}
            </h3>
            <p className="mb-6 text-sm text-muted-foreground leading-relaxed font-medium">
              {description}
            </p>
            
            <div className={cn(
              "flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-colors",
              color === "primary" ? "text-primary group-hover:text-primary/80" : "text-secondary group-hover:text-secondary/80"
            )}>
              VER RECEITA COMPLETA
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

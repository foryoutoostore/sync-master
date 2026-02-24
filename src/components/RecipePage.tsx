import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

export interface RecipeSection {
  title: string;
  content: string | string[];
  type?: "list" | "text" | "steps";
}

export interface RecipeData {
  title: string;
  color: string; // Cor do título (Laranja/Amarelo)
  sections: RecipeSection[];
  images: [string, string, string];
}

interface RecipePageProps {
  data: RecipeData;
}

export default function RecipePage({ data }: RecipePageProps) {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-[#2f1c0c] text-[#e3c093] font-body pb-10">
      <Header />
      
      <div className="container pt-24 pb-8">
        <Link href="/">
          <a className="inline-flex items-center gap-2 text-sm font-bold mb-6 text-[#ff7300] hover:text-white transition-colors uppercase">
            <ArrowLeft size={16} /> Voltar
          </a>
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-center uppercase mb-8" style={{ color: data.color }}>
          {data.title}
        </h1>

        {/* Imagem 1 - Topo (Sem bordas) */}
        <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
          <img src={data.images[0]} alt={data.title} className="w-full h-auto object-cover" />
        </div>

        <div className="space-y-4">
          {data.sections.map((section, index) => {
            const isOpen = openSections.includes(index);
            
            const showImage2 = index === 2;
            const showImage3 = index === 3;

            return (
              <div key={index}>
                <div className="bg-[#e3c093] rounded-2xl overflow-hidden mb-4">
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <h3 className="text-xl font-bold text-[#944300] uppercase">
                      {section.title}
                    </h3>
                    <ChevronDown 
                      className={cn("text-[#ff7300] transition-transform duration-300", isOpen && "rotate-180")} 
                      size={24}
                    />
                  </button>
                  
                  <div 
                    className={cn(
                      "transition-all duration-300 ease-in-out overflow-hidden",
                      isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="p-5 pt-0 text-[#452717] font-bold text-base leading-relaxed whitespace-pre-wrap">
                      {Array.isArray(section.content) ? (
                        <ul className="space-y-2">
                          {section.content.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        section.content
                      )}
                    </div>
                  </div>
                </div>

                {showImage2 && (
                  <div className="rounded-2xl overflow-hidden mb-4 shadow-lg">
                    <img src={data.images[1]} alt="Detalhe" className="w-full h-auto object-cover" />
                  </div>
                )}

                {showImage3 && (
                  <div className="rounded-2xl overflow-hidden mb-4 shadow-lg">
                    <img src={data.images[2]} alt="Final" className="w-full h-auto object-cover" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

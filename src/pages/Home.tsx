import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { img_cremoso_1 } from "@/lib/images";
import { img_abacaxi_1 } from "@/lib/images";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#452717] font-body">
      <Header />

      <main className="pt-[60px]"> {/* Compensar altura do header fixo */}
        
        {/* Hero Section - FULL WIDTH */}
        <section className="relative w-full h-[600px] overflow-hidden">
          {/* Imagem de fundo Full Width */}
          <img
            src={img_cremoso_1}
            alt="Bolo de Pote"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" /> {/* Overlay leve */}
          
          {/* Conteúdo Centralizado */}
          <div className="relative h-full container flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg tracking-wide">
              Bolos de Pote
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold text-[#ff7300] mb-6 drop-shadow-xl leading-tight">
              2 RECEITA$<br/>GRÁTIS
            </h2>
            
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[#ff7300] text-2xl">•</span>
              <p className="text-base md:text-2xl text-white font-bold tracking-widest drop-shadow-md uppercase">
                FÁCEIS DE FAZER E VENDER
              </p>
              <span className="text-[#ff7300] text-2xl">•</span>
            </div>
            
            <a 
              href="#receitas"
              className="bg-[#ff7300] hover:bg-[#e66000] text-white font-bold py-2 px-8 rounded-full text-lg md:text-xl transition-all shadow-xl transform hover:scale-105 flex flex-col items-center justify-center leading-tight h-auto"
              style={{width: '297px', minHeight: '60px'}}
            >
              <span>Sua Renda Extra</span>
              <span>Começa Agora!</span>
            </a>
            
            {/* Ícone de dinheiro abaixo do botão (substituído por logo) */}
            <div className="mt-6 drop-shadow-md">
              <img src="/images/logo_receitas_branco.webp" alt="Logo Receitas" className="h-16 w-auto" style={{height: '49px'}} />
            </div>
          </div>
        </section>

        {/* Faixa Motivacional - FULL WIDTH BEGE ESCURO */}
        <section className="w-full bg-[#c2843d] py-20">
          <div className="container text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[#5c3a21] mb-8 leading-tight">
              “COMECE HOJE,<br/>DA SUA COZINHA”
            </h2>
            <p className="text-lg md:text-xl text-white font-medium leading-relaxed max-w-3xl mx-auto">
              Escolha a que você mais gosta e siga o passo a passo com calma. 
              Faça um primeiro teste, ofereça para um vizinho, um amigo, um colega. 
              Hoje é o dia em que sua cozinha vai começar a te trazer dinheiro.
            </p>
          </div>
        </section>

        {/* Recipes Grid - Fundo Bege Claro (Igual ao PDF) */}
        <section id="receitas" className="w-full bg-[#eae0d5] py-24">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {/* Card 1 */}
              <Link href="/receita/cremoso-formigueiro">
                <a className="group block text-center">
                  <div className="relative w-64 h-48 mx-auto rounded-2xl overflow-hidden shadow-xl mb-8 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={img_cremoso_1} 
                      alt="Cremoso Formigueiro" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-0 left-0 bg-black/50 text-white w-12 h-12 flex items-center justify-center rounded-br-2xl font-bold text-3xl">
                      1
                    </div>
                  </div>
                  <div className="px-4">
                    <h3 className="text-2xl font-bold text-[#ff7300] mb-4 uppercase">
                      CREMOSO FORMIGUEIRO
                    </h3>
                    <p className="text-[#452717] text-lg font-bold leading-snug">
                      Custo baixo e alto rendimento. É a receita que gera memórias felizes e lucro rápido.
                    </p>
                  </div>
                </a>
              </Link>

              {/* Card 2 */}
              <Link href="/receita/abacaxi-docura">
                <a className="group block text-center">
                  <div className="relative w-64 h-48 mx-auto rounded-2xl overflow-hidden shadow-xl mb-8 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={img_abacaxi_1} 
                      alt="Abacaxi Doçura" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-0 left-0 bg-black/50 text-white w-12 h-12 flex items-center justify-center rounded-br-2xl font-bold text-3xl">
                      2
                    </div>
                  </div>
                  <div className="px-4">
                    <h3 className="text-2xl font-bold text-[#ff7300] mb-4 uppercase">
                      ABACAXI DOÇURA
                    </h3>
                    <p className="text-[#452717] text-lg font-bold leading-snug">
                      Refrescante como um mergulho no verão. É a sobremesa leve que todo mundo procura nos dias de calor.
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

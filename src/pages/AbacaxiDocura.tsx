import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { img_abacaxi_1, img_abacaxi_2, img_abacaxi_3 } from "@/lib/images";

export default function AbacaxiDocura() {
  useEffect(() => {
    const headers = document.querySelectorAll('.recipe-card .card-header');
    const handleClick = function(this: HTMLElement) {
      const cardContent = this.nextElementSibling;
      const cardArrow = this.querySelector('.card-arrow');
      if (cardContent && cardArrow && cardContent.classList.contains('card-content')) {
        cardContent.classList.toggle('open');
        cardArrow.classList.toggle('open');
      }
    };

    headers.forEach(header => {
      header.addEventListener('click', handleClick as EventListener);
    });

    return () => {
      headers.forEach(header => {
        header.removeEventListener('click', handleClick as EventListener);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#ffd952] text-[#120904] font-sans">
      <Header />
      
      <style>{`
        :root {
            --bg-dark: #ffd952;
            --bg-card: #db9400;
            --orange-accent: #ffffff;
            --text-primary: #120904;
            --card-arrow-color: #ff6600;
        
            /* Padrões de fonte e entrelinha Desktop */
            --recipe-title-font-size: 40px;
            --recipe-title-line-height: 1.2;
            --card-title-font-size: 24px;
            --card-title-line-height: 1.2;
            --content-font-size: 16px;
            --content-line-height: 1.7;
        }
        
        .recipe-container {
            max-width: 768px;
            margin: 0 auto;
            padding: 20px;
            padding-top: 96px; /* Added padding for fixed header */
        }
        
        #recipeTitlePreview {
            font-size: var(--recipe-title-font-size);
            line-height: var(--recipe-title-line-height);
            font-weight: bold;
            color: #ff6600;
            text-transform: uppercase;
            text-align: center;
            padding: 30px 20px 10px 20px;
        }
        
        .recipe-card {
            background: var(--bg-card);
            border-radius: 16px;
            margin-bottom: 20px;
            position: relative;
            overflow: hidden;
        }
        
        .card-header {
            padding: 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
        }
        
        .card-arrow {
            width: 18px;
            height: 18px;
            fill: var(--card-arrow-color);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            transform: rotate(-90deg);
            flex-shrink: 0;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }
        
        .card-arrow.open {
            transform: rotate(0deg);
        }
        
        .card-title {
            font-size: var(--card-title-font-size);
            line-height: var(--card-title-line-height);
            font-weight: bold;
            color: var(--orange-accent);
            text-transform: uppercase;
            flex: 1;
        }
        
        .card-content {
            padding: 0 20px 20px 20px;
            display: none;
            white-space: pre-wrap;
            word-wrap: break-word;
            font-size: var(--content-font-size);
            line-height: var(--content-line-height);
            font-weight: bold;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-content.open {
            display: block;
            animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes slideDown {
            from {
            opacity: 0;
            transform: translateY(-10px);
            }
            to {
            opacity: 1;
            transform: translateY(0);
            }
        }
        
        .photo-card {
            padding: 0;
            background: transparent;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
        }
        
        .photo-card .photo-preview-container {
            width: 100%;
            position: relative;
            overflow: hidden;
            background: transparent;
            border-radius: 16px;
        }
        
        .photo-card .photo-preview {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform-origin: center center;
            border-radius: 16px;
        }
        
        .recipe-footer {
            max-width: 800px;
            margin: 24px auto 0;
            padding: 0 20px 24px;
            font-size: 10px;
            line-height: 12px;
            font-style: italic;
            font-weight: normal;
            color: var(--text-primary);
            opacity: 0.7;
            text-align: center;
        }
        
        @media (max-width: 767px) {
            :root {
            /* Padrões de fonte e entrelinha Mobile */
            --recipe-title-font-size: 25px;
            --recipe-title-line-height: 1.2;
            --card-title-font-size: 22px;
            --card-title-line-height: 1.2;
            --content-font-size: 17px;
            --content-line-height: 1.7;
            }
            .recipe-container {
            max-width: 375px;
            padding: 15px;
            padding-top: 80px;
            }
            
            #recipeTitlePreview { 
            padding: 20px 15px 5px 15px;
            }
        }
      `}</style>

      <div className="recipe-container">
        <h1 id="recipeTitlePreview">ABACAXI&nbsp; DOÇURA</h1>
        
        <div className="recipe-card photo-card">
          <div className="photo-preview-container">
            <img className="photo-preview" src={img_abacaxi_1} alt="Bolo Abacaxi" />
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24">
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title">INFORMAÇÕES</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(255, 255, 255)"}}>Rendimento:</span> 8 potes de 200 ml
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>Grau de dificuldade:</span> Fácil
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>Custo:</span> Médio
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>Tempo de preparo:</span> 1 hora e 20 minutos (inclui resfriamento)
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24">
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title">LISTA DE INGREDIENTES</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(255, 255, 255)"}}>Para a Massa Branca Fofa:</span>
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>4 ovos
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>2 xícaras de açúcar
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>2 e 1/2 xícaras de farinha de trigo
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>1 colher (sopa) de manteiga sem sal
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>1 xícara de leite quente
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>1 pitada de sal
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>1 colher (sopa) de fermento em pó
            <br/><br/>
            <span style={{color: "rgb(255, 255, 255)"}}>Para o Creme Doce de Abacaxi:</span>
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>2 latas de leite condensado (395g cada)
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>1 caixa de creme de leite (200g)
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>2 colheres (sopa) de amido de milho
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>2 xícaras de leite integral
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>1 colher (chá) de essência de baunilha
            <br/><br/>
            <span style={{color: "rgb(255, 255, 255)"}}>Para o Abacaxi Cozido:</span>
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>2 xícaras de abacaxi picado
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>3 colheres (sopa) de açúcar
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>1 colher (sopa) de água
            <br/><br/>
            <span style={{color: "rgb(255, 255, 255)"}}>Para a Calda Leve:</span>
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>1/2 xícara de leite
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>1 colher (sopa) de açúcar
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24">
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title">PREPARANDO OS INGREDIENTES</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>Pique o abacaxi em cubinhos pequenos.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>O creme precisa estar totalmente frio antes de montar os potes.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>Deixe a massa esfriar por completo para não perder a textura.
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24">
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title">PASSO A PASSO</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(255, 255, 255)"}}>Massa:</span>
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>1- </span>Aqueça o forno a 180ºC. Unte a forma com óleo e polvilhe farinha por cima.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>2-</span> Bata os ovos e o açúcar até virar um creme claro.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>3-</span> Misture o leite quente com a manteiga e coloque no creme.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>4-</span> Acrescente a farinha, o sal e o fermento já peneirados.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>5-</span> Misture com calma.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>6-</span> Leve ao forno por cerca de 30 a 35 minutos. Deixe esfriar e esfarele.
            <br/><br/>
            <span style={{color: "rgb(255, 255, 255)"}}>Creme Doce de Abacaxi:</span>
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>1-</span> Misture o leite, o amido de milho (maisena) e o leite condensado.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>2-</span> Cozinhe em fogo baixo, mexendo sem parar.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>3-</span> Quando engrossar, desligue e misture o creme de leite e a baunilha (líquido com cheiro doce usado em doces).
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>4-</span> Deixe esfriar totalmente.
            <br/><br/>
            <span style={{color: "rgb(255, 255, 255)"}}>Abacaxi Cozido:</span>
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>1- </span>Coloque o abacaxi, o açúcar e a água em uma panela no fogo baixo.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>2-</span> Cozinhe até formar uma calda leve, sem deixar o abacaxi desmanchar.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>3-</span> Espere esfriar.
            <br/><br/>
            <span style={{color: "rgb(255, 255, 255)"}}>Calda:</span>
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>1-</span> Misture o leite e o açúcar até o açúcar dissolver.
            <br/><br/>
            <span style={{color: "rgb(255, 255, 255)"}}>Montagem:</span>
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>1- </span>Coloque uma camada de bolo esfarelado no fundo do pote.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>2-</span> Regue com a calda.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>3-</span> Coloque o creme.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>4- </span>Acrescente uma colher do abacaxi cozido.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>5-</span> Repita as camadas até chegar no topo do pote.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>6-</span> Leve para gelar por 2 horas.
          </div>
        </div>

        <div className="recipe-card photo-card">
          <div className="photo-preview-container">
            <img className="photo-preview" src={img_abacaxi_2} alt="Detalhe do Doce" />
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24">
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title">DICAS DE CHEF</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>Abacaxi cru pode talhar o creme (fazer ele desandar). Sempre use cozido.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>Creme quente derrete a massa. Use sempre frio.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>Se quiser mais acidez (gosto azedinho), adicione algumas gotas de limão ao abacaxi.
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24">
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title">LISTA DE UTENSÍLIOS</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>Tigela grande
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>Peneira
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>Panela média
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>Espátula de silicone
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>Forma média
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>Potes de 200 ml com tampa
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>Medidores de cozinha
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24">
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title">SUGESTÕES DE SUBSTITUIÇÕES</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>Abacaxi fresco: pode usar o de lata, mas escorra bem a água.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>Baunilha: pode trocar por raspas de limão.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>Leite integral: pode ser semidesnatado (com menos gordura).
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24">
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title">OCASIÕES IDEAIS PARA SERVIR OU VENDER</div>
          </div>
          <div className="card-content open">
            Ótimo para dias quentes, vendas em feiras, entrega em casa e sobremesas individuais. O sabor tropical agrada muito.
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24">
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title">SUGESTÃO DE HARMONIZAÇÃO (BEBIDAS)</div>
          </div>
          <div className="card-content open">
            Combina com suco natural, água de coco ou chá gelado.
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24">
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title">SUGESTÕES DE EMBALAGENS</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(255, 255, 255)"}}>Opção Econômica:</span>
            <br/>
            Potes plásticos simples de 200 ml.
            <br/><br/>
            <span style={{color: "rgb(255, 255, 255)"}}>Opção Gourmet:</span>
            <br/>
            Potes de vidro com tampa de metal e rótulo tropical (com desenhos de praia, folhas).
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24">
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title">IDEIAS PARA REDES SOCIAIS</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(255, 255, 255)"}}>1) </span>O sabor tropical que refresca e conquista.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>2)</span> Abacaxi cremoso como você nunca provou.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>3) </span>Cada colherada é um mergulho no verão.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>4)</span> Leve, doce e impossível de resistir.
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>5)</span> O pote mais refrescante da sua vitrine.
          </div>
        </div>

        <div className="recipe-card photo-card">
          <div className="photo-preview-container">
            <img className="photo-preview" src={img_abacaxi_3} alt="Bolo Pronto" />
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24">
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title">DICAS QUE FAZEM A DIFERENÇA</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>Sempre use o abacaxi cozido para evitar acidez excessiva (muito azedo).
            <br/>
            • <span style={{color: "rgb(255, 255, 255)"}}>Respeite os tempos de resfriamento para garantir camadas perfeitas.</span>
            <br/>
            <span style={{color: "rgb(255, 255, 255)"}}>• </span>Este pote tem alta aceitação por ser leve, cremoso e equilibrado.
          </div>
        </div>

        <div className="recipe-footer">
          © 2025 appRECEITA$ e foryoutoo.click • Todas as fotos são meramente ilustrativas, feitas por IA.
        </div>
      </div>

      <Footer />
    </div>
  );
}

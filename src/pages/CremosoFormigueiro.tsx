import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { img_cremoso_1, img_cremoso_2, img_cremoso_3 } from "@/lib/images";

export default function CremosoFormigueiro() {
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
    <div className="min-h-screen bg-[#2f1c0c] text-[#452717] font-sans">
      <Header />
      
      <style>{`
        :root {
            --bg-dark: #2f1c0c;
            --bg-card: #e3c093;
            --orange-accent: #944300;
            --text-primary: #452717;
            --card-arrow-color: #ff7300;
        
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
            color: var(--orange-accent);
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
            background: var(--bg-elevated);
            margin-left: auto;
            margin-right: auto;
            width: 100%;
        }
        
        .photo-card .photo-preview-container {
            width: 100%;
            position: relative;
            overflow: hidden;
            background: var(--bg-elevated);
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
        <h1 id="recipeTitlePreview" style={{color: "#d97e17", textAlign: "center"}}>CREMOSO FORMIGUEIRO</h1>
        
        <div className="recipe-card photo-card">
          <div className="photo-preview-container">
            <img className="photo-preview" src={img_cremoso_1} alt="Bolo Formigueiro" />
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24" style={{fill: "var(--card-arrow-color)"}}>
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title" style={{color: "var(--orange-accent)"}}>INFORMAÇÕES</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(204, 92, 0)"}}>Rendimento:</span> 8 potes de 200 ml  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>Grau de dificuldade:</span> Fácil  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>Custo: </span>Baixo  
            <br/>
            <span style={{color: "rgb(204, 91, 1)"}}>Tempo de preparo:</span> 1 hora e 10 minutos (inclui resfriamento)
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24" style={{fill: "var(--card-arrow-color)"}}>
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title" style={{color: "var(--orange-accent)"}}>LISTA DE INGREDIENTES</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(204, 92, 0)"}}>Para a Massa Formigueiro:</span>
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>4 ovos  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>2 xícaras de açúcar  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>2 e 1/2 xícaras de farinha de trigo  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>1 colher (sopa) de manteiga sem sal  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>1 xícara de leite quente  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>1 pitada de sal  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>1 colher (sopa) de fermento em pó  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>1/2 xícara de chocolate granulado  
            <br/><br/>
            <span style={{color: "rgb(204, 92, 0)"}}>Para o Creme Branco Suave:</span>
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>1 lata de leite condensado (395g)  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>1 caixa de creme de leite (200g)  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>1 colher (sopa) de amido de milho  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>1 xícara de leite  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>1 colher (chá) de essência de baunilha  
            <br/><br/>
            <span style={{color: "rgb(204, 92, 0)"}}>Para a Calda Suave:</span>
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>1/2 xícara de leite  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>1 colher (sopa) de açúcar  
            <br/><br/>
            <span style={{color: "rgb(204, 92, 0)"}}>Para a Finalização:</span>
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>2 colheres (sopa) de chocolate granulado
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24" style={{fill: "var(--card-arrow-color)"}}>
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title" style={{color: "var(--orange-accent)"}}>PREPARANDO OS INGREDIENTES</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>Misture o granulado (bolinhas de chocolate) na massa apenas no final, para não derreter.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>Deixe o creme e a massa completamente frios antes de montar os potes.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>Peneire a farinha para a massa ficar bem fofinha.
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24" style={{fill: "var(--card-arrow-color)"}}>
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title" style={{color: "var(--orange-accent)"}}>PASSO A PASSO</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(204, 92, 0)"}}>Massa:</span>
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>1- </span>Aqueça o forno a 180ºC. Unte a forma com óleo e polvilhe farinha por cima.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>2-</span> Bata os ovos e o açúcar até virar um creme claro.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>3-</span> Misture o leite quente com a manteiga e coloque no creme.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>4-</span> Acrescente a farinha, o sal e o fermento já peneirados.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>5-</span> Misture com calma.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>6-</span> Coloque o chocolate granulado e misture rapidinho.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>7-</span> Leve ao forno por cerca de 30 a 35 minutos. Deixe esfriar e esfarele.
            <br/><br/>
            <span style={{color: "rgb(204, 92, 0)"}}>Creme Branco Suave:</span>
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>1-</span> Misture o leite, o amido de milho (maisena) e o leite condensado.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>2-</span> Cozinhe em fogo baixo até engrossar.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>3-</span> Desligue e misture o creme de leite e a baunilha (líquido com cheiro doce usado em doces).  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>4-</span> Use frio.
            <br/><br/>
            <span style={{color: "rgb(204, 92, 0)"}}>Calda:</span>
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>1-</span> Misture o leite e o açúcar até o açúcar dissolver.
            <br/><br/>
            <span style={{color: "rgb(204, 92, 0)"}}>Montagem:</span>
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>1-</span> Coloque uma camada de bolo esfarelado no fundo do pote.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>2-</span> Regue devagar com a calda.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>3-</span> Coloque o creme branco.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>4-</span> Repita as camadas até chegar no topo do pote.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>5-</span> Finalize com creme e granulado por cima.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>6-</span> Leve para gelar por 2 horas.
          </div>
        </div>

        <div className="recipe-card photo-card">
          <div className="photo-preview-container">
            <img className="photo-preview" src={img_cremoso_2} alt="Detalhe do Doce" />
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24" style={{fill: "var(--card-arrow-color)"}}>
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title" style={{color: "var(--orange-accent)"}}>DICAS DE CHEF</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>Use granulado de boa qualidade (macio) para não ficar duro na massa.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>Não bata demais a massa depois de colocar a farinha, para o bolo não ficar pesado.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>Creme frio é indispensável para não desmontar o pote.
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24" style={{fill: "var(--card-arrow-color)"}}>
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title" style={{color: "var(--orange-accent)"}}>LISTA DE UTENSÍLIOS</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>Tigela grande  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>Peneira  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>Panela grossa  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>Espátula de silicone  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>Forma média  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>Potes de 200 ml com tampa  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>Medidores de cozinha
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24" style={{fill: "var(--card-arrow-color)"}}>
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title" style={{color: "var(--orange-accent)"}}>SUGESTÕES DE SUBSTITUIÇÕES</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>Granulado: pode usar gotas pequenas de chocolate.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>Baunilha: pode usar raspas de limão.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>Leite integral: pode ser semidesnatado (com menos gordura).
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24" style={{fill: "var(--card-arrow-color)"}}>
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title" style={{color: "var(--orange-accent)"}}>OCASIÕES IDEAIS PARA SERVIR OU VENDER</div>
          </div>
          <div className="card-content open">
            Ideal para vitrines infantis, eventos, festas, kits econômicos e vendas em grande volume. Sabor divertido e acessível, sempre com alta aceitação.
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24" style={{fill: "var(--card-arrow-color)"}}>
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title" style={{color: "var(--orange-accent)"}}>SUGESTÃO DE HARMONIZAÇÃO (BEBIDAS)</div>
          </div>
          <div className="card-content open">
            Combina com leite gelado, achocolatado ou café suave.
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24" style={{fill: "var(--card-arrow-color)"}}>
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title" style={{color: "var(--orange-accent)"}}>SUGESTÕES DE EMBALAGENS</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(204, 92, 0)"}}>Opção Econômica:</span>
            <br/>
            Potes plásticos de 200 ml.  
            <br/><br/>
            <span style={{color: "rgb(204, 92, 0)"}}>Opção Gourmet:</span>
            <br/>
            Potes de vidro com tampa colorida e rótulo divertido.
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24" style={{fill: "var(--card-arrow-color)"}}>
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title" style={{color: "var(--orange-accent)"}}>IDEIAS PARA REDES SOCIAIS</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(204, 92, 0)"}}>1) </span>O clássico formigueiro em versão cremosa!  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>2)</span> Pontinhos de chocolate em cada camada.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>3)</span> Doce, leve e super nostálgico.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>4)</span> O pote mais divertido do cardápio.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>5)</span> Cremoso, macio e impossível de resistir.
          </div>
        </div>

        <div className="recipe-card photo-card">
          <div className="photo-preview-container">
            <img className="photo-preview" src={img_cremoso_3} alt="Bolo Pronto" />
          </div>
        </div>

        <div className="recipe-card">
          <div className="card-header">
            <svg className="card-arrow open" viewBox="0 0 24 24" style={{fill: "var(--card-arrow-color)"}}>
              <polygon points="12,18 2,6 22,6"/>
            </svg>
            <div className="card-title" style={{color: "var(--orange-accent)"}}>DICAS QUE FAZEM A DIFERENÇA</div>
          </div>
          <div className="card-content open">
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>Adicione o granulado por último para evitar que derreta.  
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}><span style={{color: "rgb(69, 39, 23)"}}>• </span></span><span style={{color: "rgb(204, 92, 0)"}}>Creme e massa frios garantem camadas perfeitas. </span> 
            <br/>
            <span style={{color: "rgb(204, 92, 0)"}}>• </span>Este pote vende muito por unir nostalgia (lembranças boas), simplicidade e sabor marcante.
          </div>
        </div>

        <div className="recipe-footer" style={{}}>
          <span style={{color: "rgb(255, 255, 255)"}}>* Todas as fotos dessa receita são meramente ilustrativas, feitas por Inteligência Artificial (IA).</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}

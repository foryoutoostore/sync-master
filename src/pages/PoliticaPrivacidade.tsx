import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-[#2f1c0c] text-[#e3c093] font-body">
      <Header />
      
      <main className="container py-24 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-[#ff7300] uppercase text-center">
          Política de Privacidade
        </h1>
        
        <div className="space-y-8 text-base leading-relaxed text-[#e3c093] bg-[#4a2c13] p-8 rounded-2xl shadow-lg">
          <p>
            A sua privacidade é importante para nós. É política do site Bolos de Pote respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Bolos de Pote, e outros sites que possuímos e operamos.
          </p>
          
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
          
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>
          
          <p>
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>
          
          <p>
            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
          </p>
          
          <p>
            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
          </p>
          
          <p>
            O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
          </p>
          
          <h2 className="text-xl font-bold text-[#ff7300] mt-8 mb-4 uppercase">Compromisso do Usuário</h2>
          <p>
            O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Bolos de Pote oferece no site e com caráter enunciativo, mas não limitativo:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
            <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, casas de apostas online, jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
            <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Bolos de Pote, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
          </ul>
          
          <h2 className="text-xl font-bold text-[#ff7300] mt-8 mb-4 uppercase">Mais informações</h2>
          <p>
            Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
          </p>
          
          <p className="mt-8 text-sm opacity-70">
            Esta política é efetiva a partir de <strong>Dezembro/2025</strong>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

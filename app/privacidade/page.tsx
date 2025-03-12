// Página de Política de Privacidade
export default function PrivacidadePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Política de Privacidade</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Saiba como coletamos, usamos e protegemos suas informações pessoais na plataforma Cooperativados.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">1. Introdução</h2>
            <p className="text-gray-700 mb-6">
              A Cooperativados está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como
              coletamos, usamos, divulgamos, transferimos e armazenamos suas informações. Por favor, reserve um momento
              para se familiarizar com nossas práticas de privacidade.
            </p>

            <h2 className="text-2xl font-bold mb-6">2. Informações que Coletamos</h2>
            <p className="text-gray-700 mb-4">Podemos coletar os seguintes tipos de informações:</p>
            <ul className="list-disc pl-8 mb-6 text-gray-700 space-y-2">
              <li>
                <strong>Informações pessoais:</strong> Nome, endereço de e-mail, número de telefone, CPF/CNPJ, endereço,
                dados bancários e outras informações que você fornece ao se cadastrar ou utilizar nossos serviços.
              </li>
              <li>
                <strong>Informações profissionais:</strong> Qualificações, experiência, habilidades, certificações e
                outras informações relacionadas à sua atividade profissional.
              </li>
              <li>
                <strong>Informações de uso:</strong> Como você interage com nossa plataforma, incluindo páginas
                visitadas, tempo de permanência, cliques e outras estatísticas.
              </li>
              <li>
                <strong>Informações do dispositivo:</strong> Endereço IP, tipo de navegador, idioma, sistema operacional
                e outras informações técnicas sobre o dispositivo que você usa para acessar nossa plataforma.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">3. Como Usamos Suas Informações</h2>
            <p className="text-gray-700 mb-4">Utilizamos suas informações para:</p>
            <ul className="list-disc pl-8 mb-6 text-gray-700 space-y-2">
              <li>Fornecer, manter e melhorar nossos serviços;</li>
              <li>Processar transações e enviar notificações relacionadas;</li>
              <li>Conectar profissionais e empresas de acordo com suas necessidades;</li>
              <li>Verificar sua identidade e prevenir fraudes;</li>
              <li>Personalizar sua experiência na plataforma;</li>
              <li>Enviar comunicações de marketing, atualizações e informações relevantes;</li>
              <li>Cumprir obrigações legais e regulatórias;</li>
              <li>Resolver disputas e solucionar problemas.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">4. Compartilhamento de Informações</h2>
            <p className="text-gray-700 mb-4">Podemos compartilhar suas informações com:</p>
            <ul className="list-disc pl-8 mb-6 text-gray-700 space-y-2">
              <li>
                <strong>Profissionais e empresas:</strong> Para facilitar a conexão entre as partes interessadas em
                nossos serviços.
              </li>
              <li>
                <strong>Prestadores de serviços:</strong> Empresas que nos ajudam a fornecer e melhorar nossos serviços
                (processamento de pagamentos, hospedagem, análise de dados, etc.).
              </li>
              <li>
                <strong>Parceiros comerciais:</strong> Empresas com as quais temos acordos para oferecer serviços
                complementares.
              </li>
              <li>
                <strong>Autoridades legais:</strong> Quando exigido por lei, ordem judicial ou para proteger nossos
                direitos legais.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">5. Segurança das Informações</h2>
            <p className="text-gray-700 mb-6">
              Implementamos medidas de segurança técnicas, administrativas e físicas para proteger suas informações
              contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de
              transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro, e não podemos garantir sua
              segurança absoluta.
            </p>

            <h2 className="text-2xl font-bold mb-6">6. Seus Direitos</h2>
            <p className="text-gray-700 mb-4">
              Você tem os seguintes direitos em relação às suas informações pessoais:
            </p>
            <ul className="list-disc pl-8 mb-6 text-gray-700 space-y-2">
              <li>Acessar e receber uma cópia das suas informações pessoais;</li>
              <li>Corrigir informações imprecisas ou incompletas;</li>
              <li>Solicitar a exclusão de suas informações pessoais;</li>
              <li>Restringir ou opor-se ao processamento de suas informações;</li>
              <li>Retirar seu consentimento a qualquer momento;</li>
              <li>Apresentar uma reclamação a uma autoridade de proteção de dados.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">7. Retenção de Dados</h2>
            <p className="text-gray-700 mb-6">
              Mantemos suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos nesta
              Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
            </p>

            <h2 className="text-2xl font-bold mb-6">8. Transferências Internacionais</h2>
            <p className="text-gray-700 mb-6">
              Suas informações podem ser transferidas e processadas em países diferentes daquele em que você reside.
              Esses países podem ter leis de proteção de dados diferentes das leis do seu país. Tomamos medidas para
              garantir que suas informações permaneçam protegidas de acordo com esta Política de Privacidade.
            </p>

            <h2 className="text-2xl font-bold mb-6">9. Cookies e Tecnologias Semelhantes</h2>
            <p className="text-gray-700 mb-6">
              Utilizamos cookies e tecnologias semelhantes para coletar informações sobre suas atividades em nossa
              plataforma. Isso nos ajuda a fornecer uma experiência personalizada, analisar o uso da plataforma e
              melhorar nossos serviços. Você pode gerenciar suas preferências de cookies através das configurações do
              seu navegador.
            </p>

            <h2 className="text-2xl font-bold mb-6">10. Alterações nesta Política</h2>
            <p className="text-gray-700 mb-6">
              Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou
              por outros motivos operacionais, legais ou regulatórios. Notificaremos você sobre quaisquer alterações
              materiais através de nossa plataforma ou por outros meios.
            </p>

            <h2 className="text-2xl font-bold mb-6">11. Contato</h2>
            <p className="text-gray-700 mb-6">
              Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade ou ao
              processamento de suas informações pessoais, entre em contato conosco através do email:
              privacidade@cooperativados.com.br ou pelo telefone (11) 3456-7890.
            </p>

            <p className="text-gray-700 italic mt-8">Última atualização: 15 de março de 2023</p>
          </div>
        </div>
      </section>
    </div>
  )
}


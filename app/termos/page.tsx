// Página de Termos de Uso
export default function TermosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Termos de Uso</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Leia atentamente os termos e condições para utilização da plataforma Cooperativados.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">1. Aceitação dos Termos</h2>
            <p className="text-gray-700 mb-6">
              Ao acessar ou utilizar a plataforma Cooperativados, você concorda em cumprir e estar sujeito a estes
              Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá acessar ou utilizar
              nossos serviços.
            </p>

            <h2 className="text-2xl font-bold mb-6">2. Descrição do Serviço</h2>
            <p className="text-gray-700 mb-6">
              A Cooperativados é uma plataforma que conecta profissionais qualificados a empresas que necessitam de seus
              serviços. Oferecemos serviços de intermediação, gestão administrativa e financeira para facilitar a
              relação entre as partes.
            </p>

            <h2 className="text-2xl font-bold mb-6">3. Cadastro e Conta</h2>
            <p className="text-gray-700 mb-4">
              Para utilizar nossos serviços, é necessário criar uma conta na plataforma. Ao se cadastrar, você concorda
              em:
            </p>
            <ul className="list-disc pl-8 mb-6 text-gray-700 space-y-2">
              <li>Fornecer informações precisas, atualizadas e completas;</li>
              <li>Manter a confidencialidade de sua senha e restringir o acesso à sua conta;</li>
              <li>Ser responsável por todas as atividades realizadas em sua conta;</li>
              <li>Notificar imediatamente a Cooperativados sobre qualquer uso não autorizado de sua conta.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">4. Responsabilidades dos Usuários</h2>
            <h3 className="text-xl font-semibold mb-4">4.1 Profissionais</h3>
            <p className="text-gray-700 mb-4">Os profissionais cadastrados na plataforma concordam em:</p>
            <ul className="list-disc pl-8 mb-6 text-gray-700 space-y-2">
              <li>Fornecer informações verdadeiras sobre suas qualificações e experiência;</li>
              <li>Cumprir com os compromissos assumidos com as empresas contratantes;</li>
              <li>Executar os serviços com qualidade, profissionalismo e dentro dos prazos estabelecidos;</li>
              <li>Manter comunicação clara e transparente com a Cooperativados e as empresas contratantes;</li>
              <li>Respeitar as normas de segurança e procedimentos estabelecidos pelas empresas contratantes.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">4.2 Empresas</h3>
            <p className="text-gray-700 mb-4">As empresas cadastradas na plataforma concordam em:</p>
            <ul className="list-disc pl-8 mb-6 text-gray-700 space-y-2">
              <li>Fornecer informações precisas sobre suas necessidades e requisitos;</li>
              <li>Oferecer condições adequadas de trabalho aos profissionais contratados;</li>
              <li>Realizar os pagamentos conforme acordado e dentro dos prazos estabelecidos;</li>
              <li>Avaliar de forma justa e objetiva os serviços prestados pelos profissionais;</li>
              <li>Respeitar os direitos trabalhistas e as condições estabelecidas nos contratos.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">5. Pagamentos e Taxas</h2>
            <p className="text-gray-700 mb-6">
              A Cooperativados cobra uma taxa administrativa pelos serviços prestados. Esta taxa é calculada como um
              percentual do valor dos serviços contratados e é descontada antes do repasse ao profissional. Os detalhes
              sobre valores e formas de pagamento são disponibilizados na plataforma e podem ser atualizados
              periodicamente.
            </p>

            <h2 className="text-2xl font-bold mb-6">6. Propriedade Intelectual</h2>
            <p className="text-gray-700 mb-6">
              Todo o conteúdo disponibilizado na plataforma Cooperativados, incluindo textos, gráficos, logotipos,
              ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade da
              Cooperativados ou de seus fornecedores de conteúdo e está protegido pelas leis de propriedade intelectual.
            </p>

            <h2 className="text-2xl font-bold mb-6">7. Limitação de Responsabilidade</h2>
            <p className="text-gray-700 mb-6">
              A Cooperativados atua como intermediária entre profissionais e empresas, não sendo responsável pela
              qualidade dos serviços prestados pelos profissionais ou pelas condições oferecidas pelas empresas. Cada
              parte é responsável por suas próprias ações e obrigações.
            </p>

            <h2 className="text-2xl font-bold mb-6">8. Privacidade</h2>
            <p className="text-gray-700 mb-6">
              A Cooperativados valoriza a privacidade de seus usuários. Nossa Política de Privacidade descreve como
              coletamos, usamos e protegemos suas informações pessoais. Ao utilizar nossa plataforma, você concorda com
              as práticas descritas em nossa Política de Privacidade.
            </p>

            <h2 className="text-2xl font-bold mb-6">9. Modificações dos Termos</h2>
            <p className="text-gray-700 mb-6">
              A Cooperativados reserva-se o direito de modificar estes Termos de Uso a qualquer momento. As alterações
              entrarão em vigor imediatamente após sua publicação na plataforma. É responsabilidade do usuário verificar
              periodicamente os termos atualizados.
            </p>

            <h2 className="text-2xl font-bold mb-6">10. Encerramento</h2>
            <p className="text-gray-700 mb-6">
              A Cooperativados pode, a seu critério, suspender ou encerrar o acesso de qualquer usuário à plataforma por
              violação destes Termos de Uso ou por qualquer outro motivo que considere apropriado.
            </p>

            <h2 className="text-2xl font-bold mb-6">11. Disposições Gerais</h2>
            <p className="text-gray-700 mb-6">
              Estes Termos de Uso constituem o acordo integral entre o usuário e a Cooperativados em relação ao uso da
              plataforma. Se qualquer disposição destes termos for considerada inválida ou inexequível, as demais
              disposições permanecerão em pleno vigor e efeito.
            </p>

            <h2 className="text-2xl font-bold mb-6">12. Contato</h2>
            <p className="text-gray-700 mb-6">
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do email:
              termos@cooperativados.com.br ou pelo telefone (11) 3456-7890.
            </p>

            <p className="text-gray-700 italic mt-8">Última atualização: 15 de março de 2023</p>
          </div>
        </div>
      </section>
    </div>
  )
}


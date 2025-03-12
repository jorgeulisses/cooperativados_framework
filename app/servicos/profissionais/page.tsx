// Página de Serviços para Profissionais
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, DollarSign, Shield, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicosProfissionaisPage() {
  // Depoimentos de profissionais
  const depoimentos = [
    {
      id: 1,
      nome: "Carlos Silva",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
      funcao: "Eletricista",
      texto:
        "Desde que me tornei um cooperado, minha vida profissional mudou completamente. Tenho trabalho constante e recebo meus pagamentos em dia, sem preocupações.",
      avaliacao: 5,
    },
    {
      id: 2,
      nome: "Ana Oliveira",
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
      funcao: "Técnica de TI",
      texto:
        "A Cooperativados me permitiu conciliar meus projetos pessoais com trabalhos bem remunerados. A plataforma é intuitiva e o suporte é excelente.",
      avaliacao: 5,
    },
    {
      id: 3,
      nome: "Pedro Santos",
      foto: "https://randomuser.me/api/portraits/men/62.jpg",
      funcao: "Pedreiro",
      texto:
        "Antes eu tinha que procurar trabalho por conta própria, agora as empresas me encontram através da plataforma. Minha renda aumentou significativamente.",
      avaliacao: 4,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Serviços para Profissionais</h1>
              <p className="text-xl mb-6">
                Encontre oportunidades de trabalho, receba pagamentos em dia e tenha suporte administrativo completo.
              </p>
              <Button asChild className="bg-white text-blue-700 hover:bg-gray-100">
                <Link href="/cadastro?tipo=trabalhador">Cadastre-se Agora</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHxA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="Profissionais Cooperativados"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Benefícios para Profissionais</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Ao se tornar um cooperado, você terá acesso a diversos benefícios que facilitarão sua vida profissional.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Calendar className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Oportunidades Constantes</h3>
                  <p className="text-gray-600">
                    Acesso a diversas oportunidades de trabalho com empresas parceiras, de acordo com sua área de
                    atuação e disponibilidade.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <DollarSign className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Pagamentos Garantidos</h3>
                  <p className="text-gray-600">
                    Receba seus pagamentos em dia, sem preocupações com inadimplência ou atrasos. Nós cuidamos de toda a
                    parte financeira.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Segurança Jurídica</h3>
                  <p className="text-gray-600">
                    Todos os contratos são gerenciados dentro das normas legais, garantindo seus direitos e evitando
                    problemas futuros.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Como Funciona</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Entenda o processo de cadastro e trabalho na Cooperativados.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Cadastro</h3>
              <p className="text-gray-600">
                Preencha o formulário de cadastro com suas informações pessoais e profissionais. Anexe documentos que
                comprovem sua qualificação.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Validação</h3>
              <p className="text-gray-600">
                Nossa equipe analisa suas informações e documentos para validar seu cadastro. Este processo geralmente
                leva até 48 horas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Oportunidades</h3>
              <p className="text-gray-600">
                Após aprovado, você terá acesso às oportunidades disponíveis. Você pode aceitar ou recusar as
                solicitações de acordo com sua disponibilidade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Pagamento</h3>
              <p className="text-gray-600">
                Após a conclusão do serviço, você receberá o pagamento diretamente em sua conta bancária, de acordo com
                o ciclo de pagamentos estabelecido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Áreas de Atuação</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Temos oportunidades para profissionais de diversas áreas.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Construção Civil</h3>
              <p className="text-gray-600 text-sm">
                Pedreiros, eletricistas, encanadores, pintores, carpinteiros e outros.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Tecnologia</h3>
              <p className="text-gray-600 text-sm">Desenvolvedores, analistas, técnicos de TI, designers e outros.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Administrativo</h3>
              <p className="text-gray-600 text-sm">Assistentes, secretários, recepcionistas, auxiliares e outros.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Logística</h3>
              <p className="text-gray-600 text-sm">
                Motoristas, entregadores, estoquistas, operadores de empilhadeira e outros.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Financeiro</h3>
              <p className="text-gray-600 text-sm">Contadores, auxiliares contábeis, analistas financeiros e outros.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Saúde</h3>
              <p className="text-gray-600 text-sm">Enfermeiros, técnicos de enfermagem, cuidadores e outros.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Educação</h3>
              <p className="text-gray-600 text-sm">Professores, tutores, instrutores, monitores e outros.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Outros</h3>
              <p className="text-gray-600 text-sm">
                Diversas outras áreas de atuação. Entre em contato para mais informações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Depoimentos</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Veja o que nossos cooperados dizem sobre nós.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento) => (
              <Card key={depoimento.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src={depoimento.foto || "/placeholder.svg"}
                      alt={depoimento.nome}
                      width={80}
                      height={80}
                      className="rounded-full mb-4"
                    />
                    <h3 className="text-lg font-semibold">{depoimento.nome}</h3>
                    <p className="text-blue-600 text-sm mb-4">{depoimento.funcao}</p>
                    <p className="text-gray-600 italic mb-4">"{depoimento.texto}"</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Award
                          key={i}
                          className={`h-5 w-5 ${i < depoimento.avaliacao ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Perguntas Frequentes</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Tire suas dúvidas sobre como trabalhar como cooperado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Como me cadastrar?</h3>
                <p className="text-gray-600">
                  Para se cadastrar, basta clicar no botão "Cadastrar" no menu superior, selecionar a opção
                  "Trabalhador" e preencher o formulário com seus dados pessoais e profissionais.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Quais documentos são necessários?</h3>
                <p className="text-gray-600">
                  É necessário apresentar RG, CPF, comprovante de residência, documentos que comprovem sua qualificação
                  profissional e dados bancários para recebimento.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Como funciona o pagamento?</h3>
                <p className="text-gray-600">
                  Após a conclusão do serviço, a empresa contratante paga à cooperativa, que repassa o valor ao
                  profissional após descontar a taxa administrativa. O pagamento é feito diretamente em sua conta
                  bancária.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Qual é a taxa administrativa?</h3>
                <p className="text-gray-600">
                  A taxa administrativa varia de acordo com a área de atuação e o tipo de serviço prestado. Geralmente,
                  fica entre 10% e 20% do valor do serviço.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Posso recusar uma solicitação de serviço?</h3>
                <p className="text-gray-600">
                  Sim, você tem total liberdade para aceitar ou recusar as solicitações de serviço, de acordo com sua
                  disponibilidade e interesse.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Como funciona a avaliação?</h3>
                <p className="text-gray-600">
                  Após cada serviço, a empresa contratante pode avaliar seu desempenho. Essa avaliação fica disponível
                  em seu perfil e influencia na sua visibilidade para futuras oportunidades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Começar?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Cadastre-se agora mesmo e tenha acesso a diversas oportunidades de trabalho com empresas parceiras.
          </p>
          <Button asChild className="bg-white text-blue-700 hover:bg-gray-100">
            <Link href="/cadastro?tipo=trabalhador">Cadastre-se como Profissional</Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-blue-700 hover:bg-blue-700 hover:text-white">
            <Link href="/cadastro?tipo=empresa">Sou Empresa</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}


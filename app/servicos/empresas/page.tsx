// Página de Serviços para Empresas
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, DollarSign, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicosEmpresasPage() {
  // Depoimentos de empresas
  const depoimentos = [
    {
      id: 1,
      nome: "Roberto Mendes",
      foto: "https://randomuser.me/api/portraits/men/62.jpg",
      cargo: "Gerente de RH - Construtora XYZ",
      texto:
        "Contratar através da Cooperativados reduziu nossos custos operacionais e nos deu acesso a profissionais altamente qualificados. Recomendo a todas as empresas.",
      avaliacao: 5,
    },
    {
      id: 2,
      nome: "Juliana Costa",
      foto: "https://randomuser.me/api/portraits/women/62.jpg",
      cargo: "Diretora Administrativa - Empresa DEF",
      texto:
        "A plataforma nos permitiu encontrar profissionais qualificados de forma rápida e eficiente. O processo de contratação é simples e a gestão administrativa é excelente.",
      avaliacao: 5,
    },
    {
      id: 3,
      nome: "Carlos Ferreira",
      foto: "https://randomuser.me/api/portraits/men/42.jpg",
      cargo: "CEO - Startup Tech",
      texto:
        "Como uma startup em crescimento, precisávamos de flexibilidade na contratação. A Cooperativados nos ofereceu exatamente isso, com profissionais de alta qualidade e sem burocracia.",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Serviços para Empresas</h1>
              <p className="text-xl mb-6">
                Encontre profissionais qualificados, reduza custos operacionais e aumente a produtividade da sua
                empresa.
              </p>
              <Button asChild className="bg-white text-blue-700 hover:bg-gray-100">
                <Link href="/cadastro?tipo=empresa">Cadastre-se Agora</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                alt="Empresas Cooperativados"
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
          <h2 className="text-3xl font-bold text-center mb-4">Benefícios para Empresas</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Ao se cadastrar na Cooperativados, sua empresa terá acesso a diversos benefícios que facilitarão a
            contratação de mão de obra qualificada.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Acesso a Profissionais Qualificados</h3>
                  <p className="text-gray-600">
                    Encontre profissionais qualificados e verificados para atender às necessidades específicas da sua
                    empresa.
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
                  <h3 className="text-xl font-semibold mb-2">Redução de Custos</h3>
                  <p className="text-gray-600">
                    Elimine gastos com processos de recrutamento, seleção, gestão de pessoal e encargos trabalhistas.
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
                    Todos os contratos são gerenciados dentro das normas legais, garantindo segurança jurídica para sua
                    empresa.
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
            Entenda o processo de cadastro e contratação na Cooperativados.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Cadastro</h3>
              <p className="text-gray-600">
                Preencha o formulário de cadastro com as informações da sua empresa. Anexe os documentos necessários
                para validação.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Busca</h3>
              <p className="text-gray-600">
                Após a aprovação do cadastro, você terá acesso à plataforma para buscar profissionais de acordo com suas
                necessidades.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Contratação</h3>
              <p className="text-gray-600">
                Selecione os profissionais desejados e formalize a contratação através da plataforma. Nós cuidamos de
                toda a parte burocrática.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Gestão</h3>
              <p className="text-gray-600">
                Gerencie os contratos, avalie os profissionais e realize os pagamentos diretamente pela plataforma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Contratação */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Tipos de Contratação</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Oferecemos diferentes modalidades de contratação para atender às necessidades específicas da sua empresa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Por Projeto</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Ideal para demandas específicas e pontuais</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Pagamento vinculado à entrega do projeto</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Flexibilidade na definição de prazos e escopo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Sem compromisso de continuidade após a conclusão</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Por Período</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Ideal para demandas sazonais ou temporárias</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Contratação por dias, semanas ou meses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Possibilidade de renovação ao final do período</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Pagamento proporcional ao período contratado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Por Demanda</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Ideal para necessidades recorrentes, mas não contínuas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Contratação apenas quando necessário</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Pagamento por hora ou por serviço realizado</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Máxima flexibilidade para sua empresa</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Depoimentos</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Veja o que nossas empresas parceiras dizem sobre nós.
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
                    <p className="text-blue-600 text-sm mb-4">{depoimento.cargo}</p>
                    <p className="text-gray-600 italic mb-4">"{depoimento.texto}"</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <CheckCircle
                          key={i}
                          className={`h-5 w-5 ${i < depoimento.avaliacao ? "text-yellow-500" : "text-gray-300"}`}
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
            Tire suas dúvidas sobre como contratar através da Cooperativados.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Como cadastrar minha empresa?</h3>
                <p className="text-gray-600">
                  Para cadastrar sua empresa, basta clicar no botão "Cadastrar" no menu superior, selecionar a opção
                  "Empresa" e preencher o formulário com os dados da sua empresa.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Quais documentos são necessários?</h3>
                <p className="text-gray-600">
                  É necessário apresentar CNPJ, contrato social, documentos dos sócios e comprovante de endereço da
                  empresa.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Como funciona o pagamento?</h3>
                <p className="text-gray-600">
                  Após a conclusão do serviço, a empresa realiza o pagamento diretamente à Cooperativados, que se
                  encarrega de repassar o valor ao profissional, após descontar a taxa administrativa.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Qual é o custo para a empresa?</h3>
                <p className="text-gray-600">
                  O custo varia de acordo com o tipo de serviço e a modalidade de contratação. Geralmente, é composto
                  pelo valor da hora do profissional mais a taxa administrativa da cooperativa.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Posso contratar o mesmo profissional várias vezes?</h3>
                <p className="text-gray-600">
                  Sim, você pode solicitar o mesmo profissional para diferentes projetos ou períodos, desde que ele
                  esteja disponível nas datas desejadas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Existe algum vínculo empregatício?</h3>
                <p className="text-gray-600">
                  Não. Os profissionais são cooperados e não possuem vínculo empregatício com a empresa contratante. A
                  Cooperativados se responsabiliza por todos os aspectos legais e administrativos.
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
            Cadastre sua empresa agora mesmo e tenha acesso a profissionais qualificados para suas demandas.
          </p>
          <Button asChild variant="outline" className="border-white text-blue-700 hover:bg-blue-700 hover:text-white">
            <Link href="/cadastro?tipo=empresa">Cadastre-se como Empresa</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}


// Página de Serviços de Gestão Administrativa
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, FileText, DollarSign, Shield, Clock, BarChart, Users, Building } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicosGestaoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Gestão Administrativa</h1>
              <p className="text-xl mb-6">
                Oferecemos toda a gestão administrativa e financeira para profissionais e empresas, permitindo que você
                se concentre no que realmente importa.
              </p>
              <Button asChild className="bg-white text-blue-700 hover:bg-gray-100">
                <Link href="/contato">Fale Conosco</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Gestão Administrativa"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nossos Serviços de Gestão</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Conheça os serviços de gestão administrativa e financeira que oferecemos para profissionais e empresas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 text-blue-600 mr-2" />
                  Gestão Contratual
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Elaboração e gestão de contratos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Verificação de documentação</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Acompanhamento de prazos e entregas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Mediação entre as partes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
                  Gestão Financeira
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Processamento de pagamentos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Emissão de notas fiscais</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Controle de recebimentos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Relatórios financeiros detalhados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-2" />
                  Gestão Legal
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Conformidade com a legislação</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Gestão de obrigações fiscais</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Suporte jurídico especializado</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Resolução de conflitos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Para Profissionais */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Para Profissionais"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Para Profissionais</h2>
              <p className="text-gray-600 mb-6">
                Como profissional cooperado, você pode se concentrar exclusivamente em seu trabalho, enquanto cuidamos
                de toda a parte administrativa e financeira.
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Mais tempo para o que importa</h3>
                    <p className="text-gray-600">Dedique-se ao seu trabalho enquanto cuidamos da burocracia.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Pagamentos garantidos</h3>
                    <p className="text-gray-600">Receba seus pagamentos em dia, sem preocupações com inadimplência.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Segurança jurídica</h3>
                    <p className="text-gray-600">Contratos e obrigações legais gerenciados por especialistas.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <BarChart className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Relatórios detalhados</h3>
                    <p className="text-gray-600">
                      Acompanhe seus ganhos e atividades através de relatórios periódicos.
                    </p>
                  </div>
                </li>
              </ul>

              <Button asChild>
                <Link href="/servicos/profissionais">Saiba Mais</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Para Empresas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pl-12">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                alt="Para Empresas"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Para Empresas</h2>
              <p className="text-gray-600 mb-6">
                Como empresa parceira, você pode focar no seu negócio principal, enquanto nós cuidamos de toda a gestão
                administrativa relacionada à contratação de mão de obra.
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Redução de custos operacionais</h3>
                    <p className="text-gray-600">
                      Elimine gastos com processos de recrutamento, seleção e gestão de pessoal.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Building className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Flexibilidade contratual</h3>
                    <p className="text-gray-600">
                      Contrate por projeto, período ou demanda específica, de acordo com suas necessidades.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Segurança jurídica</h3>
                    <p className="text-gray-600">
                      Todos os contratos são gerenciados dentro das normas legais, evitando riscos trabalhistas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <BarChart className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Relatórios gerenciais</h3>
                    <p className="text-gray-600">
                      Acompanhe custos, produtividade e desempenho através de relatórios detalhados.
                    </p>
                  </div>
                </li>
              </ul>

              <Button asChild>
                <Link href="/servicos/empresas">Saiba Mais</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Plataforma */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nossa Plataforma</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Desenvolvemos uma plataforma tecnológica completa para facilitar a gestão administrativa e financeira para
            profissionais e empresas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Dashboard Personalizado</h3>
                    <p className="text-gray-600">
                      Acesse um painel de controle personalizado com todas as informações relevantes para o seu perfil,
                      seja como profissional ou empresa.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Gestão de Contratos</h3>
                    <p className="text-gray-600">
                      Visualize, assine e acompanhe todos os seus contratos diretamente pela plataforma, com total
                      segurança e transparência.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Gestão Financeira</h3>
                    <p className="text-gray-600">
                      Acompanhe pagamentos, recebimentos, notas fiscais e relatórios financeiros de forma simples e
                      intuitiva.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <BarChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Relatórios e Análises</h3>
                    <p className="text-gray-600">
                      Acesse relatórios detalhados e análises que ajudam a tomar decisões mais assertivas sobre sua
                      carreira ou negócio.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Simplificar sua Gestão?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Cadastre-se agora mesmo e descubra como a Cooperativados pode facilitar a gestão administrativa e financeira
            para você ou sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-blue-700 hover:bg-gray-100">
              <Link href="/cadastro?tipo=trabalhador">Sou Profissional</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-blue-700 hover:bg-blue-700 hover:text-white">
              <Link href="/cadastro?tipo=empresa">Sou Empresa</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


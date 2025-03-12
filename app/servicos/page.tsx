// Página de Serviços da Cooperativados
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Users,
  Building,
  Briefcase,
  PenToolIcon as Tool,
  Code,
  FileText,
  DollarSign,
  ShieldCheck,
} from "lucide-react"

export default function ServicosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conheça as soluções que a Cooperativados oferece para profissionais e empresas.
          </p>
        </div>
      </section>

      {/* Serviços para Profissionais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="Serviços para Profissionais"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Para Profissionais</h2>
              <p className="text-gray-600 mb-6">
                Oferecemos uma plataforma completa para que você possa encontrar oportunidades de trabalho de acordo com
                sua área de atuação e disponibilidade, sem preocupações com burocracia.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Acesso a oportunidades:</span> Conectamos você a empresas que precisam
                    de seus serviços.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Gestão financeira:</span> Cuidamos de todos os aspectos financeiros,
                    garantindo pagamentos pontuais.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Suporte administrativo:</span> Gerenciamos contratos, documentação e
                    obrigações legais.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Flexibilidade:</span> Você decide quando e onde trabalhar, de acordo
                    com sua disponibilidade.
                  </div>
                </li>
              </ul>

              <Button asChild>
                <Link href="/cadastro?tipo=trabalhador">Cadastre-se como Profissional</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços para Empresas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pl-12">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                alt="Serviços para Empresas"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Para Empresas</h2>
              <p className="text-gray-600 mb-6">
                Simplificamos o processo de contratação de mão de obra qualificada, reduzindo custos operacionais e
                aumentando a eficiência da sua empresa.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Acesso a profissionais qualificados:</span> Encontre a mão de obra
                    ideal para suas necessidades.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Redução de custos:</span> Elimine gastos com processos de
                    recrutamento, seleção e gestão de pessoal.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Flexibilidade contratual:</span> Contrate por projeto, período ou
                    demanda específica.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">Segurança jurídica:</span> Todos os contratos são gerenciados dentro
                    das normas legais.
                  </div>
                </li>
              </ul>

              <Button asChild>
                <Link href="/cadastro?tipo=empresa">Cadastre-se como Empresa</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Áreas de Atuação</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Contamos com profissionais qualificados em diversas áreas para atender às necessidades da sua empresa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Tool className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Construção Civil</h3>
              <p className="text-gray-600 mb-4">
                Pedreiros, eletricistas, encanadores, pintores, carpinteiros e outros profissionais para obras e
                reformas.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Construção e reforma
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Instalações elétricas e hidráulicas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Acabamento e pintura
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tecnologia</h3>
              <p className="text-gray-600 mb-4">
                Desenvolvedores, analistas, técnicos de TI, designers e outros profissionais para projetos tecnológicos.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Desenvolvimento de software
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Suporte técnico
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Design e UX/UI
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Administrativo</h3>
              <p className="text-gray-600 mb-4">
                Assistentes, secretários, recepcionistas, auxiliares e outros profissionais para funções
                administrativas.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Secretariado e recepção
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Auxiliar administrativo
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Atendimento ao cliente
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Logística</h3>
              <p className="text-gray-600 mb-4">
                Motoristas, entregadores, estoquistas, operadores de empilhadeira e outros profissionais para operações
                logísticas.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Transporte e entregas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Gestão de estoque
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Operação de equipamentos
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Financeiro</h3>
              <p className="text-gray-600 mb-4">
                Contadores, auxiliares contábeis, analistas financeiros e outros profissionais para a área financeira.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Contabilidade e fiscal
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Análise financeira
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Departamento pessoal
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Segurança</h3>
              <p className="text-gray-600 mb-4">
                Vigilantes, porteiros, controladores de acesso e outros profissionais para segurança patrimonial.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Vigilância patrimonial
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Controle de acesso
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Portaria
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Como Funciona</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Nosso processo é simples e eficiente, garantindo a melhor experiência para profissionais e empresas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Cadastro</h3>
              <p className="text-gray-600">
                Profissionais e empresas se cadastram na plataforma, informando suas qualificações ou necessidades.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Validação</h3>
              <p className="text-gray-600">
                Nossa equipe valida as informações e habilita o acesso à plataforma, garantindo segurança para todos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Contratação</h3>
              <p className="text-gray-600">
                Empresas selecionam os profissionais de acordo com suas necessidades e formalizam a contratação.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Gestão</h3>
              <p className="text-gray-600">
                Gerenciamos todo o processo, desde contratos até pagamentos, garantindo tranquilidade para ambas as
                partes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Começar?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Cadastre-se agora mesmo e descubra como a Cooperativados pode transformar sua experiência profissional ou
            empresarial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-blue-700 hover:bg-gray-100">
              <Link href="/cadastro?tipo=trabalhador">Sou Profissional</Link>
            </Button>
            <Button asChild className="bg-white text-blue-700 hover:bg-gray-100">
              <Link href="/cadastro?tipo=empresa">Sou Empresa</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

